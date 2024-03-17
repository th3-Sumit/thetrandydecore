import React, { useState } from "react";
import productImage_01 from "../../../../Assets/Images/Product-images/5122344_2521.jpeg";
import productImage_02 from "../../../../Assets/Images/Product-images/909537_OBFJDK0.jpeg";
import productImage_03 from "../../../../Assets/Images/Product-images/3742217_1987338.jpeg";
import productImage_04 from "../../../../Assets/Images/Product-images/4330515_136.jpeg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { data } from "../../../Common/ProductData/productdata";
function ProductDetails() {
    const [images_show, setImageShow] = useState(productImage_01);
    console.log(data[0], "data")
  return (
    <div className="product-details-container">
      <div className="row m-2">
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-2">
                <div className="col">
                    <div className=" card col-md-12" style={{width: "100%"}}>
                        <img src={productImage_01} alt="" style={{borderRadius: "5px", cursor: "pointer"}} onClick={() => setImageShow(productImage_01)}/>
                    </div>
                    <div className=" card col-md-12 mt-1" style={{width: "100%"}}>
                        <img src={productImage_02} alt="" style={{borderRadius: "5px", cursor: "pointer"}} onClick={() => setImageShow(productImage_02)}/>
                    </div>
                    <div className=" card col-md-12 mt-1" style={{width: "100%"}} >
                        <img src={productImage_03} alt="" style={{borderRadius: "5px", cursor: "pointer"}} onClick={() => setImageShow(productImage_03)}/>
                    </div>
                    <div className=" card col-md-12 mt-1" style={{width: "100%"}}>
                        <img src={productImage_04} alt="" style={{borderRadius: "5px", cursor: "pointer"}} onClick={() => setImageShow(productImage_04)}/>
                    </div>
                </div>
            </div>
          <div className="col-md-10">
            <div className="product-image">
              <div className="card">
                <img
                  src={images_show}
                  alt=""
                  style={{ borderRadius: "5px", height: "400px" }}
                />
              </div>
              <div className="d-flex justify-content-between mt-2">
              <button
                type="button"
                className="btn bg-warning"
                style={{ width: "48%", borderRadius: "unset" }}
              >
              ADD TO CART 🛍 
              </button>
              <button
                type="button"
                className="btn bg-success"
                style={{ width: "48%", borderRadius: "unset" }}
              >
                BUY NOW 
              </button>
              </div>
              
            </div>
          </div>
          </div>
          
        </div>
        <div className="col-md-7">
          <div className="mt-3">
            <h6>{data[0]?.name}</h6>
          </div>
          <div className="d-flex gap-2 mt-1">
            <div className="rating text-center" style={{width: "70px", height: "25px", backgroundColor: "green",borderRadius: "3px" }}>
                <span className="text-light">4.2 ⭐</span>
                
            </div>
            <div className="ml-3">
            <span className="text-secondary font-bold ml-4">
                  43 Ratings & 30 Reviews
                </span></div>
          </div>
          <p className="mt-2 text-success">Special Offer</p>
          <div className="d-flex">
            <h3>$399</h3>
            <h6 className="text-seconday">699</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
