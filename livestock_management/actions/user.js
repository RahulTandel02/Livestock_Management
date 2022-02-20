import * as api from '../api/user'
// import protect from './auth'

export const RetriveData = (token) => async(dispatch) => {
    try {
        dispatch({
            type:'GET',
        })
    } catch (error) {
        console.log(error)
    }
}


export const getUser = (token) => async(dispatch) => {
    try {
        const {data} = await api.getUser(token);
        dispatch({
            type: 'GET_USER',
            payload: data.data
        })
        dispatch({
            type: 'GET'
        })
    } catch (error) {
        console.log(error);
    }
}

// export const postUser = (user) => async(dispatch) => {
//     try {
//         const {data} = await api.postUser(user)
//     } catch (error) {
//         console.log(error);
//     } 
// }

export const loginUser = (user) => async(dispatch) => {
    try {
        const {data} = await api.loginUser(user)
        dispatch({
            type:"LOGIN",
            payload:data.token
        })
    } catch (error) {
        console.log(error)
    }
    try {
        dispatch
    } catch (error) {
        
    }
}

export const logOut = (user) => async(dispatch) => {
    try {
        dispatch({
            type:'LOGOUT'
        })
    } catch (error) {
        console.log(error)
    }
}


// export const removeUser = (user) => async(dispatch) => {
//     try {
//         dispatch({
//             type:"REM",
//             payload:user
//         })
//     } catch (error) {
        
//     }
// }