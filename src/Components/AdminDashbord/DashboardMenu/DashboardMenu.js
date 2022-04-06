import React from "react";
import logo from "../../../assets/images/icon/site_logo.png"
import icon1 from "../../../assets/images/icon/staus (1).png";
import icon2 from "../../../assets/images/icon/upload.png";
import icon3 from "../../../assets/images/icon/headPhon.png";
import icon4 from "../../../assets/images/icon/bid.png";
import icon6 from "../../../assets/images/icon/withdrow.png";
import './DashboardMenu.css'
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <>
      <div className="admin_menu_body">
          <div className="admin_logo">
                <img className="img-fluid" src={logo} alt="" />
            </div>
        <div className="admin_menu_link">
          {/* list item one ===================*/}
          <li>
            <Link to='/dashboard/status'>
            <div className="icon">
              <img className="img-fluid" src={icon1} alt="user icon" />
            </div>
            <span>stats</span>
            </Link>
          </li>
          {/* list item tow =====================*/}
          <li>
            <Link to='/dashboard/upload'>
            <div className="icon">
              <img className="img-fluid" src={icon2} alt="notification icon" />
            </div>
            <span>upload</span>
            </Link>
          </li>
          {/* list item three =====================*/}
          <li>
            <Link to='/dashboard/tickets'>
            <div className="icon">
              <img className="img-fluid" src={icon3} alt="wallet icon" />
            </div>
            <span>tickets</span>
            </Link>
          </li>
          {/* list item 4 ===========================*/}

          <li>
            <Link to='/dashboard/auctionrequest'>
            <div className="icon">
              <img className="img-fluid" src={icon4} alt="bid icon" />
            </div>
            <span>auction request</span>
            </Link>
          </li>
          {/* list item 5 ===========================*/}
          <li>
            <Link to='/dashboard/auction'>
            <div className="icon">
              <img className="img-fluid" src={icon4} alt="auction icon" />
            </div>
            <span>auction</span>
            </Link>
          </li>
          {/* list item 6 ============================*/}
          <li>
            <Link to='/dashboard/withdrow'>
            <div className="icon">
              <img className="img-fluid" src={icon6} alt="mark icon" />
            </div>
            <span>withdraws</span>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default DashboardMenu;
