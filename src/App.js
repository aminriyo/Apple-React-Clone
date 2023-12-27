/** @format */

import "./App.css";
import "./CommonResoucre/css/styles.css";
import "./CommonResoucre/css/bootstrap.css";
import Header from "./Components/Header/Header";
import Alert from "./Components/Alert/Alert";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import YoutubeVideo from "./Components/YoutubeVideo/YoutubeVideo";

function App() {
    return (
        <div className='App'>
            <Header />
            <Alert />
            <Main />
            <YoutubeVideo></YoutubeVideo>
            <Footer />
        </div>
    );
}

export default App;
