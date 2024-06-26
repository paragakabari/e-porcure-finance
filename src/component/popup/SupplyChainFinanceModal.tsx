import { isOpenModal } from "@/store/modal-slice";
import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import "./popup.scss";
import { useTranslations } from "next-intl";

export default function SupplyChainFinanceModal() {
  const [paumentOptions, setPaymentOptions] = useState(false);
  const dispatch = useDispatch();
  const t = useTranslations("Data");
  return (
    <div className="popup-overlay">
      <div className="popup width-600">
        <button
          className="close-button"
          onClick={() => {
            dispatch(isOpenModal({ open: false, name: "SupplyChainFinanceModal" }));
          }}
        >
          <IoCloseOutline />
        </button>

        <Image
          unoptimized
          height={0}
          width={0}
          className="payment-icon"
          src="/assets/track.png"
          alt="Supply Chain Finance"
        />
        <h2 className="mb-2">{t('Areyouinterested')}</h2>
        <p className="colorgray">
         {t('Youcancheck')}
        </p>
        <div className="scf-buttons">
          <button
            className="scf-button maybe-later"
            onClick={() => dispatch(isOpenModal({ open: true, name: "PaymentOption" }))}
          >
            {t('MAYBELATER')}
          </button>
          <button className="scf-button yes-interested"
           onClick={() => dispatch(isOpenModal({ open: true, name: "FinanceModal" }))}
          >{t('YESINTERESTED')}</button>
        </div>
        <div className="dashedborder"></div>
        <button className="scf-proceed">{t('PROCEEDTO')}</button>
      </div>
    
    </div>
  );
}
