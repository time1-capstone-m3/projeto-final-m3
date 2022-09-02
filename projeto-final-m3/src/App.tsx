import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserContext/UserContext";
import RoutesMain from "./routes";
import GlobalStyle from './styles/global'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductProvider from "./context/ProductContext/ProductContext";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
          <GlobalStyle />
          <RoutesMain />         
          <ToastContainer autoClose={1500} position={'top-right'} hideProgressBar={false} closeOnClick={true} pauseOnHover={true} draggable={true}/>
          {/* <Header />
          <Footer />
          <Card /> */}
          {/* <Registration /> */}
        </ProductProvider>
      </UserProvider>
    </div>
  );
}
export default App;
