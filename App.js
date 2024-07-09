import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "skyblue",
};
const Restaurantcard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res-img"
        className="res-logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/025/028/422/small/a-big-breakfast-food-png.png"
      />
      <h3>Santhosh Dhaba</h3>
      <h4>Biryani, North Inidan, Asian</h4>
      <h4>4.5 stars</h4>
      <h4>38 min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
        <Restaurantcard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
