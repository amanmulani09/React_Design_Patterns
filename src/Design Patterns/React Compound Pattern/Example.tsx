import { useState } from "react"
import Tab from "./Tab"

const Example = () =>{
    const [currentTabIndex,setIndex] = useState(1);

    const handleChange = (newIndex:number)=>{
        setIndex(newIndex)
    }
    return(
        <>
        <Tab currentTab={currentTabIndex} onChange={handleChange}>
          <Tab.HeadsContainer>
            <Tab.Item label="tab1" index={0}/>
            <Tab.Item label="tab2" index={1}/>
            <Tab.Item label="tab3" index={2}/>
          </Tab.HeadsContainer>
        </Tab>
        <Tab.ContentConatiner>

            <Tab.ContentItem index={1}>
                <h1>I am content 1</h1>
            </Tab.ContentItem>
            <Tab.ContentItem index={2}>
                <h1>I am content 2</h1>
            </Tab.ContentItem>
            <Tab.ContentItem index={3}>
                <h1>I am content 3</h1>
            </Tab.ContentItem>

        </Tab.ContentConatiner>
        </>
    )
}
export default Example