import React from "react";
import { Router, Switch, Route } from "wouter";
import "./App.css";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
