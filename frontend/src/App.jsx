import React from "react";

import BrowserRouter from "./routes/BrowserRouter";
import FavContext from "./stores/FavContext";

const App = () => {
  return (
    <FavContext>
      <BrowserRouter />
    </FavContext>
  );
};

export default App;
