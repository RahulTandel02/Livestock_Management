import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import FormDatePicker from '../../shared/formDatePicker'
import globalSytles from '../../styles/globalSytles'
import InputText from '../../shared/inputText'

const BirthInformation = ({data,setData,setStep}) => {
    return (
        <View>
            <Text style={[globalSytles.formtitle,{paddingHorizontal:75}]}>Birth Information</Text>
            <FormDatePicker data = {data} setData={setData}/>
            <InputText setData={setData} data={data} placeholder="birthweigth"/>
        </View>
    )
}

export default BirthInformation
