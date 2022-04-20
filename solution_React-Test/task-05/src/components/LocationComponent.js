import React, { useContext } from "react";
import { UserContext } from "../App";

const LocationComponent = () => {
    const user = useContext(UserContext);
    
    return (
        <div><strong>Location:</strong> {user.location}</div>
    )
}

export default LocationComponent;