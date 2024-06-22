import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
  return(
       <>
      <BrowserRouter>
        <Navbar title="TextUtils"  aboutText="Text"/>
      <Routes>
        <Route exact path="/textPage" element={<TextForm  heading="Enter your text here"/>}/>
        <Route exact path="/about" element={<About/>}/>
        {/* <Route path="/about"><About/></Route>  it was used in prior version of react from 6th*/}

        
      </Routes>
      </BrowserRouter>

    
      </>
   
  );
}

export default App;
