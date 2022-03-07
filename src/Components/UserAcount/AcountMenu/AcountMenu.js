import React from "react";
import icon1 from "../../../images/user.png";
import icon2 from "../../../images/bell.png";
import icon3 from "../../../images/walete.png";
import icon4 from "../../../images/bid.png";
import icon5 from "../../../images/bid.png";
import icon6 from "../../../images/mark.png";
import icon7 from "../../../images/inquery.png";
import "./AcountMenu.css";

const AcountMenu = (props) => {
  return (
    <>
      <div className="acount_menu_body">
        <div className="acount_menu_link">
          {/* list item one ===================*/}
          <li
            onClick={() => props.setcurrentMenu("acount")}
            className={props.currentMenu === "acount" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon1} alt="user icon" />
            </div>
            <span>account</span>
          </li>
          {/* list item tow =====================*/}
          <li
            onClick={() => props.setcurrentMenu("notification")}
            className={props.currentMenu === "notification" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon2} alt="notification icon" />
            </div>
            <span>notification</span>
          </li>
          {/* list item three =====================*/}
          <li
            onClick={() => props.setcurrentMenu("wallet")}
            className={props.currentMenu === "wallet" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon3} alt="wallet icon" />
            </div>
            <span>wallet</span>
          </li>
          {/* list item 4 ===========================*/}
          <li
            onClick={() => props.setcurrentMenu("bid")}
            className={props.currentMenu === "bid" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon4} alt="bid icon" />
            </div>
            <span>my bid</span>
          </li>
          {/* list item 5 ===========================*/}
          <li
            onClick={() => props.setcurrentMenu("auction")}
            className={props.currentMenu === "auction" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon4} alt="auction icon" />
            </div>
            <span>my auction</span>
          </li>
          {/* list item 6 ============================*/}
          <li
            onClick={() => props.setcurrentMenu("mark")}
            className={props.currentMenu === "mark" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon6} alt="mark icon" />
            </div>
            <span>marked</span>
          </li>
          {/* list item 7 ===========================*/}
          <li
            onClick={() => props.setcurrentMenu("inquireas")}
            className={props.currentMenu === "inquireas" ? "liActive" : null}
          >
            <div className="icon">
              <img className="img-fluid" src={icon7} alt="inquireas icon" />
            </div>
            <span>inquireas</span>
          </li>
        </div>
      </div>
    </>
  );
};

export default AcountMenu;
