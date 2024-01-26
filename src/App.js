import Routes from "./Routes";
import { Footer, Header } from "./components";
import { appStyles } from "./styles";
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
