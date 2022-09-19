const reducers = {
    updateEmail: (state, action) => {
        state.user = { ...state.user, email: action.payload };
    }
}

export default reducers;