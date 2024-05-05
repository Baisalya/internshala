import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Slider.css'; 

const Slider = () => {
  const slider = useRef(null);

  const scrollLeft = () => {
    if (slider.current) {
      slider.current.scrollLeft -= 200; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (slider.current) {
      slider.current.scrollLeft += 200; // Adjust scroll amount as needed
    }
  };

  return (
    <section className="slider">
      <h1 className="slider-heading">Featured Products</h1>
      <div className="slider-container">
        <div className="slider-content" ref={slider}>
          
          <div className="slideritem">
            <img src="https://m.media-amazon.com/images/I/71rmM69WmmL._AC_UY1100_.jpg" alt="Product 1" />
            <div className="product-details">
              <h2>Product 1</h2>
              <h3>$20</h3>
              <p>Description 1</p>
              <button className="add-to-cart-button">
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="slideritem">
            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdd%2Fcf%2Fddcfe4e1b1313da86b059e70a1422ec4927aece3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="Product 1" />
            <div className="product-details">
              <h2>Product 2</h2>
              <h3>$30</h3>
              <p>Description 2</p>
              <button className="add-to-cart-button">
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="slideritem">
            <img src="https://di2ponv0v5otw.cloudfront.net/posts/2023/04/14/6439b5d4a0aeb779e22c3af3/s_6439b5e9a0e6c6bdbb26afcd.jpg" alt="Product 1" />
            <div className="product-details">
              <h2>Product 3</h2>
              <h3>$15</h3>
              <p>Description 3</p>
              <button className="add-to-cart-button">
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="slideritem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgZhbbtfTcmkuKbqXNcx9PMkHN0Mjbf67HLK93jyWp1yRTYTqxM5TS1dD5uosrYj0it8&usqp=CAU" alt="Product 1" />
            <div className="product-details">
              <h2>Product 4</h2>
              <h3>$5.9</h3>
              <p>Description 4</p>
              <button className="add-to-cart-button">
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="slideritem">
            <img src="https://www.snitch.co.in/cdn/shop/files/4MSD3590-01-324387_1800x1800.jpg?v=1685973160" alt="Product 1" />
            <div className="product-details">
              <h2>Product 5</h2>
              <h3>$35</h3>
              <p>Description 5</p>
              <button className="add-to-cart-button">
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-controls">
        <button className="control-button" onClick={scrollLeft}>&lt;</button>
        <button className="control-button" onClick={scrollRight}>&gt;</button>
      </div>
    </section>
  );
}

export default Slider;
