'use client'

import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const[bookmarks, setBookmarks] = useState([]);

    return(
        <DataContext.Provider value={{bookmarks, setBookmarks}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;