import {MainPage} from "./MainPage/MainPage.jsx";
import {Routes, Route} from 'react-router-dom';
import {Header} from "./MainPage/Header/Header.jsx";
import {Footer} from "./MainPage/Footer/Footer.jsx";
import {Esti} from "./Cases/Esti/Esti.jsx";
import {routes} from "./routes.js";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={routes.main} element={<MainPage/>}/>
                <Route path={routes.esti} element={<Esti/>}/>
                <Route path='*' element={<div>404</div>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
