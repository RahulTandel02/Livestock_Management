import React, { useState } from "react";
import { Button, TouchableOpacity, View,TextInput,StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {MaterialIcons} from '@expo/vector-icons'
import globalStyles from '../styles/globalSytles'

const FormDatePicker = ({data,setData}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date,setDate] = useState("")
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setData({...data,["birthdate"]:date.toDateString()})
    hideDatePicker();
  };

  return (
    <View style={styles.datePickerView}>
      <View style={styles.inputView}>
        <TextInput
          value={data["birthdate"]}
          placeholder="BIRTH DATE"
          style={{paddingHorizontal:5}}
        />
      </View>
      <View>
        <TouchableOpacity
          style={globalStyles.btnView}
          onPress={showDatePicker}
          >
          <MaterialIcons
            name="calendar-today"
            size={25}
            style={globalStyles.btnText}
            
            />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          />
      </View>
    </View>
    
  );
};

export default FormDatePicker;


const styles = StyleSheet.create({
  datePickerView:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:15
  },
  inputView:{
    flex:3,
    borderRadius:2,
    borderColor:'#b0b0b0',
    borderWidth:1,
    paddingVertical:5
  }
})