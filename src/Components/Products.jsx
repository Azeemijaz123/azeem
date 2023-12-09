import React, { useEffect, useState } from 'react'

const Products = () => {
const [products,setProducts]=useState([])

const fetchData=async()=>{
  const responce=await fetch("https://fakestoreapi.com/products")
  const data=await responce.json();
  setProducts(data)
}
useEffect(()=>{
    fetchData();
},[])
  return (
    <div className="d-flex container justify-content-center align-items-center flex-wrap gap-3">
      {
        products.map((item)=>{
          return(
            <div class="card" style={{width: "18rem"}}>
              <img src={item.image} class="card-imd-top imgage" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description.slice(0,50)}</p>
                <a href="#" class="btn btn-primary">{item.price}</a>
              </div>
              </div>
          )
        })
      }
    </div>
    
  )
}

export default Products