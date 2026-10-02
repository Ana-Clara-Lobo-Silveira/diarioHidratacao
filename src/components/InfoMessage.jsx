import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function InfoMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.iconContainer}>💡</Text>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Dica de Saúde</Text>
        <Text style={styles.messageText}>Beber água regularmente melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 32,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: 12,
  },  
  messageText: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  iconContainer:{
    width:'10%',
    fontSize: 24,
  },
  textContainer:{
    width: '90%',
  }
});