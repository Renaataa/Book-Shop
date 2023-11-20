import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [loginActive, setLoginActive] = useState(false)
    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                height: 50,
                backgroundColor: 'blueviolet',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTitleAlign: 'center',
            headerLeft: () => {
                return (
                    <Pressable style={styles.btnBack}>
                        <MaterialIcons name="arrow-back-ios" size={20} color="white" />
                    </Pressable>
                )
            }
        })

        
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.loginSectionContainer}>
                <View style={styles.handWave}>
                    <MaterialCommunityIcons name="hand-wave" size={50} color="black" />
                </View>
                <Text style={styles.txtLogin}>Login to your account</Text>
                <Text style={styles.txt}>
                    Login to add items to your wishlist, write to sellers, and view your orders
                    {'\n'}
                </Text>
                <Text style={styles.txtPhoneNum}>
                    Enter your phone number <Text style={styles.asterix}>*</Text>
                </Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={(number) => {
                        number.startsWith('+380') && number.length == 13 ? setLoginActive(true) : ''
                    }}
                    placeholder="+380 (__) ___-__-__"
                    maxLength={13}
                    keyboardType="numeric"
                />
                <Pressable
                    style={styles.btnLogin(loginActive)}
                    disabled = {loginActive}
                    onPress={() => {}}
                >
                    <Text style={styles.txtBtnLogin}>Login</Text>
                </Pressable>
                <View style={styles.txtLoginVia}>
                    <Text style={{fontSize: 15}}>Or login via:</Text>
                </View>
                <View style={styles.containerLoginVia}>
                    <Pressable style={styles.btnLoginVia}>
                        <MaterialCommunityIcons name="email-outline" size={20} color="black" />
                    </Pressable>
                    <Pressable style={styles.btnLoginVia}>
                        <AntDesign name="google" size={17} color="black" />
                    </Pressable>
                    <Pressable style={styles.btnLoginVia}>
                        <FontAwesome5 name="facebook" size={18} color="black" />
                    </Pressable>
                </View>
                <Text style={styles.txtSignUp}>
                    Do not have profil?
                    <Text style={{color: 'dodgerblue'}}> Sign up</Text>
                </Text>
            </View>
            <Text style={styles.usersCount}>2 600 000</Text>
            <Text style={{ ...styles.txt, lineHeight: 28, paddingVertical: 5 }}>
                users daily on prom.ua.
                {'\n'}
                Sign up, add goods, sell allover Ukraine
            </Text>
            <Pressable style={styles.btnSeller}>
                <Text style={{ ...styles.txtBtnLogin, color: 'blueviolet' }}>Become seller on prom.ua</Text>
            </Pressable>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        paddingHorizontal: 25
    },
    loginSectionContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    btnBack: {
        paddingLeft: 18
    },
    handWave: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 26
    },
    txtLogin: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    txt: {
        width: '95%',
        paddingVertical: 13,
        fontSize: 15
    },
    txtPhoneNum: {
        paddingVertical: 7,
        fontSize: 15
    },
    asterix: {
        fontSize: 18,
        fontWeight: 500,
        color: 'red'
    },
    txtInput: {
        width: '100%',
        height: 37,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'silver',
        paddingLeft: 15,
        paddingVertical: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLogin: function (loginActive) {
        return { 
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 37,
            marginTop: 14,
            borderRadius: 8,
            backgroundColor: loginActive ? 'blueviolet' : '#bd9ee1'
        }
    },
    txtBtnLogin: {
        color: 'white',
        fontSize: 15,
        fontWeight: 649
    },
    txtLoginVia: {
        alignItems: 'center',
        width: '100%',
        paddingVertical: 22,
    },
    containerLoginVia: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    btnLoginVia: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
        width: 37,
        height: 37,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius:5
    },
    txtSignUp: {
        paddingVertical: 22,
        fontSize: 15,
        color: 'grey'
    },
    usersCount: {
        paddingTop: 25,
        fontSize: 20,
        fontWeight: 799
    },
    btnSeller: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 39,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'blueviolet'
    }
});