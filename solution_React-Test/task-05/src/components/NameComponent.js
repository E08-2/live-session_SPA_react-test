import React, { useContext } from "react";
import { UserContext } from "../App";

const NameComponent = () => {
    const user = useContext(UserContext);
    
    return (
        <div><strong>Name:</strong> {user.name}</div>
    )
}

export default NameComponent;