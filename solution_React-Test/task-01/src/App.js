import React from "react";
import "./App.css";

const user = {
	name: "Chris on Code",
	location: "Las Vegas",
	foodType: "Everything",
	age: 28,
	likes: "Coding into the wee hours of the morning",
	twitterUsername: "chrisoncode",
	avatar:
		"https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png",
};

const App = () => {
	return (
		<div className="user-deets">
			<img src={user.avatar} />
			
			<h3>Chris on Code</h3>
			
			<strong>Location</strong>
			<p>{user.location}</p>
			<strong>Eats</strong>
			<p>{user.foodType}</p>
			<strong>Age</strong>
			<p>{user.age}</p>
			<strong>Likes</strong>
			<p>{user.likes}</p>
			<strong>Twitter</strong>
			<a href="https://twitter.com/chrisoncode">@{user.twitterUsername}</a>

		</div>
	);
}

export default App;