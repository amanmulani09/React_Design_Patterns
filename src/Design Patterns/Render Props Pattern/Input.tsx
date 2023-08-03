import { useState } from "react"

const Input = (props:any)=>{

    const [value,setValue] = useState('');
    const handleChanage = (e:any)=> setValue(e.target.value)

    return (
        <>
        <input value={value} onChange={handleChanage} /> <br/>
        {props.renderPropText(value)}
        </>
    )
}

export default Input