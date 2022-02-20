import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import InputText from '../../shared/inputText'
import FormSelector from '../../shared/formSelector'
import globalSytles from '../../styles/globalSytles'


const Physical = ({setData,data,setStep}) => {
    const array = ['Male','Female']
    return (
       <View>
            <Text style={[globalSytles.formtitle,{paddingHorizontal:30}]}>Physical Characteristics</Text>
            <FormSelector data={data} setData={setData} placeholder="gender" array={array}/>
            {/* <InputText data={data} setData={setData} placeholder="isneutered"/> */}
            <InputText data={data} setData={setData} placeholder="color"/>
            <InputText data={data} setData={setData} placeholder="description"/>
       </View>
    )
}

export default Physical



