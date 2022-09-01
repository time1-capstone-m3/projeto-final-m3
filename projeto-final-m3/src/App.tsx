import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginRegister from "./pages";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
    {/* CONTEXTS */}
      <GlobalStyle />
      <RoutesMain/>
      <ToastContainer autoClose={1000}/>
      <Header />
      <Footer />
      <LoginRegister/>
      <Card />
    {/* CONTEXTS */}
    </div>
  );
}

export default App;
