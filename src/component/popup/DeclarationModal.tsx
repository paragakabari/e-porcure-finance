import { IoCloseOutline } from "react-icons/io5";
import "./popup.scss";
import { useDispatch } from "react-redux";
import { isOpenModal } from "@/store/modal-slice";
import { use } from "react";
import { useTranslations } from "next-intl";
export default function DeclarationModal() {
  const dispatch = useDispatch();
  const t = useTranslations('Data');
  
  return (

    <div className="popup-overlay">
      <div className="popup full-width">
        <button className="close-button"
          onClick={() => dispatch(isOpenModal({ open: false, name: "DeclarationModal" }))}>
          <IoCloseOutline />
        </button>

        <h2 className="mb-4">{t('Yourdeclaration')}</h2>
        <p className="textleft mb-3">
         {t("Soyouhereby")}
        </p>
        <p className="textleft mb-3">
         {t('IConfirmthat')}
        </p>
        <p className="textleft mb-3">
          {t('Iacknowledgethat')}
        </p>
        <p className="textleft mb-3">
        {t('Ifurtherunderstand')}
        </p>
        <p className="textleft mb-3">
        {t('Iamaware')}
        </p>
        <p className="textleft mb-3">
         {t('Ihavereadd')}
        </p>
        <div className="button-group">
          <button className="disagree-button"  onClick={() => dispatch(isOpenModal({ open: true, name: "LeaveYourRequestModal" }))}>{t('IDONAGREE')}</button>
          <button className="agree-button" 
          onClick={() => dispatch(isOpenModal({ open: true, name: "ThankYouModal" }))}
          >{t('YESIAGREE')}</button>
        </div>
      </div>
    </div>
  );
}
