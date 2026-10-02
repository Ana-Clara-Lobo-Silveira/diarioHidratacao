import { StatusBar, View, Text, StyleSheet} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./src/constants/colors";
import { Header } from "./src/components/Header";
import { WaterProgress } from "./src/components/WaterProgress";
import { ActionButtons } from "./src/components/ActionButtons";
import { use, useState } from "react";
import { InfoMessage } from "./src/components/InfoMessage";
import { AlterGoal } from "./src/components/AlterGoal";



export default function App(){
  const [GOAL, setGOAL] = useState(2000);

    const handleIncreaseGoal = (ml) => {
    GOAL == 15000 ? setGOAL((memoria) => memoria): setGOAL((memoria) => memoria + ml);
  };

    const handleDecreaseGoal = (ml) => {
    GOAL == 500 ? setGOAL((memoria) => memoria) : setGOAL((memoria) => memoria - ml);
  };

  const [consumed, setConsumed] = useState(0);

  const handleAddWater = (ml) => {
    setConsumed((memoria) => memoria + ml);
  };

  const handleReset = () => {
    setConsumed(0);
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}> 
      <StatusBar barStyle={'auto'}/>
      <View style={styles.content}>
        <Header goal={GOAL}/>
        <AlterGoal goal={GOAL} increaseGoal={handleIncreaseGoal} decreaseGoal={handleDecreaseGoal}/>
        <WaterProgress consumed= {consumed} goal={GOAL} />
        <ActionButtons onAdd={handleAddWater} onReset={handleReset}/>
        <InfoMessage/>

      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});


