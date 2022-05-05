import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Auhtentication/Login/Login';
import Register from './Components/Auhtentication/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import InventoryDetail from './Components/Inventory/InventoryDetail/InventoryDetail';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Additem from './Components/Additem/Additem';
import Manageitem from './Components/Manageitem/Manageitem';
import Myitem from './Components/Myitem/Myitem';
import Footer from './Components/Shared/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <Additem></Additem>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={<Manageitem></Manageitem>}></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <Myitem></Myitem>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
         <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
