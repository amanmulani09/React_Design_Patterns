import { createContext,useContext } from "react"
import './Tab.css'
const TabContext = createContext({});
export default function Tab({currentTab,onChange,children}:any){
    return(
      <div className="tab">
        <TabContext.Provider value={{currentTab,onChange,children}}>
            {children}
        </TabContext.Provider>
      </div>
    )
}

Tab.HeadsContainer = ({children}:any)=>{
    return(
        <div className="headsContainer">
            {children}
        </div>
    )
}

Tab.Item = ({label,index,children}:any)=>{
    const {currentTab,onChange}:any = useContext(TabContext)
    console.log(currentTab,onChange)
    return(
        <div className={`item ${currentTab === index ? 'active': ''}`} onClick={()=> onChange(index)}>
            {label}
        </div>
    )
}

Tab.ContentConatiner = ({children})=>{
return <div className="ContentConatiner">{children}</div>
}

Tab.ContentItem = ({index,children})=>{
    const {currentTab,onChange}:any = useContext(TabContext)
    console.log(currentTab,index)
    return currentTab === index && <div> {children}</div>
    
}
