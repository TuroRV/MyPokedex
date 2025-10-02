import { useLocalSearchParams } from "expo-router";
import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PokemonType = {
  slot: number,
  type: {
    name: string,
    url: string,
  },
};

type Pokemon = {
  cries: {
    latest: string,
  },
  height: number,
  id: number,
  name: string,
  sprites: {
    other: {
      "official-artwork": {
        front_default: string,
      },
    },
  },
  types: PokemonType[],
  weight: number,
};

const DetailsScreen = () => {
    
    const {id} = useLocalSearchParams();

return (
<SafeAreaView style ={styles.container}>
<Text>{id}</Text>
</SafeAreaView>)}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    alignItems: "center"
  }});

export default DetailsScreen;