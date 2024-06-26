import { isOpenModal } from "@/store/modal-slice";
import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import "./popup.scss";
import { useTranslations } from "next-intl";
import { FaSignInAlt } from "react-icons/fa";

export default function SignInCard() {
  const dispatch = useDispatch();
  const t = useTranslations("Data");

  return (
    <div className="popup-overlay">
      <div className="popup full-width">
        <button
          className="close-button"
          onClick={() =>
            dispatch(isOpenModal({ open: false, name: "SignInCard" }))
          }
        >
          <IoCloseOutline />
        </button>

        

<div className="cardSignin">
      <div className="cardContent">
        <img src="https://via.placeholder.com/150" alt="Logo" className="logo" />
       <div>
       <label className="textleft">National/Iqama ID</label>
        <input 
          type="text" 
          placeholder="Enter your National Id here" 
          className="input-box"
        />
       </div>
        <button 
         onClick={() =>
            dispatch(
              isOpenModal({
                open: true,
                name: "ThankYouModal",
              })
            )
          }
          className="button"
        >
          <FaSignInAlt /> Login
        </button>
        <p className="download-text">To download nafath app</p>
        <div className="app-links">
          <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" />
          <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" />
          <img src="https://via.placeholder.com/120x40?text=App+Gallery" alt="App Gallery" />
        </div>
      </div>
      <div className="second">
        <div>

        <Image unoptimized height={0} width={0} className="payment-icon" src="/assets/lock.png" alt="Supply Chain Finance" />
        </div>
        <div>
            Please introduce your National/Iqama ID, 
            then Click Login
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
