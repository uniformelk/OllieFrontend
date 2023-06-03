import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLayouth from "./layout/UserLayout";
import RegistrarMovie from "./pages/RegistraMovie";

function App() {

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/admin" element={<UserLayouth />} >
            <Route index element={<RegistrarMovie/>}/>
            
          </Route>
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
