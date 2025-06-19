import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native"

const { width, height } = Dimensions.get('window');

export const ProductDetailsScreen = ({ route, navigation }) => {
    const { product } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>Q{product.price}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Cart', { product })}
                >
                    <Text style={styles.buttonText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        width: width * 0.9,
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: width * 0.6,
        borderRadius: 12,
        marginBottom: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
        textAlign: 'center',
    },
    price: {
        fontSize: 20,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});


export default ProductDetailsScreen