import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [pixelsFromBottom, setPixelsFromBottom] = useState(0);

  	const moveBoxUp = () => {
    	setPixelsFromBottom(pixelsFromBottom + 100);
  	}

  	return (
    	<div className="App">
      		<h1>Move the Box!</h1>

     		{/*
	 		Handle the click event 
	 		When the button is clicked, increase the state variable's value by 100 
	 		*/}
      		<button onClick={moveBoxUp}>👆 Move Up 👆</button>

			{/* Use inline CSS to link the position of the box on the page to the state variable */}
      		<div
        		className="box"
				style={{
					position: "relative",
					bottom: pixelsFromBottom
        		}}
      		/>
    	</div>
  	);
}

export default App;