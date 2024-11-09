import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <>
      <ThemedView>
        <ThemedText type="title">Inicio</ThemedText>
      </ThemedView>
      <ThemedText>Aquí van las notificaciones y novedades</ThemedText>
    </>
  )
}
