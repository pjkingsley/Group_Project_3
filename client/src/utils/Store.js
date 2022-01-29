import React, { useState } from 'react';

const initalState = {
    name: '',
};

export const Context = React.createContext();

const Store = ({ children }) => {
    const [globalState, setGlobalState] = useState(initalState);

    return (
        <Context.Provider value= {[ globalState, setGlobalState ]}>{ children }</Context.Provider>
    );
};

export default Store;