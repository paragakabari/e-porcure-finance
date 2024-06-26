import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import "./popup.scss";
import { isOpenModal } from "@/store/modal-slice";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
import { useState } from "react";
export default function WalletRecharge() {
  const [rechargeAmount, setRechargeAmount] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setRechargeAmount(value);
    setIsActive(value >= 100);
  };

  const handlePresetClick = (amount) => {
    setRechargeAmount(amount);
    setIsActive(amount >= 100);
  };

  const handleRecharge = () => {
    if (isActive) {
      alert(`Recharge ${rechargeAmount} SAR`);
    }
  };
  const dispatch = useDispatch();
  const t = useTranslations("Data");
  return (
    <div className="popup-overlay">
      <div className="popup width-600">
        <button
          className="close-button"
          onClick={() =>
            dispatch(isOpenModal({ open: false, name: "WalletRecharge" }))
          }
        >
          <IoCloseOutline />
        </button>
        <div className="wallet-recharge">
          <div className="title">{t('WalletRecharge')}</div>
          <div className="wallet-balance">
            <div className="">
              <Image
                unoptimized
                height={25}
                width={25}
                src="/assets/wallets.svg"
                alt="Wallet"
              />
            </div>
            <div className="balance-label">{t('CURRENTWALLETBALANCE')}</div>
            <div className="balance-amount">52.02 SAR</div>
          </div>
          <div className="recharge-amount">
            <div className="amount-label">{t('EnterRechargeAmount')}</div>
            <div className="amount-label-small">SAR</div>
            <div className="amount-input">
              <input
                type="text"
                value={rechargeAmount}
                onChange={handleAmountChange}
                placeholder="0"
              />
            </div>
          </div>
          <div className="preset-buttons">
            <button onClick={() => handlePresetClick(1000)}>1000</button>
            <button onClick={() => handlePresetClick(5000)}>5000</button>
            <button onClick={() => handlePresetClick(10000)}>10000</button>
          </div>
          <div className="py-3">
            <div className="position-absolute w-100 borderfull"> </div>
          </div>
          <div className="recharge-note">{t('NoteMinimumrecharge')}</div>
          <button
            className={`buttonorange mt-4 recharge-button ${
              isActive ? "active" : ""
            }`}
            onClick={() =>
              dispatch(isOpenModal({ open: false, name: "WalletRecharge" }))
            }
          >
            {t('RECHARGEVIA')}
          </button>
        </div>
      </div>
    </div>
  );
}
