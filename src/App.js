import { Redirect, Route, Switch } from "react-router";
import MainHeader from "./Component/MainHeader";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import Welcome from "./Pages/Welcome";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Welcome" />
          </Route>
          <Route path="/Welcome">
            <Welcome />
          </Route>
          <Route path="/Product" exact>
            <Product />
          </Route>
          <Route path="/Product/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
