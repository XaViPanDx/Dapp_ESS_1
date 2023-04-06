//import { EthProvider } from "./contexts/EthContext";

import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";

import Home from "./components/Home";

function App() {
  return (
    //<EthProvider>
      <div id="App">
        <div className="container">
          <Intro />
          <hr />
          <Setup />
          <br/>
          <Home/>
          <hr />
          <Demo />
          <hr />
          <AdminDashboard/>
          <br/>
          <Footer />
        </div>
      </div>
   //</EthProvider>
  );
}

export default App;
