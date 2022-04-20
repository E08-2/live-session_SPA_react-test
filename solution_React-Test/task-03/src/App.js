import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	return (
		<div className="App">
			<div>
				<h2 className="subtitle">Update Data from an input</h2>
			</div>

			{/* Display Data */}
			<div className="input-display">
				<p>Display Name: {name} </p>
				<p>Display Age: {age}</p>
			</div>

			<div className="inputs">
				<div className="field">
					<label className="label">Name: </label>
					{/* "Name" input */}
					<input
						className="input"
						type="text"
						placeholder={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>

				<div className="field">
					<label className="label">Age: </label>
					{/* "Age" input */}
					<input
						className="input"
						type="number"
						placeholder={age}
						onChange={(event) => setAge(event.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;