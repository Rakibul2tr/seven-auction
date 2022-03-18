import React, { createContext } from 'react';
import UseHoocks from '../UseHoocks/UseHoocks';


export let AouthContext=createContext();

const ContextProvider = ({children}) => {
    const allContext=UseHoocks()
    return (
        <AouthContext.Provider value={allContext}>
            {children}
        </AouthContext.Provider>
    );
};

export default ContextProvider;