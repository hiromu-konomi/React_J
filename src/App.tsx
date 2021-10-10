import {BrowserRouter} from "react-router-dom";

import Header from "./components/elements/Header";
import routes from "./router/routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
