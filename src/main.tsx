import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
		{/* <Router basename="react-calc/"> Swap this router tag with the other to run the build to deploy to GH Pages */}
		<Router basename="react-calc/">
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</Router>
    </React.StrictMode>
);
