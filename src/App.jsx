import {MainPage} from "./MainPage/MainPage.jsx";
import {Routes, Route} from 'react-router-dom';
import {Esti} from "./Cases/Esti/Esti.jsx";
import {routes} from "./routes.js";

function App() {
    return (
        <>
            <Routes>
                <Route path={routes.main} element={<MainPage/>}/>
                <Route path={routes.esti} element={<Esti/>}/>
                <Route path='*' element={<div>404</div>}/>
            </Routes>
        </>
    )
}

export default App
