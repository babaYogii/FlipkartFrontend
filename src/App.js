import './App.css';
import {useEffect} from 'react'
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Home from './container/Home';
import Signup from './container/Signup';
import Signin from './container/Signin';
import PrivateRoute from './components/HOC/PrivateRoutes'
import { isUserLoggedIn } from './action';
import {useDispatch,useSelector}from 'react-redux'
import Orders from './container/orders';
import Products from './container/products';

function App() {

   const dispatch=useDispatch();
   const auth = useSelector(state=>state.auth)

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
}, [])


  return (
    <div className="App">
        <Router>
          <Routes>
            
          <Route element={<PrivateRoute/>}>
             <Route element={<Home/>} path='/' exact/>
             <Route element={<Products/>} path='/products' />
             <Route element={<Orders/>} path='/orders' />
          </Route>
          <Route exact path='/signin' element={<Signin/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
