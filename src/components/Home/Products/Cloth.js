import React from "react";
import { ClothingData } from "../../../StaticData/CardData";
import { useNavigate } from "react-router-dom";



const Cloth = () => {
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/clothDetails/${id}`)
  };

  return (
    <section id="products">
      <div className="main_product_card">
        {ClothingData.map((product, i) => (
          <div key={product.id} className="card">
            <div className="imgBx">
              <img className="main-img" src={product.img1} alt="" />
              <img className="hover-img" src={product.img2} alt="" />
              <div className="action">
                <ul>
                  <li>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span>Add to Wishlist</span>
                  </li>
                  <li>
                    <button>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span>Add to Cart</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavigate(product.id)}>
                      <i class="fa fa-eye" aria-hidden="true"></i>
                      <span>View Details</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="productName">
                <h3 className="text-2xl">{product.name.slice(0, 15)}...</h3>
              </div>
              <div className="price_rating">
                <h2 className="text-lg font-sans">€{product.price}</h2>
                {/* <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cloth;
