import { IoCloseOutline } from "react-icons/io5";
import "./popup.scss";
import { useDispatch } from "react-redux";
import { isOpenModal } from "@/store/modal-slice";
import { use, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function CredirDebitOtp() {
  const dispatch = useDispatch();
  const t = useTranslations("Data");
  const [showSuccess, showSuccessModal] = useState(false);

  useEffect(() => {
    // set interval for 5 seconds
    const interval = setInterval(() => {
      showSuccessModal(false);
      dispatch(isOpenModal({ open: false, name: "CredirDebitOtp" }));
      dispatch(isOpenModal({ open: true, name: "SuccessModal" }));
    }, 5000);

    // clear interval
    return () => clearInterval(interval);
  }, [showSuccess]);

  return (
    <>
      <div className="popup-overlay">
        <div className="popup-otp full-width">
          <button
            className="close-button"
            onClick={() =>
              dispatch(isOpenModal({ open: false, name: "CredirDebitOtp" }))
            }
          >
            <IoCloseOutline />
          </button>

          <div className="otp">
            <div className="header">
              <h2>Wallet Recharge via CC</h2>
              <p className="amount">
                6000 <span>SAR</span>
              </p>
            </div>

            <div className="transaction-details">
              <div>
                <p className="head">Transaction id</p>
                <p className="transaction-id">#435645665</p>
              </div>
              <div>
                <p className="head">Date time</p>
                <p className="date-time">16 June 2024 3:23pm</p>
              </div>
              <div>
                <p className="head">Transaction via</p>
                <p className="transaction-via">CC</p>
              </div>
              <div>
                <p className="head">Card number</p>
                <p className="card-number">4342 - XXXX - XXXX - 2132</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="otp-section">
              <div className="otp-section-grid">
                <div>
                  <p>
                    Enter the <strong>OTP</strong> received on the mobile number
                    registered with this Credit card.
                  </p>
                </div>
                <div className="otp-inputs">
                  <input type="text" maxLength={1} placeholder="*" />
                  <input type="text" maxLength={1} placeholder="*" />
                  <input type="text" maxLength={1} placeholder="*" />
                  <input type="text" maxLength={1} placeholder="*" />
                  <input type="text" maxLength={1} placeholder="*" />
                  <input type="text" maxLength={1} placeholder="*" />
                </div>
              </div>
              <div className="bottom-grid">
                <div>
                  <p className="expiry-time">
                    Transaction expires automatically in <br />
                    <span>8 min 13 sec</span>
                  </p>
                </div>
                <div className="action-button">
                  <button className="resend-button width-manage">
                    RESEND OTP
                  </button>
                  <button
                    className="enquire-button width-manage"
                    onClick={() => showSuccessModal(true)}
                  >
                    VERIFY OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSuccess && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="loder">
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="/Animation.json"
                style={{ width: "300px", height: "300px" }}
              ></lottie-player>
             
            </div>
            <div className="process-recharge">
                Processing your wallet recharge request
              </div>
          </div>
        </div>
      )}
    </>
  );
}
