import { isOpenModal } from "@/store/modal-slice";
import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import "./popup.scss";
import { useTranslations } from "next-intl";

export default function RechargeWallet() {
  const dispatch = useDispatch();
  const t = useTranslations("Data");

  return (
    <div className="popup-overlay">
      <div className="popup width-600">
        <button
          className="close-button"
          onClick={() =>
            dispatch(isOpenModal({ open: false, name: "RechargeWallet" }))
          }
        >
          <IoCloseOutline />
        </button>

        <Image
          unoptimized
          height={0}
          width={0}
          className="payment-icon"
          src="/assets/alert.png"
          alt="Supply Chain Finance"
        />

        <div className="payment-card">
          <div className="payment-card__header">
            <h2>{t('Paymentmighthaveanissue')}</h2>
            <p>{t('Theamountinthewallet')}</p>
          </div>
          <div className="payment-card__balance d-flex justify-content-between align-content-between">
            <div className="d-flex gap-2 align-content-center align-items-center">
              <div className="payment-card__balance-icon">
                <Image
                  src="/assets/wallet.svg"
                  unoptimized
                  alt="Wallet"
                  width={27}
                  height={27}
                />
              </div>
              <div>
                <p className="font-12">
                  {t('Yourwalletbalance')}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-14"> 1000</h3>
            </div>
          </div>
        </div>

        <div className="scf-buttons">
          <button
            className="scf-button yes-interested"
            onClick={() =>
              dispatch(isOpenModal({ open: true, name: "WalletRecharge" }))
            }
          >
           {t('RECHARGEWALLET')}
          </button>
        </div>
        <div className="dashedborder"></div>
        <button
          className="scf-proceed text-black"
          onClick={() =>
            dispatch(isOpenModal({ open: false, name: "RechargeWallet" }))
          }
        >
        
          {t('OtherPaymentOptions')}
        </button>
      </div>
    </div>
  );
}
