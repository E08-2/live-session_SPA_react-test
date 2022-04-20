import React, { useState, createContext } from "react";
import FormComponent from "./components/FormComponent";
import LocationComponent from "./components/LocationComponent";
import NameComponent from "./components/NameComponent";
import "./App.css";

export const UserContext = createContext();

const App = () => {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");

	return (
		<div className="App">
			<div className="container">
				<UserContext.Provider value={{
					name: name,
					location: location,
					setName: setName,
					setLocation: setLocation
				}}>
					<FormComponent />
				</UserContext.Provider>
				
				<UserContext.Provider value={{
					name: name
				}}>
					<NameComponent />
				</UserContext.Provider>

				<UserContext.Provider value={{
					location: location
				}}>
					<LocationComponent />
				</UserContext.Provider>
			</div>
		</div>
	);
}

export default App;