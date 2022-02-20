import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView} from 'react-native'
import globalSytles from '../styles/globalSytles'
import { MaterialIcons } from '@expo/vector-icons';

const SignIn = ({navigation}) => {
    const [email,setEmail] = useState({
        'text':'',
        'focus':false,
        'iconFocus':false
    })
    const [password,setPassword] = useState({
        'text':'',
        'focus':false,
        'iconFocus':false
    })

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

    <View style={styles.container}>
        <KeyboardAvoidingView style={styles.formContainer}
             behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
                <Text style={styles.signinText}>Sign Up</Text>
    
            <View style={email.focus ? styles.inputContainerFocused:styles.inputContainer}>
                <MaterialIcons
                    name='mail-outline'
                    size={20}
                    color={email.iconFocus ? '#2660db':'#bababa'}
                    style={styles.iconStyle}
                    />
                <TextInput
                    placeholder='Email'
                    onChangeText={(text) => setEmail({...email,text:text})}
                    style={styles.textInput}
                    onFocus={() => setEmail({...email,focus:true,iconFocus:true})}
                    onBlur={() => email.text === '' ?  setEmail({...email,focus:false,iconFocus:false}):setEmail({...email,focus:false,iconFocus:true})}
                    autoCorrect={false}
                    spellCheck={false}
                    />
            </View>
            <View style={password.focus ? styles.inputContainerFocused:styles.inputContainer}>
                <MaterialIcons
                    name='lock-outline'
                    size={20}
                    color={password.iconFocus ? '#2660db':'#bababa'}
                    style={styles.iconStyle}
                    />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Password'
                    onChangeText={(text) => setPassword({...password,text:text})}
                    style={styles.textInput}
                    onFocus={() => setPassword({...password,focus:true,iconFocus:true})}
                    onBlur={() => password.text === '' ?  setPassword({...password,focus:false,iconFocus:false}):setPassword({...password,focus:false,iconFocus:true})}
                    autoCorrect={false}
                    spellCheck={false}
                    />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'column',width:'100%',marginTop:60}}>
                <TouchableOpacity onPress={() => console.log('press detected')} activeOpacity={0.8}>
                    <View style={styles.signinBtn}>
                        <Text style={styles.signInText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                 <Text style={styles.account}>Already Have an Account? <Text 
                    style={{fontWeight:'bold',color:'black'}}
                       onPress={() => navigation.navigate('Login')}
                    >Login
                </Text></Text>
            </View>
        </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
    )
}

export default SignIn


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerContainer:{
        backgroundColor:'#2660db',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    formContainer:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    signinText:{
        fontSize:35,
        fontWeight:'600',
        color:'black',
        textTransform:'uppercase',
        marginBottom:60
    },
    extraStyle:{
        position:'absolute',
        backgroundColor:'#2660db',
        height:30,
        width:30,
        top:'90%',
        right:'85%'
    },
    textInput:{
      flex:1,
      fontSize:15,
      color:'#2660db',
      fontWeight:'bold',
      
    },
    inputContainerFocused:{
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:'#e5e9f1',
        marginHorizontal:25,
        paddingVertical:10,
        borderRadius:5,
        marginVertical:15,
        shadowColor:'#545454',
        shadowOffset:{
            height:20,
            width:20
        },
        shadowOpacity:0.8,
        elevation:10
    },
    inputContainer:{
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:'#e5e9f1',
        marginHorizontal:25,
        paddingVertical:10,
        borderRadius:5,
        marginVertical:15
    },
    iconStyle:{
        marginHorizontal:10
    },
    forgotPassword:{
        fontSize:11,
        color:'#bababa',
        fontWeight:'bold'
    },
    signinBtn:{
        borderRadius:5,
        elevation:6,
        marginHorizontal:20,
        backgroundColor:'#2660db',
        borderRadius:20
    },
    signInText:{
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        paddingVertical:10
    },
    account:{
        marginTop:60,
        textAlign:'center',
        color:'#545454'
    },
})