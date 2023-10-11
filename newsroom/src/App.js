import { Nav } from "./components/NavBars";
import { WebsiteLogo } from './components/WebsiteLogos'
import { Homepage } from './pages/homepages'

function App() {
  return (
    <div className="App">
    <WebsiteLogo />
     <Nav/>
     <Homepage />
    </div>
  );
}

export default App;
