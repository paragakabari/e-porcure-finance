import { IoCloseOutline } from "react-icons/io5";
import "./popup.scss";
import { useDispatch } from "react-redux";
import { isOpenModal } from "@/store/modal-slice";
import { use } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function CreditDebitModel() {
  const dispatch = useDispatch();
  const t = useTranslations("Data");

  return (
    <div className="popup-overlay">
      <div className="popups full-width">
        <button
          className="close-button"
          onClick={() =>
            dispatch(isOpenModal({ open: false, name: "CreditDebitModel" }))
          }
        >
          <IoCloseOutline />
        </button>

        <div className="grids">
          <div className="left-panel">
            <Image
              unoptimized
              height={0}
              width={0}
              src="/assets/wallets.png"
              alt="Wallet"
              className="wallet-icon"
            />
            <h2 className="heading">Recharge Amount</h2>
            <p className="amount">
              6000 <span>SAR</span>
            </p>
            <div className="pb-4">
              <p className="transaction-id-heading">Transaction id</p>
              <p className="transaction-id">#435645665</p>
            </div>
            <div>
              <p className="expiry-time-heading">Transaction expires in</p>
              <p className="expiry-time">8 min 13 sec</p>
            </div>
          </div>
          <div className="right-panel">
            <h2>Card Details</h2>
            <div className="input-group">
              <div>
                <div className="card-type-main">
                  Credit Card / Debit Card Number
                </div>
                <div className="card-type-small">
                  Please provide the number of your card
                </div>
              </div>
              <input type="text" placeholder="XXXX - XXXX - XXXX - XXXX" />
            </div>
            <div className="d-flex gap-3 mt-4">
              <div className="input-group">
                <div>
                  <div className="card-type-main">Expiry Date</div>
                  <div className="card-type-small">
                    Please enter the valid through date
                  </div>
                </div>

                <input type="text" placeholder="MM / YY" />
              </div>
              <div className="input-group">
                <div>
                  <div className="card-type-main">CVV</div>
                  <div className="card-type-small">
                    Please provide the CVV no
                  </div>
                </div>

                <input type="text" placeholder="XXX" />
              </div>
              <div className="align-logo">
                <Image unoptimized height={50} width={120} src="/assets/cvv.png" alt="Visa" />
                </div>
            </div>
            <button className="enquire-button width-manage"
              onClick={() =>
                dispatch(isOpenModal({ open: true, name: "CredirDebitOtp" }))
              }
            >PROCEED</button>
          </div>
        </div>
      </div>
    </div>
  );
}
