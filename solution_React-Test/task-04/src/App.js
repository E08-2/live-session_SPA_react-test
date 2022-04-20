import React, { useState, useEffect } from "react";

const App = () => {
	const [books, setBooks] = useState([]);

	// Use useEffect when the app first renders to get the books from the API
	useEffect(() => {
		// We will use async/await to fetch this data
		// "Traditional" Promise syntax (including chained .then() handlers) could also have been used
		async function getData() {
			const response = await fetch("https://www.anapioficeandfire.com/api/books");
			const data = await response.json();

			// Store the data in the "books" state variable
			setBooks(data);
		}

		getData();
	}, []);

	return (
		<div>
			<h1>Game of Thrones Books</h1>

			<ul>
				{/* Map the books */}
				{books.map((book, index) => (
					<li key={index}>{book.name}</li>
				))}
			</ul>
		</div>
	)
}

export default App;