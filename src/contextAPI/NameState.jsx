import MyContext from "./NameContext"
import { useState } from "react"

const NameState = (props) => {
    const [name, setName] = useState('Harry')
    return (
        <>
            <MyContext.Provider value={{ name, setName }}>
                {props.children}
            </MyContext.Provider>

        </>
    )
}

export default NameState
