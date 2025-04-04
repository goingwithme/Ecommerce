import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

function Product() {

  const [data, setdata] = useState('')

  const getdata = async () => {

    try {
      let productdata = await axios.get('https://fakestoreapi.com/products')
      setdata(productdata)
      console.log(productdata)
    }
    catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getdata()
  }, [])


  return (
    <div className='section'>
      <div className="inner_section">
        <div className="content">
          <h4>All Product</h4>
        </div>
      </div>
    </div>
  )
}

export default Product