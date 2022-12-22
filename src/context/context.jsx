import React, { useState } from 'react';
import { createContext } from "react";
import { RouteComp } from '../routes/routeComp'


export const localNavigation = createContext();


const Context = () => {
    const [navigation,setNavigation] = useState("Products")
    return (
    <localNavigation.Provider value={[navigation,setNavigation]}>
        <RouteComp/>
    </localNavigation.Provider>
    );
}

export default Context;
