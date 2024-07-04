import { isOpenModal } from "@/store/modal-slice";
import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import "./popup.scss";
import { useTranslations } from "next-intl";

export default function Restricted() {
    const dispatch = useDispatch();
  const t = useTranslations('Data');

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={() => dispatch(isOpenModal({ open: false, name: "Restricted" }))}>
          <IoCloseOutline />
        </button>
<div className="res-heading">Restricted Permission</div>
        <Image
          unoptimized
          height={0}
          width={0}
          className="payment-icon py-3"
          src="/assets/restricted.png"
          alt="Supply Chain Finance"
        />
        <h2 className="mb-4 res-sub" >You are not authorised to recharge the wallet via</h2>
        <h2 className="mb-4 res-des">Request for Finance</h2>
       
        <div className="scf-buttons">
          
          <button className="scf-button yes-interested w-50"
           onClick={() => dispatch(isOpenModal({ open: true, name: "RechargeTheWalletModel" }))}
          >Ok</button>
        </div>
        
      </div>
    
    </div>
  );
}
