import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import "./popup.scss";
import { isOpenModal } from "@/store/modal-slice";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
export default function ThankYouModal() {
  const dispatch = useDispatch();
  const t = useTranslations("Data");
  return (
    <div className="popup-overlay">
      <div className="popup width-600">
        <button className="close-button"
         onClick={() => dispatch(isOpenModal({ open: false, name: "ThankYouModal" }))}>
          <IoCloseOutline />
        </button>
        <Image
          unoptimized
          height={0}
          width={0}
          src="/assets/recharge.png"
          alt="Payment Options"
          className="payment-icon"
        />

        <h2 className="mb-3">{t('Thankyouforyourrequest')}</h2>
        <p className="colorgray">
          {t('Yourequestisunderreview')}
        </p>
        <button className="buttonorange mt-4"
          onClick={() => dispatch(isOpenModal({ open: false, name: "ThankYouModal" }))}
        >{t('THANKYOU')}</button>
      </div>
    </div>
  );
}
