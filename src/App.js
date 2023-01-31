import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Nav from "./routes/Navigation/nav.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <p>I AM SHOP PAGE</p>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
