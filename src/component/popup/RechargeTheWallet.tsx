import { isOpenModal } from "@/store/modal-slice";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import "./popup.scss";

export default function RechargeTheWalletModel() {

  const dispatch = useDispatch();
  const t = useTranslations("Data");
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button
          className="close-button"
          onClick={() => {
            dispatch(isOpenModal({ open: false, name: "RechargeTheWalletModel" }));
          }}
        >
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
        <h2 className="mb-4">{t("RECHARGETHE")}</h2>
        <div className="payment-option"  onClick={() => dispatch(isOpenModal({ open: true, name: "CreditDebitModel" }))}>
         <Image unoptimized height={25} width={30} src="/assets/credit-debit.svg" alt="Credit/Debit Card" />
          <span>{t('CreditDebit')}</span>
        </div>
        <div className="payment-option">
         <Image unoptimized height={25} width={30} src="/assets/bank-transfer.svg" alt="Bank Transfer" />
          <span>{t('BankTransfer')}</span>
        </div>
        <div className="payment-option " onClick={() => {
          dispatch(isOpenModal({open:true, name:"SupplyChainFinanceModal"}))
        }}>
         <Image unoptimized height={25} width={30} src="/assets/request-finance.svg" alt="Supply Chain Finance" />

          <span>{t('RequestForFinance')}</span>
        </div>
      </div>
     
    </div>
  );
}
