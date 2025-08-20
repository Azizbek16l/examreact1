import './App.css'
import data from '../public/data.json'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
function App() {
  return (
    <div className='body'>
    <header>
      <div className='container'>
      <h2 id="logo">Exclusive</h2>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>

      </ul>
        <ul>
          <li><input type="text" /><IoMdSearch/></li>
          <li><CiHeart/></li>
          <li><LuShoppingCart/></li>
          <li><FaRegUser/></li>
        </ul>
      
      </div>
    </header>
    <main>
      <div className='container'>
        
       {
        data.map((item)=>(
          <div key={item.id} className='card'>
            <div className='img-box'>
              <img src={item.img} />             
            </div>
             <button className='buy-btn'>Add to cart</button>
              <p>{item.name}</p>
              <p id="price">{item.price} <span id='discount'>{item.aksiya}</span></p>

               <span id='reyting'>⭐⭐⭐⭐</span>
          </div>
        ))
       } 
      </div>

    </main>
    </div>
  )
}

export default App