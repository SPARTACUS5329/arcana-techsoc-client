import React from "react";
import { Router, Switch, Route } from "wouter";
import "./App.css";
import Home from "./pages/Home";

function App() {
	return (
		<div style={{ height: "100vh" }}>
			<Router>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
