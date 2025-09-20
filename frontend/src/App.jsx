import React from "react";
import "./App.css";   // for night mode/ light mode

import BrowserRouter from "./routes/BrowserRouter";
import FavContext from "./stores/FavContext";
import { useTheme } from "./stores/ThemeProvider";

const App = () => {
 const { theme } = useTheme();    

  return (
    <div className="App" data-theme={theme==="dark" ? "dark" : "light"}> {/* class for css */}
      <FavContext>
        <BrowserRouter />
      </FavContext>
    </div>
    
  );
};

export default App;
