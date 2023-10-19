import { BrowserRouter,Form,Route,Routes} from 'react-router-dom';
import './App.css';
import Welcome from './components/regiester';
import Form1 from './components/regiester/index2';




const App = ()=>{
   return(
      <>
      <BrowserRouter>
      <Routes>
         
         <Route path="/" element={<Welcome/>}></Route>
         <Route path="/form" element={<Form1/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
   )
}

export default App;