import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
    {/* CONTEXTS */}
      <GlobalStyle />
      <RoutesMain/>
      <ToastContainer autoClose={1000}/>
      <Header />
      <Registration/>
      <Footer />
    {/* CONTEXTS */}
    </div>
    
  );
}

export default App;
