import React from "react";
import p_image_04 from "../../../../../Assets/Images/Product-images/3742217_1987338.jpeg";
import Footer from "../../../../Common/Footer";
import { data } from "../../../../Common/ProductData/productdata";
import { Link, useNavigate } from "react-router-dom";

function PrintedCup() {
  const navigate = useNavigate();
  const navigateItem = (index) =>{
    return `/product/printed-cup/${data[index]?.url}`
  }
  return (
    <div className="product-container">
      <h2 className="text-center m-4">Printed Cup</h2>
      <div className="container">
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-md-3 h-100">
              <div className="card">
              <Link to={navigateItem(index)}>
                <div className="card-image">
                  <img src={p_image_04} alt="" />
                </div>
                </Link>
              </div>

              <h6 className="bold text-center m-2 text-secondary">
                {item?.name}
              </h6>
            </div>
          ))}
          
          
          
        </div>
        
        
      </div>
      <Footer />
    </div>
  );
}

export default PrintedCup;
