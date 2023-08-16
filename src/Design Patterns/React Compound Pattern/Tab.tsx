import { createContext,useContext } from "react"
const TabContext = createContext(null);
export default function Tab({currentTab,onChange,children}:any){
    return(
        <div>
            <TabContext.Provider value={{currentTab,onChange,children}}>
                {children}
                </TabContext.Provider>
        </div>
    )
}

Tab.HeadsContainer = ({children}:any)=>{
    return(
        <div>
            {children}
        </div>
    )
}

Tab.Item = ({label,indexchildren}:any)=>{
    return(
        <div>
            {label}
        </div>
    )
}

Tab.ContentConatiner = ({children})=>{
return <div>{children}</div>
}

Tab.ContentItem = ({index,children})=>{
    return(
        <div>
        {children}
        </div>
    )
}
