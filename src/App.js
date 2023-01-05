import "./App.css";
import "./components/Navbar";
import { Header } from "./components/Header";
import "./assets/css/global.css";
import { BannerHome } from "./components/BannerHome"
import { InfoHome } from "./components/InfoHome"
import { ContentHome } from "./components/ContentHome"
import { ContenidoExclusivo } from "./components/ContenidoExclusivo";
import { LessonPlan } from "./components/LessonPlan/LessonPlan";

function App() {
  return (
    <div className="app">
          <Header />
          <BannerHome/>
          <InfoHome/>
          <ContentHome/>
          <ContenidoExclusivo/>
          <LessonPlan/>
    </div>
  );
}

export default App;
