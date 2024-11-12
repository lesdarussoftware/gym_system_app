import { useEffect, useMemo, useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { format } from 'date-fns';

import { useMemberships } from '@/hooks/useMemeberchips';

import { ThemedText } from '@/components/ThemedText';
import { DataTableComponent } from '@/components/DataTable';

import { styles } from '@/constants/styles';
import { Membership } from '@/constants/types';
import { getExpirationDate, membershipIsActive } from '@/helpers/utils';
import { Button } from 'react-native-paper';

export default function MembershipsScreen() {

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
            accessor: (row: { start: any; }) => format(new Date(row.start), 'dd/MM')
        },
        {
            id: 'duration',
            numeric: false,
            label: 'Venc.',
            accessor: (row: Membership) => format(getExpirationDate(row), 'dd/MM')
        },
        {
            id: 'limit',
            numeric: false,
            label: 'Límite',
            accessor: 'limit'
        },
        {
            id: 'classes',
            numeric: false,
            label: 'Clases',
            accessor: (row: Membership) => <Button compact mode="outlined">Ver</Button>
        }
    ], []);

    return (
        <ScrollView
            style={styles.scrollContainer}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View style={styles.mainContainer}>
                <View style={styles.screenContainer}>
                    <ThemedText type="title" darkColor='#000'>
                        Activas
                    </ThemedText>
                    <View style={localStyles.tableContainer}>
                        <DataTableComponent
                            headCells={headCells}
                            rows={memberships.filter((row: Membership) => membershipIsActive(row))}
                        />
                    </View>
                    <ThemedText type="title" darkColor='#000' style={{ marginTop: 20 }}>
                        Vencidas
                    </ThemedText>
                    <View style={localStyles.tableContainer}>
                        <DataTableComponent
                            headCells={headCells}
                            rows={memberships.filter((row: Membership) => !membershipIsActive(row))}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const localStyles = StyleSheet.create({
    tableContainer: {
        marginTop: 5
    }
});
