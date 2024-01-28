import Routes from "./Routes";
import { Footer, Header } from "./components";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.style.css";

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
