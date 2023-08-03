import React from 'react'
import Input from './Input'
const Example = () => {

    const showValue = (value:string)=> <> <b>The value is {value}</b> </>
    const doublevalue = (value:string) => <>The Value is {+value * +value}</>
  return (
    <div>
        <Input
        renderPropText={showValue}
        />
<br/> <br/>
        <Input
        renderPropText={doublevalue}
        />

    </div>
  )
}

export default Example