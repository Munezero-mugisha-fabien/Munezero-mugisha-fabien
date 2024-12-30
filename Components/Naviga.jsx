import React from "react";
import { Link } from "react-router-dom";
const Naviga = () => {
    return (
        <div className="Naviga" >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Image</Link></li>
                <li><Link to="/">Video</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
        </div>
    )
}
export default Naviga;