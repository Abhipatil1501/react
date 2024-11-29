import Iphone from './assests/images/iphone16.jpeg'
import './style.css'
export function App(){
  console.log(Iphone);
  

  
  return(
    <>
    <div className="card">
      <img src={Iphone} alt="" />
      <div className='infor'>
        <h4>Iphone 16 pro max</h4>
        <p>Lorem, ipsum dolor.</p>
        <p>$100</p>
      </div>
    </div>
    
    </>
   
   
  )

}


