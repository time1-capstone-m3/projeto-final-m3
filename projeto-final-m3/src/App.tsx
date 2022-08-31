import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginRegister from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <LoginRegister/>
    </div>
  );
}

export default App;
