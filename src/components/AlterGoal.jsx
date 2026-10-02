import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../constants/colors';

export function AlterGoal({ goal, increaseGoal, decreaseGoal }) {
  return (
    <View style={styles.card}>
        <Text style={styles.subText}>Ajustar Meta Diária:</Text>
        <View style={styles.alterGoalRow}>
            <Pressable style={styles.button} onPress={() => decreaseGoal(250)}>
                <Text style={styles.buttonText}>- 250ml</Text>
            </Pressable>
            <Text style={styles.title}>{goal} ml</Text>
            <Pressable style={styles.button} onPress={() => increaseGoal(250)}>
                <Text style={styles.buttonText} >+ 250ml</Text>
            </Pressable>
        </View>

    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subText: {
    fontSize: 14,
    color: COLORS.textMain,
    marginBottom: 16,

  },
    alterGoalRow: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    alignItems: 'center',
  },
    title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
    button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
    buttonText: {
    color: COLORS.primary,
    fontSize: 14,
  },
});