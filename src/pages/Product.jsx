import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Cart from './Cart'; // Import the Cart component
import { CartContext } from '../navcompo/CartContext';

function Product() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Local cart state
  const navigate = useNavigate(); // Get the navigate function

  const { addToCart } = useContext(CartContext);



  const getData = async () => {
    try {
      let productData = await axios.get('https://fakestoreapi.com/products');
      setData(productData.data);
      console.log(productData.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  // localStorage.clear()
  
  // const addToCart = (item) => {
  //   // Get existing items from sessionStorage
  //   const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
  //   // Add the new item
  //   const updatedCart = [...existingCart, item];
    
  //   // Save updated cart back to sessionStorage
  //   localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
  //   // Update React state
  //   setCartItems(updatedCart);
    
  //   console.log('Cart updated:', updatedCart);
  // };




  return (
    <div>
      {/* <Cart value={addToCart} /> */}

      <div className='section'>
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
                      <button style={{ marginRight: '8px' }}>Buy Now</button>
                      <button onClick={() => addToCart(item)}>Add to cart</button> {/* Use the local addToCart */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  header: {
    background: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    display: "block"
  },
  badge: {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '5px 10px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
};

export default Product;