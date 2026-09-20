import React from 'react'
import './Home.css';
 function Home() {
  return (
     <div className='home'>
     <section className='hero'>
        <div className='hero-text'>
     <h1>
        كل احتياجك <span> هنا </span>
        </h1>
     <button>تسوقي</button>
     </div>
     <img src='/images/Hero Banner.webp' alt='hero'/>
       </section>  

       <section id='categories' className='Categories' >
        <h2>تسوقي حسب التصنيفات </h2>
        <div className='Categories-list'>
        <div className='Categories-card'>
        <img src='/images/Electronics.jpg' alt='Electronics'/>
        <button>Electronics</button>
        </div>
        
        <div className='Categories-card'>
        <img src='/images/Home Decor.jpg' alt='Home'/>
        <button>Home</button>
        </div>
        
        <div className='Categories-card'>
        <img src='/images/Gifts.jpg' alt='Gifts'/>
        <button>Gifts</button>
        </div>

        </div>
        </section>  
        
        <section className='products-section'>
        <h2>منتجات مميزة</h2>
        <div className='products-list'>
        <div className='products-card'>
        <img src='/images/Earbuds.jpg' alt='Earbuds'/>
        <h3>Earbuds</h3>
        <p>550 SAR</p>
        </div>   
 
        <div className='products-card'>
        <img src='/images/Candle.jpg' alt='Candle'/>
        <h3>Candle</h3>
        <p>99 SAR</p>
        </div>

        <div className='products-card'>
        <img src='/images/Lamp.jpg' alt='Lamp'/>
        <h3>Lamp</h3>
        <p>270 SAR</p>
        </div>
        
            
          </div>
          <a href="/products" className="show-all">
           Show all
             </a>
        </section>
    </div>
  )
}
export default Home;