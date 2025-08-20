// App.jsx
import './App.css'
import data from '../public/data.json'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

import Card from './Card';  // Card komponentini chaqirdik

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
            <li>
              <input type="text" />
              <IoMdSearch />
            </li>
            <li><CiHeart /></li>
            <li><LuShoppingCart /></li>
            <li><FaRegUser /></li>
          </ul>
        </div>
      </header>

      <main>
        <div className='container'>
          {
            data.map((item) => (
              <Card 
                key={item.id} 
                rasm={item.img} 
                nom={item.name} 
                narx={item.price} 
                aksiya={item.aksiya} 
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default App;
