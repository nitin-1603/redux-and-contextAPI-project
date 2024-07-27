import { Link } from "react-router-dom"
import Form from "./Form"

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={'/'} >Home</Link>
                </li>
                <li>
                    <Link to={'/about'} >About</Link>
                </li>

            </ul>
            <Form />
        </>
    )
}

export default Navbar
