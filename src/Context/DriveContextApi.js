import React, { createContext, useEffect} from "react";


export const GlobalDriveContext = createContext({});
export const GlobalProvider = ({children})=>{
    
    
    const pickUpLocation = {
        latitude: 6.4955785,
        longitude: 3.3308642
    }
    const DriverLocation = {
        latitude: 6.5396,
        longitude: 3.2844
    }

    useEffect(()=>{
        
    },[])

      



    return <GlobalDriveContext.Provider value={{pickUpLocation,DriverLocation}}>
        {children}
    </GlobalDriveContext.Provider>
}