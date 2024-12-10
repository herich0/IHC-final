import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import LogIn from "./pages/LogIn/LogIn.js";
import SignUp from "./pages/SignUp/SignUp.js";
import Buscar from "./pages/Buscar/Buscar.js";
import Manga from "./pages/Manga/Manga.js";

function RoutesApp() {
    return (
        <BrowserRouter>
            <main className="main">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/buscar' element={<Buscar />} />
                    <Route path='/manga' element={<Manga/>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default RoutesApp;