import UserProvider from "./context/UserContext/UserContext";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Registration from "./components/Registration";
import ProductProvider from "./context/ProductContext/ProductContext";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Card from "./components/Card";
import LoginRegister from "./pages/login-cadastro";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
          <GlobalStyle />
          <RoutesMain />
          <ToastContainer autoClose={1000} />
          {/* <Header />
          <Footer />
          <Card /> */}
          {/* <Registration /> */}
          
          <LoginRegister/>
        </ProductProvider>
      </UserProvider>
    </div>
  );
}
export default App;
