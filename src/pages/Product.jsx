import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

function Product() {

  const [data, setdata] = useState([])

  const getdata = async () => {

    try {
      let productdata = await axios.get('https://fakestoreapi.com/products')
      setdata(productdata.data)
      console.log(productdata.data)
    }
    catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getdata()
  }, [])
  // title

  return (
    <div className='section'>
      <div className="inner_section">
        <div className="content">
          <h4>All Product</h4>
          <div className="card" style={{ width: '18rem', display: 'flex', flexWrap: 'wrap' }}>
            {data.map((item, index) => (
              <div className="card d-flex flex-row mb-3" key={index} style={{ maxWidth: '540px' }}>
                <img src={item.image} className="img-fluid" alt="..." style={{ width: "150px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product