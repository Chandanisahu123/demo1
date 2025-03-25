import React from 'react'
import './main.css'
import img1 from './car1.jfif'
import img2 from './estate.jpg'
import img3 from './telibandha.jpg'
import img4 from './tatibandh.jfif'
import img5 from './ghdichowk.jfif'
import rim from './rimg.jpg'
import img7 from './logorp.jfif'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'
function Main_project() {

  return (
    <div className='backclr'>
    <div className='main'>
      
      <ul className='crt'>
        <li><img className='logo' src={img1} alt="" /></li>
        <Link to='/Home'><li>Home</li></Link>
        <li ><Link to='/Property'>PropertySubType </Link></li>
        <li><Link to='/Project'>Project</Link></li>
        <li><Link to='/Explore'>Explore</Link></li>
        <li ><Link to='/Blog'>Blog</Link></li>
        <li><Link to='/Construction'>Construction</Link> </li>
        <li><Link to='/Interior'>Interior</Link></li>
      </ul>
      </div>
      
        <div className='backimg'>
        <Carousel autoplay autoplaySpeed={2000}>
          <div>
          <img className='imgg' src={img2} alt='' />
          </div>
        <div>
        <img className='imgg' src={rim} alt='' />
        </div>
          </Carousel>
        </div>
      
      <div className='section'>
        <div>
          <img className='teli' src={img3} alt='' />
          <h4>TELIBANDHA</h4>
        </div>
        <div>
          <img className='tat' src={img4} alt='' />
          <h4>TATIBANDH</h4>
        </div>
        <div>
          <img className='ghdi' src={img5} alt='' />
          <h4>GHADICHOWK</h4>
        </div>
      </div>
      <br></br>

      <div className='footer'>
        <div>
          <img  className='logor' src={img7} alt=''/>
        </div>
        <div>
          <h2>Explore</h2>
          <h3>Home</h3>
          <h3>About Us</h3>
          <h3>Services</h3>
          <h3>FAQ</h3>
          <h3>Contact Us</h3>
          <h3>Privacy Policy</h3>
          <h3>Terms & Conditions</h3>
        </div>
        <div>
          <h2>Services</h2>

          <h3>Property Dealing</h3>
          <h3>Property Valuation</h3>
          <h3>Legal Documents Process</h3>
          <h3>Doorstep Verification</h3>
          <h3> Consultation Services</h3>
          <h3>Finance Support</h3>
        </div>
      </div>

    </div>
    


  )
}

export default Main_project
