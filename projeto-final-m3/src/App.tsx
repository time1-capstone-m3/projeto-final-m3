import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserProvider from "./context/UserContext/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
