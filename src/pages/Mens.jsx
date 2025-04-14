import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { CartContext } from '../navcompo/CartContext';

function Mens() {
   const { addToCart } = useContext(CartContext);

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let productData = await axios.get('https://fakestoreapi.com/products');

      let mens = productData.data.filter((item) => item.category === "men's clothing");
      setData(mens);
      console.log(mens);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="inner_section">
        <div className="content">
          <h4>All Products</h4>
          <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {data.map((item, index) => (
              <div className="card d-flex flex-row mb-3" key={index} style={{ maxWidth: '540px' }}>
                <div className="card-body">
                  <img src={item.image} className="img-fluid" alt="..." style={{ width: "150px", objectFit: "cover" }} />
                  <h5 className="card-title" style={{ minHeight: '40px' }}>{item.title}</h5>
                  <div className='' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* <button onClick={() => navigate(`/BuyNow`)} style={{ marginRight: '8px' }}>Buy Now</button> */}
                    <button onClick={() => addToCart(item)}>Add to cart</button> {/* Use the local addToCart */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mens