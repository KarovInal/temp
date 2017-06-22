function App(store = { data: 's' }, action) {
    switch(action.type){
        case 'GET_RESPONSE':
            return { ...store, data: action.data }
        case 'ERROR_RESPONSE':
            return { ...store, error: action.error }
        case 'ADD_FILE':
            return { ...store, data: action.data }
        default:
            return store
    }
}

export default App;