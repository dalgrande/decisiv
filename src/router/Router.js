import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MyRouter({ children }) {
  return (
    <Router>
      <Switch>
        <Route
          path="/:gender/:party/:name/:chamber/:session"
          children={children}
        />
      </Switch>
    </Router>
  );
}

// function Child() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }
