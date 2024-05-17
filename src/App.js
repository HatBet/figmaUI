import './App.css';
import Navbar from "./pages/navbar";
import Dashboard from "./pages/dashboard";
import Footer from "./pages/footer";
import Products from "./pages/products";
import Info from "./pages/info";
import Section from "./pages/section";
import Info2 from "./pages/info2";
import Info3 from "./pages/info3";

function App() {
  return <>
    <Navbar/>
    <Dashboard/>
    <Products/>
    <Info/>
    <Info2/>
    <Info3/>
    <Section/>
    <Footer/>
  </>;
}

export default App;
