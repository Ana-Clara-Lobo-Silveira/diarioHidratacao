import { View, Text, StyleSheet} from "react-native";

export function WaterProgress({consumed, goal}){
    const percentagem = Math.min(Math.round((consumed*100)/goal), 100)
    return(
        <View>
            <Text>Você bebeu {consumed}ml de água hoje.</Text>
            <Text>Você atingiu {percentagem}% da Meta</Text>
            {/* Barra total */}
            <View style={{width:'100%', height:'30', backgroundColor:'grey'}}>
                {/* Barra variável */}
                <View style={{height: '100%', backgroundColor:'blue', width:`${percentagem}%`}}/>
            </View>
        </View>
    )

}

