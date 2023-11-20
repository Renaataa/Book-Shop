import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable style={styles.btn}
                onPress={() => navigation.navigate("Login")}
            >
                <Ionicons name="chatbox-ellipses-outline" size={20} color="white" />
                <Text style={styles.btnTxt}>  Chat</Text>
            </Pressable>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        position: 'fixed',
        bottom: '2%',
        right: '9%',
        backgroundColor: 'blueviolet',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: '20px'
    },
    btnTxt: {
        fontSize: 15,
        fontWeight: 649,
        color: 'white'
    }
});