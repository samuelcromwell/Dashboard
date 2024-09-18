import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app dark">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="jobs">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} /> 
        </Route>
        <Route path="reports">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} /> 
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
