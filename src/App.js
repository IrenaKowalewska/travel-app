import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Country from "./pages/Country";

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/country' exact component={Country}/>
      <Route path='*' component={NotFound}/>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
