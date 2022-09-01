import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginRegister from "./pages";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductProvider from "./context/productContext";


function App() {
  return (
    <div className="App">
      <ProductProvider>
        <GlobalStyle />
        <RoutesMain />
        <ToastContainer autoClose={1000} />
        <Header />
        <Footer />
        <Card />
        <LoginRegister/>
      </ProductProvider>
    </div>
  );
}
export default App;
