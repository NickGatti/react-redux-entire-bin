export const getMessage = (msg) => {
    return {
        type: 'GET_MESSAGE',
        payload: msg
    }
}