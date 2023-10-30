import { BrowserRouter,Form,Route,Routes} from 'react-router-dom';
import './App.css';
import Welcome from './components/regiester';
// import Form1 from './components/regiester/index2';
import DataList from './components/regiester/index3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cake from './components/file/Cake';
import Wel from './components/regiester/welcome';
import Login from './components/regiester/login';
import App1 from './components/regiester/hook';




const App = ()=>{
   return(
      <>
      <BrowserRouter>
      <Routes>
         
         <Route path="/" element={<Welcome/>}></Route>
         {/* <Route path="/form" element={<Form1/>}></Route> */}
         <Route path="/getdata"  element={<DataList/>}></Route>
         <Route path="/cake" element={<Cake/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/welcome" element={<Wel/>}></Route>
         <Route path="/hook" element={<App1/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
   )
}

export default App;