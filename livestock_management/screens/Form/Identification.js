import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import InputText from '../../shared/inputText'
import globalSytles from '../../styles/globalSytles'

const Identification = ({data,setData,setStep}) => {
    return (
        <View>
            <Text style={[globalSytles.formtitle,{paddingHorizontal:100}]}>Identification</Text>
            <InputText data={data} setData={setData} placeholder={"tagnumber"}/>
            <InputText data={data} setData={setData} placeholder={"tagcolor"}/>
            <InputText data={data} setData={setData} placeholder={"electronicid"}/>
            <InputText data={data} setData={setData} placeholder={"registrynumber"}/>
        </View>
    )
}

export default Identification
