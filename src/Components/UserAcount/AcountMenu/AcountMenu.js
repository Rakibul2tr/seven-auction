import React from "react";
import icon1 from "../../../images/user.png";
import icon2 from "../../../images/bell.png";
import icon3 from "../../../images/walete.png";
import icon4 from "../../../images/bid.png";
import icon5 from "../../../images/bid.png";
import icon6 from "../../../images/mark.png";
import icon7 from "../../../images/inquery.png";
import "./AcountMenu.css";
import { Link } from "react-router-dom";

const AcountMenu = () => {
  return (
    <>
      <div className="acount_menu_body">
        <div className="acount_menu_link">
          {/* list item one ===================*/}
          <li>
            <Link to='/userDashboard/account'>
              <div className="icon" >
                <img className="img-fluid" src={icon1} alt="user icon" />
              </div>
              <span>account</span>
            </Link>
          </li>
          {/* list item tow =====================*/}
          <li>
            <Link to='/userDashboard/notification'>
            <div className="icon">
              <img className="img-fluid" src={icon2} alt="notification icon" />
            </div>
            <span>notifications <small className="notification_live">5</small></span>
            </Link>
          </li>
          {/* list item three =====================*/}
          <li>
            <Link to='/userDashboard/wallet'>
            <div className="icon">
              <img className="img-fluid" src={icon3} alt="wallet icon" />
            </div>
            <span>wallet</span>
            </Link>
          </li>
          
          {/* list item 4 ===========================*/}
          <li>
            <Link to='/userDashboard/bids'>
            <div className="icon">
              <img className="img-fluid" src={icon4} alt="bid icon" />
            </div>
            <span>my bids</span>
            </Link>
          </li>
          
          {/* list item 5 ===========================*/}
          <li>
            <Link to='/userDashboard/myauction'>
            <div className="icon">
              <img className="img-fluid" src={icon4} alt="auction icon" />
            </div>
            <span>my auctions</span>
            </Link>
          </li>
          
          {/* list item 6 ============================*/}
          <li>
            <Link to='/userDashboard/marked'>
            <div className="icon">
              <img className="img-fluid" src={icon6} alt="mark icon" />
            </div>
            <span>marked</span>
            </Link>
          </li>
         
          {/* list item 7 ===========================*/}
          <li>
            <Link to='/userDashboard/inquires'>
            <div className="icon">
              <img className="img-fluid" src={icon7} alt="inquireas icon" />
            </div>
            <span>inquiries</span>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default AcountMenu;
