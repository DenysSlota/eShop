import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersTotal: [],
        auth: false
    },
    reducers: {        
        setUsers: (state, action) => {
            state.usersTotal.push(action.payload);                     
        },
        signIn: (state, action) => {
            state.auth = true
        },
        signOut: (state, action) => {
            state.auth = false
        }           
    }    
});

export const { setUsers, signIn, signOut } = usersSlice.actions;
export default usersSlice.reducer;