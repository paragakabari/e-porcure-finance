import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import "./popup.scss";
import { isOpenModal } from "@/store/modal-slice";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
export default function SuccessModal() {
  const dispatch = useDispatch();
  const t = useTranslations("Data");
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button
          className="close-button"
          onClick={() =>
            dispatch(isOpenModal({ open: false, name: "SuccessModal" }))
          }
        >
          <IoCloseOutline />
        </button>
        <Image
          unoptimized
          height={0}
          width={0}
          src="/assets/offline.png"
          alt="Payment Options"
          className="payment-icon"
        />

        <div className="title-success">{t("SuccessfulPayment")}</div>
        <div className="message-success">
          {t("YourWalletissuccessfullyrecharged")}
        </div>
        <div className="transaction-details">
          <div className="details">
            <div className="tranx-id">{t("Tranxid")} #EAR 1212</div>
            <div className="tranx-time">12:00 PM, 12th August 2021</div>
          </div>
          <div className="amount">123,23 SAR</div>
        </div>
        <button
          className="buttonorange mt-4"
          onClick={() =>
            dispatch(isOpenModal({ open: false, name: "SuccessModal" }))
          }
        >
          {t("THANKYOU")}
        </button>
      </div>
    </div>
  );
}
