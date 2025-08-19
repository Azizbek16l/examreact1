import './App.css'
import data from '../public/data.json'

function App() {
  return (
    <div className='body'>
    <header>
      <div className='container'>

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