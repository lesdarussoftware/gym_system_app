import { useEffect, useMemo } from 'react';
import { View } from 'react-native';
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
            numeric: true,
            label: 'N° registro',
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
            label: 'Fecha inicio',
            accessor: (row: { start: any; }) => format(new Date(row.start), 'dd-MM-yy')
        },
        {
            id: 'duration',
            numeric: false,
            disablePadding: true,
            label: 'Fecha vencimiento',
            accessor: (row: Membership) => format(getExpirationDate(row), 'dd-MM-yyyy')
        },
        {
            id: 'limit',
            numeric: false,
            disablePadding: true,
            label: 'Límite de ingresos',
            accessor: 'limit'
        }
    ], []);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.screenContainer}>
                <ThemedText type="title" darkColor='#000'>Pagos</ThemedText>
                <DataTableComponent headCells={headCells} rows={memberships} />
            </View>
        </View>
    );
}
