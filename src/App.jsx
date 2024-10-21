
import './App.css'
import Fruits from './Components/Basicfilter'
import { Route,Routes } from 'react-router-dom'
import SemiAdvancedFilter from './Components/SemiAdvancecdFilter'
import NavBar from './Components/NavBar'
import AdvanceSearch from './Components/AdvancedSearch'
import ApiFilter from './Components/Apifilter'
import BasicPagenation from './Components/BasicPagenation'
import AdvancePagenation from './Components/AdvancePagenation'
import Users from './Components/Users'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetaisl'
import ProductDetailsSearch from './Components/ProductDetailsSearch'
import FormV from './Components/Formjs'
import Employees from './Components/employees'
import Employee from './Components/Employee'





function App() {

  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Fruits/>} />
          <Route path  ='/medium-search/:apple/:banana/:carrot' element={<SemiAdvancedFilter/>} />
          <Route path  ='/advance-search' element={<AdvanceSearch/>} />
          <Route path  ='/products' element={<Products/>} />
          <Route path  ='/basic-pagenation'  element={<BasicPagenation/>} />
          <Route path = '/advance-pagenation' element= {<AdvancePagenation/>}/>
          <Route path = '/users/:greeting' element= {<Users/>}/>
          <Route path = '/product-details/:productName/:price' element= {<ProductDetails/>}/>
          <Route path = '/product-details-search' element= {<ProductDetailsSearch/>}/>
          <Route path = '/form' element= {<FormV/>}/>
          <Route path = '/employees' element= {<Employees/>}/>
          <Route path = '/employee' element= {<Employee/>}/>



        
        </Routes>
    </div>
  )
}

export default App
