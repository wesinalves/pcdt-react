import React, { createContext, useReducer } from 'react';
import { initialState, UserReducer } from '../reducers/userReducer'

export const UserContext = createContext<any>(Object);

export default (children: any) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}