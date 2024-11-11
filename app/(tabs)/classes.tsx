import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useClasses } from '@/hooks/useClasses';

import { ThemedText } from '@/components/ThemedText';
import { Collapsible } from '@/components/Collapsible';

import { styles } from '@/constants/styles';
import { ClassType } from '@/constants/types';

export default function ClassesScreen() {

    const { getClasses, classes } = useClasses();

    useEffect(() => {
        getClasses();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.screenContainer}>
                <ThemedText type="title" darkColor='#000'>Clases</ThemedText>
                <View style={localStyles.collapsible}>
                    {classes.map((c: ClassType) => {
                        return (
                            <Collapsible title={c.name}>
                                <ThemedText key={c.id}>
                                    <ThemedText type="defaultSemiBold" darkColor='#000'>{c.name}</ThemedText>
                                </ThemedText>
                            </Collapsible>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    collapsible: {
        marginTop: 10
    }
});