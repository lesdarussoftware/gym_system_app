import { useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';

import { useMemberships } from '@/hooks/useMemeberchips';

import { ThemedText } from '@/components/ThemedText';
import { DataTableComponent } from '@/components/DataTable';

import { styles } from '@/constants/styles';
import { Membership } from '@/constants/types';
import { getExpirationDate } from '@/constants/helpers';

export default function PaymentsScreen() {

    const { memberships, getMemberships } = useMemberships();

    useEffect(() => {
        getMemberships();
    }, []);

    const headCells = useMemo(() => [
        {
            id: 'id',
            numeric: false,
            label: '#',
            accessor: 'id'
        },
        {
            id: 'price',
            numeric: false,
            label: 'Precio',
            accessor: (row: { price: number; }) => `$${row.price.toFixed(2)}`
        },
        {
            id: 'start',
            numeric: false,
            label: 'Inicio',
            accessor: (row: { start: any; }) => format(new Date(row.start), 'dd-MM-yy')
        },
        {
            id: 'duration',
            numeric: false,
            label: 'Venc.',
            accessor: (row: Membership) => format(getExpirationDate(row), 'dd-MM-yy')
        },
        {
            id: 'limit',
            numeric: false,
            label: 'Límite',
            accessor: 'limit'
        }
    ], []);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.screenContainer}>
                <ThemedText type="title" darkColor='#000'>Pagos</ThemedText>
                <View style={localStyles.tableContainer}>
                    <DataTableComponent headCells={headCells} rows={memberships} />
                </View>
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    tableContainer: {
        marginTop: 10
    }
});
