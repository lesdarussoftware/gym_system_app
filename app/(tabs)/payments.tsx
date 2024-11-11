import { useEffect, useMemo, useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { format } from 'date-fns';

import { useMemberships } from '@/hooks/useMemeberchips';

import { ThemedText } from '@/components/ThemedText';
import { DataTableComponent } from '@/components/DataTable';

import { styles } from '@/constants/styles';
import { Membership } from '@/constants/types';
import { getExpirationDate } from '@/constants/helpers';

export default function PaymentsScreen() {

    const { memberships, getMemberships } = useMemberships();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getMemberships();
        setRefreshing(false);
    }, [getMemberships]);

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
        <ScrollView
            style={styles.scrollContainer}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View style={styles.mainContainer}>
                <View style={styles.screenContainer}>
                    <ThemedText type="title" darkColor='#000'>Pagos</ThemedText>
                    <View style={localStyles.tableContainer}>
                        <DataTableComponent headCells={headCells} rows={memberships} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const localStyles = StyleSheet.create({
    tableContainer: {
        marginTop: 10
    }
});
