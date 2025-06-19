import { StatusBar } from "expo-status-bar"
import { FlatList,StyleSheet, Text, View, Image, Dimensions, Button } from "react-native"

const { width, height } = Dimensions.get('window');

const products = [
    {
        id: 1, 
        name: "Gato 1", 
        price: 6, 
        image:"https://i.pinimg.com/564x/19/07/31/19073125e883c05eae1d19dec14c964c.jpg" 
    },
    { 
        id: 2, 
        name: "Gato 2", 
        price: 1, 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhpZ0RUWSVRB4L-Clr9jZmaNQhbWp4Rvaqw&s" 
    },
    { 
        id: 3, 
        name: "Gato 3", 
        price: 15, 
        image:"https://i.pinimg.com/236x/51/30/77/5130770e4cdec78276415c649837bef0.jpg"
    }
]

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>Q{item.price}</Text>

                        <Button
                            title="View Details"
                            onPress={() => navigation.navigate('ProductDetails', { product: item })}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        marginBottom: 10,
        allignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.2,
    },
    image: {
        width: width * 0.88,
        height: width * 0.5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.2,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default HomeScreen