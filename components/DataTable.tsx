import { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';

export function DataTableComponent({ headCells, rows }: { headCells: any, rows: any[] }) {

    const [page, setPage] = useState<number>(0);
    const [numberOfItemsPerPageList] = useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, rows.length);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <DataTable>
            <DataTable.Header>
                {headCells.map((hc: any) => (
                    <DataTable.Title key={hc.id} numeric={hc.numeric}>{hc.label}</DataTable.Title>
                ))}
            </DataTable.Header>
            {rows.slice(from, to).map((row: any, index: number) => {
                return (
                    <DataTable.Row key={row.key}>
                        {headCells.map((hc: any, idx: number) => (
                            <DataTable.Cell numeric={hc.numeric}>
                                {typeof hc.accessor === 'function' ? hc.accessor(row, index) : row[hc.accessor]}
                            </DataTable.Cell>
                        ))}
                    </DataTable.Row>
                )
            })}
            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(rows.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} de ${rows.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Registros por página'}
            />
        </DataTable>
    );
};