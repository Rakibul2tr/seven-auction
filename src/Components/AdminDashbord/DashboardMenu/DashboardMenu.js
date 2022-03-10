import React from "react";
import logo from "../../../assets/images/icon/site_logo.png"
import icon1 from "../../../assets/images/icon/staus (1).png";
import icon2 from "../../../assets/images/icon/upload.png";
import icon3 from "../../../assets/images/icon/headPhon.png";
import icon4 from "../../../assets/images/icon/bid.png";
import icon6 from "../../../assets/images/icon/withdrow.png";
import './DashboardMenu.css'

const DashboardMenu = (props) => {
  return (
    <>
      <div className="admin_menu_body">
          <div className="admin_logo">
                <img className="img-fluid" src={logo} alt="" />
            </div>
        <div className="admin_menu_link">
          {/* list item one ===================*/}
          <li
            onClick={() => props.setcurrentMenu("stats")}
            className={props.currentMenu === "stats" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon1} alt="user icon" />
            </div>
            <span>stats</span>
          </li>
          {/* list item tow =====================*/}
          <li
            onClick={() => props.setcurrentMenu("upload")}
            className={props.currentMenu === "upload" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon2} alt="notification icon" />
            </div>
            <span>upload</span>
          </li>
          {/* list item three =====================*/}
          <li
            onClick={() => props.setcurrentMenu("tickets")}
            className={props.currentMenu === "tickets" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon3} alt="wallet icon" />
            </div>
            <span>tickets</span>
          </li>
          {/* list item 4 ===========================*/}
          <li
            onClick={() => props.setcurrentMenu("request")}
            className={props.currentMenu === "request" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon4} alt="bid icon" />
            </div>
            <span>auction request</span>
          </li>
          {/* list item 5 ===========================*/}
          <li
            onClick={() => props.setcurrentMenu("auction")}
            className={props.currentMenu === "auction" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon4} alt="auction icon" />
            </div>
            <span>auction</span>
          </li>
          {/* list item 6 ============================*/}
          <li
            onClick={() => props.setcurrentMenu("withdraws")}
            className={props.currentMenu === "withdraws" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon6} alt="mark icon" />
            </div>
            <span>withdraws</span>
          </li>
          
        </div>
      </div>
    </>
  );
};

export default DashboardMenu;
