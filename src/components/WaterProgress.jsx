import { View, Text, StyleSheet} from "react-native";

export function WaterProgress({consumido=666, objetivo=2000}){
    const porcentagem = Math.round((consumido*100)/objetivo)
    const barra = Math.min()
    return(
        <View>
            <Text>Você bebeu 200ml de água hoje.</Text>
            <Text>Você atingiu {porcentagem}% da Meta</Text>
            {/* Barra azul */}
            <View>
                {/* Barra laranja */}
                <View/>
            </View>
        </View>
    )
}