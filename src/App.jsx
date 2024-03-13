import {MainPage} from "./MainPage/MainPage.jsx";
import {Routes, Route} from 'react-router-dom';
import {Header} from "./MainPage/Header/Header.jsx";
import {Footer} from "./MainPage/Footer/Footer.jsx";
import {Esti} from "./Cases/Esti/Esti.jsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/esti/" element={<Esti/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
