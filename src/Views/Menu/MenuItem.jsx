import { Link } from "react-router-dom";

export function MenuItem({ text, link }) {

    return <li>
        <>
            <Link to={link}>{text}</Link>

        </>
    </li>
}