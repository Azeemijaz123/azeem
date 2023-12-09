import React from 'react'
import './PreNav.css';

const PreNav = () => {
  return (
    // <div className='pre d-flex'>
    //   <p className='para1'>Free delivery nationwide for orders above PKR 3000</p>
    //   {/* <marquee className='marq'>hioo</marquee> */}
    //   <p className='para2'>+92 42 111178956 support@stylo.pk</p>
    // </div>
<>
<div className='pre d-flex'>
    <div className='pa1'>
      <p className='pa1'>Free delivery nationwide for orders above PKR 3000</p>
    </div>
    <marquee className='mar'>Enjoy free shipping on prepaid orders with code FREESHIPPING at checkout.</marquee>

    <div className='pa2'> 
      <p className='pa2'>+92 42 111178956 support@stylo.pk</p>
    </div>
</div>    
</>
  )
}

export default PreNav