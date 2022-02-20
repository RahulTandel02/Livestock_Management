import React,{useEffect,useState} from 'react'
import { StyleSheet,View,Text } from 'react-native'
import globalSytles from '../styles/globalSytles'
import axios from 'axios'

const Loading = ({navigation}) => {
    const [data,setData] = useState([
        {"title":"", "content":"", "_id":"1"}
    ])

    useEffect(() => {
        const getData = async() => {
            const res = await axios.get("http://10.0.2.2:5000/blog")
            setData(res.data)
            if(data.title != ""){
                 navigation.navigate("Home", {
                    data:data
                })
            }
        }
        getData()
    })

    return (
        <View style={globalSytles.container}>
            <Text style={globalSytles.text}>Loading</Text>
        </View>
    )
}

export default Loading
