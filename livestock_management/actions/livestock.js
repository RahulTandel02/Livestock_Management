import * as api from '../api/livestock'

export const getLivestock = (id) => async(dispatch) => {
    try {
        const {data} = await api.getLivestockapi(id)
        dispatch({
            type:'GET_LIVE',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const postLivestock = (livestockData) => async(dispatch) => {
    try {
        const {data} = await api.postLivestockapi(livestockData)
        dispatch({
            type: 'POST_LIVE',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}