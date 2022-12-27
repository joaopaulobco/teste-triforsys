import "./App.css";
import "./components/Navbar";
import { Header } from "./components/Header";
import "./assets/css/global.css";
import { BannerHome } from "./components/BannerHome"
import { InfoHome } from "./components/InfoHome"

function App() {
  return (
    <div className="app">
          <Header />
          <BannerHome/>
          <InfoHome/>
    </div>
  );
}

export default App;
