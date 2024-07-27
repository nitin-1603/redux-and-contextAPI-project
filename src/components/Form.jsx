import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setName, setAge } from "../redux/userslice/userslice"

const Form = () => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.user.name)
    const age = useSelector((state) => state.user.age)
    return (
        <>
            <div>{name}</div><br />
            <div>{age}</div><br />
            <input type="text" value={name} onChange={(e) => dispatch(setName(e.target.value))} />
            <br />
            <input type="number" value={age} onChange={(e) => dispatch(setAge(e.target.value))} />

        </>
    )
}

export default Form
