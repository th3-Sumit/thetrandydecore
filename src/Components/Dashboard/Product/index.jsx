import React from "react";
import p_image_01 from "../../../Assets/Images/Product-images/3742217_1987338.jpeg";
import p_image_02 from "../../../Assets/Images/Product-images/909537_OBFJDK0.jpeg";
import p_image_03 from "../../../Assets/Images/Product-images/88801074_DJV JUL 2361-10.jpeg";
import p_image_04 from "../../../Assets/Images/Product-images/5122344_2521.jpeg";
import p_image_05 from "../../../Assets/Images/Product-images/4330515_136.jpeg";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  
  return (
    <div id="product-section">
      <div className="mt-4">
        <h2 className="text-center underline">Latest Product</h2>
      </div>
      <div className="container mt-4">
        <div className="row">

          
          <div className="col-md-3 h-100">
            <div className="card">
              <div className="card-image">
                <img src={p_image_01} alt="" />
              </div>
            </div>

            <h6 className="bold text-center m-2 text-secondary">Printed Shirt</h6>
          </div>
          <div className="col-md-3  h-100">
            <div className="card">
              <div className="card-image">
                <img src={p_image_02} alt="" />
              </div>
            </div>
            <h6 className="bold text-center m-2 text-secondary">Gift Pack</h6>
          </div>
          <div className="col-md-3  h-100">
            <div className="card" onClick={()=> navigate("/product/printed-cup")}>
              <div className="card-image">
                <img src={p_image_03} alt="" />
              </div>
            </div>
            <h6 className="bold text-center m-2 text-secondary">Printed Cup</h6>
          </div>
          <div className="col-md-3 h-100">
            <div className="card">
              <div className="card-image">
                <img src={p_image_04} alt="" />
              </div>
            </div>
            <h6 className="bold text-center m-2 text-secondary">Mobile Phones</h6>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-3">
            <div className="card h-100">
              <div className="card-image">
                <img src={p_image_05} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100">
              <div className="card-image">
                <img src={p_image_01} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100">
              <div className="card-image">
                <img src={p_image_04} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card  h-100">
              <div className="card-image">
                <img src={p_image_02} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end align-item-end mt-2">
          <button type="button" className="btn btn-outline-dark">
            See More Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
