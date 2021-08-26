// HOC
import {Route,Redirect} from "react-router-dom";
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// Component
import Temp from "./Components/temp";
//import Master from "./Components/master";
import Home from "./Page/Home"

function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery" />
      </Route>
     
      <HomeLayoutHOC path="/:type" exact component={Home} />
      
      <RestaurantLayoutHOC path="/restuarant/:id" exact component={Temp} />
      
    </>
  );
}

export default App;
//Delivery
//Dining
//Night
//Nutrition
//Master->url parameter