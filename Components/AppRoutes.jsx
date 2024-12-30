import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HomeBody from "./HomeBody";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="" element={<HomePage/>}>
                <Route index element={<HomeBody/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;