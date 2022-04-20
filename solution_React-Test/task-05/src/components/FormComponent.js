import React, { useContext } from "react";
import { UserContext } from "../App";

const FormComponent = () => {
    const user = useContext(UserContext);
    
    return (
        <div className="user-form">
            <div className="input-item">
                <label className="label">Update Name: </label>
                <input
                    className="input"
                    value={user.name}
                    onChange={(event) => user.setName(event.target.value)}
                />
            </div>

            {/*  {/_ Change user's location in context _/} */}
            <div className="input-item">
                <label className="label">Update Location: </label>
                <input
                    className="input"
                    value={user.location}
                    onChange={(event) => user.setLocation(event.target.value)}
                />
            </div>
        </div>
    );
};

export default FormComponent;