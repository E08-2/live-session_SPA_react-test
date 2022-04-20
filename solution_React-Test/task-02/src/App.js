import React from "react";

const people1 = [
	{ id: 1, name: "chris" },
	{ id: 2, name: "nick" },
];

const people2 = [
	{
		name: "chris",
		pets: [
			{ name: "bella", type: "dog" },
			{ name: "cocoa", type: "dog" },
		],
	},
	{
		name: "nick",
		pets: [
			{ name: "hilo", type: "cat" },
			{ name: "polly", type: "cat" },
		],
	},
];

const App = () => {
	return (
		<>
		<h2>Part 1</h2>
		<ul>
			{/* Single line ES6 arrow function - no "return" statement needed */}
			{people1.map(person => <li key={person.id}>{person.name}</li>)}
		</ul>
		
		<h2>Part 2</h2>
		<ul>
			{/* Multiple line ES6 arrow function - "return" statement needed */}
			{people2.map(person => {
				return (
					<>
						<li>{person.name}</li>
						<ul>
							{/* Multiple line ES6 arrow function - "return" statement needed */}
							{person.pets.map(pet => {
								return <li>{pet.name} the {pet.type}</li>
							})}
						</ul>
					</>	
				)
			})}
		</ul>
		</>
	);
}

export default App;