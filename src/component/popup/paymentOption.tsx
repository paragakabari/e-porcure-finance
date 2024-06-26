import Image from 'next/image';
import { useState } from 'react';
import { CiBank, CiWallet } from 'react-icons/ci';
import { FaCreditCard } from 'react-icons/fa6';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import './popup.scss';
import { isOpenModal } from '@/store/modal-slice';
import { useTranslations } from 'next-intl';
export default function PaymentOption() {
const [suppluModel, setSupplyModel] = useState(false);
const dispatch = useDispatch();
const t = useTranslations('Data');
    return (
        <div className="popup-overlay">
        <div className="popup">
          <button className="close-button"
         onClick={() => dispatch(isOpenModal({ open: false, name: "PaymentOption" }))}>
                      <IoCloseOutline />
          </button>
          <Image unoptimized height={0} width={0} src="/assets/recharge.png" alt="Payment Options" className="payment-icon" />
          <h2 className='mb-4'>{t('Youcanproceed')}</h2>
          <div className="payment-option">
         <Image unoptimized height={25} width={30} src="/assets/credit-debit.svg" alt="Credit/Debit Card" />

            <span>{t('CreditDebit')}</span>
          </div>
          <div className="payment-option">
         <Image unoptimized height={25} width={30} src="/assets/bank-transfer.svg" alt="Bank Transfer" />

            <span>{t('BankTransfer')}</span>
          </div>
          <div className="payment-option"  onClick={() => 
            dispatch(isOpenModal({open:true, name:"RechargeWallet"}))
          }>
         <Image unoptimized height={25} width={30} src="/assets/wallet.svg" alt="Supply Chain Finance" />


            <span>{t('PayFromWallet')}</span>
           <div>
           <div className="amount">3453452.02 </div>
           <div>SAR</div>
           </div>
          </div>
          <div className="payment-option " onClick={() => 
            dispatch(isOpenModal({open:true, name:"SupplyChainFinanceModal"}))
          }>
         <Image unoptimized height={25} width={30} src="/assets/request-finance.svg" alt="Supply Chain Finance" />


            <span>{t('RequestForFinance')}</span>
          </div>
          <div className="payment-option">
         <Image unoptimized height={25} width={30} src="/assets/offline1.png" alt="Supply Chain Finance" />

            <span>{t('PayOffline')}</span>
          </div>
        </div>
      
      </div>
    )

}