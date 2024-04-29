
import React from 'react';
import './HomeCover.css'; // Import the CSS file

const HomeCover = () => {
  return (
    <section className="HomeCover">
      <div className="NavigationBar">
        <ul>
          <li>Home</li>
          <li>All Products</li>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div>\\</div>
      <div className="Content">
        <h1 className="Heading">Ecommerce</h1>
        <p className="Subtitle">Cloths that talk on beahalf of you.something for every occassion</p>
      </div>
    </section>
  );
}

export default HomeCover;

