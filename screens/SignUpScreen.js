import React, { useState } from 'react'
import {
    StyleSheet, Text, View, Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    TextInput,
    StatusBar,
    ScrollView, SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
const SignUpScreen = () => {
    const navigation = useNavigation()
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true
    })

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        })
    }

    const updataSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updataConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        })
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <StatusBar backgroundColor="#009387" barStyle="light-content" />

                    <View style={styles.header}>
                        <Text style={styles.text_header}>Register Now</Text>
                    </View>

                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer}>
                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <FontAwesome name="user-o" size={24} color="#05375a" />
                            <TextInput
                                placeholder="Enter Email :"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={textInputChange}
                            />
                            {data.check_textInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather name="check-circle" size={24} color="green" />
                                </Animatable.View> : null}
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather name="lock" size={24} color="#05375a" />
                            <TextInput
                                placeholder="Enter Pasword :"
                                style={styles.textInput}
                                autoCapitalize="none"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                onChangeText={handlePasswordChange}
                            />
                            <TouchableOpacity onPress={updataSecureTextEntry}>
                                {data.secureTextEntry ?
                                    <Feather name="eye-off" size={24} color="black" /> :
                                    <Feather name="eye" size={24} color="grey" />

                                }
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.text_footer, { marginTop: 20 }]}>Confirm Password</Text>
                        <View style={styles.action}>
                            <Feather name="lock" size={24} color="#05375a" />
                            <TextInput
                                placeholder="Confirm Pasword :"
                                style={styles.textInput}
                                autoCapitalize="none"
                                secureTextEntry={data.confirmSecureTextEntry ? true : false}
                                onChangeText={handleConfirmPasswordChange}
                            />
                            <TouchableOpacity onPress={updataConfirmSecureTextEntry}>
                                {data.confirmSecureTextEntry ?
                                    <Feather name="eye-off" size={24} color="black" /> :
                                    <Feather name="eye" size={24} color="grey" />

                                }
                            </TouchableOpacity>
                        </View>

                        <View style={styles.button}>
                            <View style={styles.signIn}>
                                <Text style={styles.textSign}>Sign Up</Text>
                            </View>
                            <TouchableOpacity style={[styles.signIn, {
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 10
                            }]}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#009387'
                                }]}>Sign In</Text>
                            </TouchableOpacity>
                        </View>

                    </Animatable.View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        paddingTop: 12
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#009387',

    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'

    }
});