import { isOpenModal } from "@/store/modal-slice";
import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import "./popup.scss";
import { useTranslations } from "next-intl";

export default function LeaveYourRequestModal() {
  const dispatch = useDispatch();
  const t = useTranslations('Data');
  return (
    <div className="popup-overlay">
      <div className="popup full-width">
        <button
          className="close-button"
          onClick={() => {
            dispatch(isOpenModal({ open: false, name: "LeaveYourRequestModal" }));
          }}
        >
          <IoCloseOutline />
        </button>

        <Image
          unoptimized
          height={0}
          width={0}
          className="payment-icon"
          src="/assets/leave.png"
          alt="Supply Chain Finance"
        />
        <h2 className="mb-5">{t('Areyoursureyou')}</h2>
       
        <div className="scf-buttons">
        
          <button className="scf-button yes-interested"
           onClick={() => dispatch(isOpenModal({ open: false, name: "LeaveYourRequestModal" }))}
          >{t('YESPLEASEPROCEED')}</button>
        </div>
        <div className="dashedborder"></div>
        <button className="scf-proceed"
        onClick={() => dispatch(isOpenModal({ open: true, name: "DeclarationModal" }))}
        >{t("NONOTREALLY")}</button>
      </div>
    
    </div>
  );
}
