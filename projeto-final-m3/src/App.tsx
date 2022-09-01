import UserProvider from "./context/UserContext/UserContext";
import LoginRegister from "./pages";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductProvider from "./context/productContext";

function App() {
  return (
    <div className="App">
     <UserProvider>
      <ProductProvider>
        <GlobalStyle />
        <RoutesMain />
        <ToastContainer autoClose={1000} />
        <Header />
        <Footer />
        <Card />
        <LoginRegister/>
      </ProductProvider>
      </UserProvider>
    </div>
  );
}
export default App;
