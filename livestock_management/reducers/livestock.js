const livestock = (livestock = [],action) => {
    switch (action.type) {
        case 'GET_LIVE':
                return action.payload
        case 'POST_LIVE':
            return [...livestock,action.payload]
        default:
            return livestock
    }
}
export default livestock