import './App.css';
import './components/Navbar'
import {Header} from './components/Header';
import './assets/css/global.css'
import { Section } from './components/Section';


function App() {
  return (
    <div className='app'>
      <div>
        <Header/>
      </div>

      <div>
        <Section/>
      </div>
    </div>

   
  );
}

export default App;
