import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosInformation } from "react-icons/io";
import Breadcrumbs from "../breadcrumb/BreadCrumb";
import "./wallet.scss";

import { isOpenModal } from "@/store/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import KybUploadModal from "../popup/KybUploadModal";
import DeclarationModal from "../popup/DeclarationModal";
import ThankYouModal from "../popup/ThankYouModal";
import KybModal from "../popup/KybModal";
import NeedKyc from "../popup/NeedKyc";
import PaymentOption from "../popup/paymentOption";
import FinanceModal from "../popup/FinancersModal";
import SupplyChainFinanceModal from "../popup/SupplyChainFinanceModal";
import LeaveYourRequestModal from "../popup/LeaveYourRequestModal";
import RechargeTheWalletModel from "../popup/RechargeTheWallet";
import { RootState } from "@/store/store";
import Sidebar from "../sidebar/sidebar";
import { useTranslations } from "next-intl";
import RechargeWallet from "../popup/RechargeWallet";
import WalletRecharge from "../popup/WalletRecharge";
import CredirDebitModel from "../popup/CredirDebitModel";
import CredirDebitOtp from "../popup/CredirDebitOtp";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
export default function WalletComponent({ locale }: { locale: string }) {
  const modalData = useSelector((state: RootState) => state.modalState);
  const dispatch = useDispatch();
  const [tab, setTab] = useState("recharge");
  const t = useTranslations("Data");
  const breadcrumb = [
    {
      text: "Dashboard",
      link: "/",
    },
    {
      text: "WalletManagement",
      link: "",
    },
  ];



 

  const transactionsData = [
    {
      id: 1,
      date: "23 Jan 2024",
      status: "PENDING",
      amount: "SAR 15000",
      rfpId: "2634523",
      img:'/assets/ai.png',
      name:"AI Develop"
    },
    {
      id: 2,
      date: "24 Jan 2024",
      status: "REJECTED",
      amount: "SAR 45000",
      rfpId: "2634523",
      img:'/assets/bsf.png',
      name:"BSF LTD"

    },
    {
      id: 3,
      date: "25 Jan 2024",
      status: "APPROVED",
      amount: "SAR 5092",
      rfpId: "2634523",
      img:'/assets/hsbc-icon-md.png',
      name:'HSBC',
    },
    {
      id: 4,
      date: "23 Jan 2024",
      status: "APPROVED",
      amount: "SAR 16000",
      rfpId: "2634523",
      name:"Alima",
      img:'/assets/alima.png'
    },
    {
      id: 5,
      date: "23 Jan 2024",
      status: "APPROVED",
      amount: "SAR 45000",
      rfpId: "2634523",
      name:'SIB',
      img:'/assets/sib.png'
    },
    {
      id: 6,
      date: "23 Jan 2024",
      status: "APPROVED",
      amount: "SAR 45000",
      rfpId: "2634523",
      name:'SNB',
      img:'/assets/snb.png'
    },
  ];

  const transactions = [
    {
      id: 1,
      date: "23 Jan 2024",
      status: "PENDING",
      amount: "SAR 15000",
      rfpId: "2634523",
      img:'/assets/ai.png',
      name:"AI Develop"
    },
    {
      id: 2,
      date: "24 Jan 2024",
      status: "REJECTED",
      amount: "SAR 45000",
      rfpId: "2634523",
      img:'/assets/bsf.png',
      name:"BSF LTD"

    },
    {
      id: 3,
      date: "25 Jan 2024",
      status: "APPROVED",
      amount: "SAR 5092",
      rfpId: "2634523",
      img:'/assets/hsbc-icon-md.png',
      name:'HSBC',
    },
    {
      id: 4,
      date: "23 Jan 2024",
      status: "APPROVED",
      amount: "SAR 16000",
      rfpId: "2634523",
      name:"Alima",
      img:'/assets/alima.png'
    },
    {
      id: 5,
      date: "23 Jan 2024",
      status: "APPROVED",
      amount: "SAR 45000",
      rfpId: "2634523",
      name:'SIB',
      img:'/assets/sib.png'
    },
    {
      id: 6,
      date: "23 Jan 2024",
      status: "APPROVED",
      amount: "SAR 45000",
      rfpId: "2634523",
      name:'SNB',
      img:'/assets/snb.png'
    },
  ];

  const balance = 76546;
  const currency = "SAR";

  const redirect = useRouter();
  const searchParams = usePathname();

  return (
    <div className="dashboardSection">
      <div className="dashboardAlignment">
        <div className="container">
          <div className="dashboardGrid">
            <div className="leftSideALignment ">
              <Sidebar locale={locale} />
            </div>

            <div className="rightSideAlignment">
              <div className="rightTopDetails d-flex align-items-end justify-content-between ">
                <div>
                  <Breadcrumbs breadcrumbArray={breadcrumb} />
                  <h1>{t("WalletManagement")}</h1>
                </div>
                <div className="w-50 d-flex  justify-content-end">
                  <div
                    className="rechargethewallet"
                    onClick={() => {
                      dispatch(
                        isOpenModal({
                          open: true,
                          name: "RechargeTheWalletModel",
                        })
                      );
                    }}
                  >
                    {t("RECHARGETHE")}
                  </div>
                </div>
              </div>
              <div className="rightBottomDetails">
                <div className="rightBottomGrid">
                  <div className="rightBottomLetf">
                    <div className="rightBoxAlignment">
                      <div className="wallet-balance">
                        <div>
                          <Image
                            unoptimized
                            height={0}
                            width={0}
                            src="/assets/wallets.png"
                            alt="Wallet"
                            className="wallet-icon"
                          />
                        </div>
                        <div className="balance-info">
                          <div className="balance">
                            {balance}{" "}
                            <span className="currency">{currency}</span>
                          </div>
                          <div className="description">{t("MyWallet")}</div>
                          <div className="sub-description">
                            {t("Financemodule")}
                          </div>
                        </div>
                      </div>
                      <div className="transaction-list">
                        <div className="transaction-header">
                          <div onClick={() => setTab("recharge")}>
                            {" "}
                            <h2 className={tab === "recharge" ? "actives" : ""}>
                              {t("RechargesRequests")}
                            </h2>
                          </div>
                          <div onClick={() => setTab("transactions")}>
                            {" "}
                            <h2
                              className={
                                tab === "transactions" ? "actives" : ""
                              }
                            >
                              {t("TransactionsViaWallet")}
                            </h2>
                          </div>
                        </div>
                        <div className="desktop-table">

                       
                        {tab === "recharge" ? (
                          <>
                            <ul>
                              {transactions.map((transaction) => (
                                <>
                                  {transaction?.status === "PENDING" ? (
                                    <li
                                    
                                      className="transaction-item"
                                      onClick={() =>
                                        dispatch(
                                          isOpenModal({
                                            open: true,
                                            name: "NeedKyc",
                                          })
                                        )
                                      }
                                    >
                                      <div className="transaction-info">
                                        <div>
                                          <div className="request-id">
                                            Request ID
                                          </div>
                                          <div className="date">
                                            {transaction.date}
                                          </div>
                                        </div>
                                        <div className="finance-info">
                                          <Image
                                            unoptimized
                                            height={0}
                                            width={0}
                                            src={transaction.img}
                                            alt="HSBC Logo"
                                            className="logo"
                                          />
                                          <div>
                                            <div className="finance-title">
                                            {transaction.name}
                                            </div>
                                            <div className="rfp-id">
                                              RFP-ID : {transaction.rfpId}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className={`status ${transaction.status.toLowerCase()}`}
                                      >
                                        {transaction.status}
                                      </div>
                                      <div className="amount">
                                        {transaction.amount}
                                      </div>
                                    </li>
                                  ) : (
                                    <>
                                      <li
                                        className="transaction-item"
                                      >
                                        <div className="transaction-info">
                                          <div>
                                            <div className="request-id">
                                              Request ID
                                            </div>
                                            <div className="date">
                                              {transaction.date}
                                            </div>
                                          </div>
                                          <div className="finance-info">
                                            <Image
                                              unoptimized
                                              height={0}
                                              width={0}
                                              src={transaction.img}
                                              alt="HSBC Logo"
                                              className="logo"
                                            />
                                            <div>
                                              <div className="finance-title">
                                              {transaction.name}
                                              </div>
                                              <div className="rfp-id">
                                                RFP-ID : {transaction.rfpId}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className={`status ${transaction.status.toLowerCase()}`}
                                        >
                                          {transaction.status}
                                        </div>
                                        <div className="amount">
                                          {transaction.amount}
                                        </div>
                                      </li>
                                    </>
                                  )}
                                </>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            <ul>
                              {transactionsData.map((transaction) => (
                                <>
                                  {transaction?.status === "PENDING" ? (
                                    <li
                                     
                                      className="transaction-item"
                                      onClick={() =>
                                        dispatch(
                                          isOpenModal({
                                            open: true,
                                            name: "NeedKyc",
                                          })
                                        )
                                      }
                                    >
                                      <div className="transaction-info">
                                        <div>
                                          <div className="request-id">
                                            Request ID
                                          </div>
                                          <div className="date">
                                            {transaction.date}
                                          </div>
                                        </div>
                                        <div className="finance-info">
                                          <Image
                                            unoptimized
                                            height={0}
                                            width={0}
                                            src={transaction.img}
                                            alt="HSBC Logo"
                                            className="logo"
                                          />
                                          <div>
                                            <div className="finance-title">
                                              {transaction.name}
                                            </div>
                                            <div className="rfp-id">
                                              RFP-ID : {transaction.rfpId}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className={`status ${transaction.status.toLowerCase()}`}
                                      >
                                        {transaction.status}
                                      </div>
                                      <div className="amount">
                                        {transaction.amount}
                                      </div>
                                    </li>
                                  ) : (
                                    <>
                                      <li
                                     
                                        className="transaction-item"
                                      >
                                        <div className="transaction-info">
                                          <div>
                                            <div className="request-id">
                                              Request ID
                                            </div>
                                            <div className="date">
                                              {transaction.date}
                                            </div>
                                          </div>
                                          <div className="finance-info">
                                            <Image
                                              unoptimized
                                              height={0}
                                              width={0}
                                              src={transaction.img}
                                              alt="HSBC Logo"
                                              className="logo"
                                            />
                                            <div>
                                              <div className="finance-title">
                                                {transaction.name}
                                              </div>
                                              <div className="rfp-id">
                                                RFP-ID : {transaction.rfpId}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className={`status ${transaction.status.toLowerCase()}`}
                                        >
                                          {transaction.status}
                                        </div>
                                        <div className="amount">
                                          {transaction.amount}
                                        </div>
                                      </li>
                                    </>
                                  )}
                                </>
                              ))}
                            </ul>
                          </>
                        )}
                         </div>
                         <div className="mobile-table">
{
  tab === "recharge" ? (
   <>
   {
    transactions.map((transaction) => (
      <>
      <div className="card">
      <div className="card-header">
          <div className="request-id">
              <span className="title">Request ID</span>
              <span className="date">{transaction.date}</span>
          </div>
          <div className="amount">{transaction.amount}</div>
      </div>
      <div className="card-body">
          <div className="company-info">
              <Image height={0} width={0} unoptimized  src={transaction.img} alt="HSBC Logo" className="company-logo"/>
              <div className="company-details">
                  <span className="company-name">HSBC Finance</span>
                  <span className="rfp-id">RFP-ID : {transaction.rfpId}</span>
              </div>
          </div>
          <div   className={`status ${transaction.status.toLowerCase()}`}>{transaction.status}</div>
      </div>
  </div>
      </>
    ))
   }
   </>
  ) : (
    <>
    {
      transactionsData.map((transaction) => (
        <>
        <div className="card">
        <div className="card-header">
            <div className="request-id">
                <span className="title">Request ID</span>
                <span className="date">{transaction.date}</span>
            </div>
            <div className="amount">{transaction.amount}</div>
        </div>
        <div className="card-body">
            <div className="company-info">
                <Image height={0} width={0} unoptimized  src={transaction.img} alt="HSBC Logo" className="company-logo"/>
                <div className="company-details">
                    <span className="company-name">HSBC Finance</span>
                    <span className="rfp-id">RFP-ID : {transaction.rfpId}</span>
                </div>
            </div>
            <div   className={`status ${transaction.status.toLowerCase()}`}>{transaction.status}</div>
        </div>
    </div>
        </>
      ))
    }
    </>
  )

}

                   
                         </div>

                        <div className="bordertop"></div>
                        <div className="summary">
                          <div className="summary-content">
                            <div className="d-flex">
                              <div>
                                <p>
                                  {t("Youhaveransactions")} <br />{" "}
                                  {t("thatcanbe")}
                                </p>
                              </div>
                            </div>
                            <div className="d-block">
                              <div className="view-all">
                                <FaArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rightBottomRight">
                    <div className="heading">{t("RechargeviaCoupons")}</div>
                    <div className="coupon ">
                      <div className="coupon-detail firstCaard">
                        <div>
                          <Image
                            unoptimized
                            height={0}
                            width={0}
                            src="/assets/hsbc-icon-md.png"
                            alt="LOgo"
                          />
                        </div>
                        <div className="sub-heading">{t("GetBalanceupto")}</div>
                        <div className="subText">{t("Applicable")}</div>
                      </div>
                      <div className="coupon-detail secondCard">
                        <div>
                          <Image
                            unoptimized
                            height={0}
                            width={0}
                            src="/assets/cou2.png"
                            alt="LOgo1"
                          />
                        </div>
                        <div className="sub-heading">{t("Get")}</div>
                        <div className="subText">{t("Applicable")}</div>
                      </div>
                      <div className="coupon-detail thirdCard">
                        <div>
                          <Image
                            unoptimized
                            height={0}
                            width={0}
                            src="/assets/cou3.png"
                            alt="LOgo2"
                          />
                        </div>
                        <div className="sub-heading">{t("GetBalanceupto")}</div>
                        <div className="subText">{t("Applicable")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalData.isOpen && modalData.modalName === "RechargeTheWalletModel" && (
        <>
          <RechargeTheWalletModel />
        </>
      )}
      {modalData.isOpen &&
        modalData.modalName === "SupplyChainFinanceModal" && (
          <>
            <SupplyChainFinanceModal />
          </>
        )}
      {modalData.isOpen && modalData.modalName === "FinanceModal" && (
        <>
          <FinanceModal />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "PaymentOption" && (
        <>
          <PaymentOption />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "NeedKyc" && (
        <>
          <NeedKyc />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "KybModal" && (
        <>
          <KybModal />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "KybUploadModal" && (
        <>
          <KybUploadModal />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "DeclarationModal" && (
        <>
          <DeclarationModal />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "ThankYouModal" && (
        <>
          <ThankYouModal />
        </>
      )}

      {modalData.isOpen && modalData.modalName === "LeaveYourRequestModal" && (
        <>
          <LeaveYourRequestModal />
        </>
      )}
       {modalData.isOpen && modalData.modalName === "RechargeWallet" && (
        <>
          <RechargeWallet />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "WalletRecharge" && (
        <>
          <WalletRecharge />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "CredirDebitModel" && (
        <>
          <CredirDebitModel />
        </>
      )}
      {modalData.isOpen && modalData.modalName === "CredirDebitOtp" && (
        <>
          <CredirDebitOtp />
        </>
      )}
    </div>
  );
}
