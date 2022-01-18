import { Route } from "react-router";

const Welcome = () => {
    return (
      <section>
        <h1>Welcome</h1>
        <Route path="/Welcome/newUser">
          <p>Welcome to page</p>
        </Route>
      </section>
    );
  };
  export default Welcome;