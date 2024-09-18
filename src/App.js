import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
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

        <Route path="reports">
          <Route index element={<Single />} />
          <Route path=":productId" element={<Single />} /> 
        </Route>

        <Route path="settings" element={<Settings />}/>
       
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
