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
import { useState } from "react";
import { Bubble, Line } from "react-chartjs-2";
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../breadcrumb/BreadCrumb";
import NeedKyc from "../popup/NeedKyc";
import RechargeTheWalletModel from "../popup/RechargeTheWallet";
import "./dashboard.scss";

import { isOpenModal } from "@/store/modal-slice";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";
import DeclarationModal from "../popup/DeclarationModal";
import FinanceModal from "../popup/FinancersModal";
import KybModal from "../popup/KybModal";
import KybUploadModal from "../popup/KybUploadModal";
import LeaveYourRequestModal from "../popup/LeaveYourRequestModal";
import SupplyChainFinanceModal from "../popup/SupplyChainFinanceModal";
import ThankYouModal from "../popup/ThankYouModal";
import PaymentOption from "../popup/paymentOption";
import Sidebar from "../sidebar/sidebar";
import RechargeWallet from "../popup/RechargeWallet";
import WalletRecharge from "../popup/WalletRecharge";
import SuccessModal from "../popup/SuccessModal";
import SignInCard from "../popup/SignInCard";
import CredirDebitModel from "../popup/CredirDebitModel";
import CreditDebitModel from "../popup/CredirDebitModel";
import CredirDebitOtp from "../popup/CredirDebitOtp";
import Restricted from "../popup/Restricted";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,

  PointElement,
  Tooltip,
  Legend
);
export default function Dashboard({ locale }: { locale: string }) {
  const modalData = useSelector((state: RootState) => state.modalState);

  const dispatch = useDispatch();
  const t = useTranslations("Data");
  const [rechargeWallet, setRechargeWallet] = useState(false);
  const [kycPopup, setKycPopup] = useState(false);
  const data = {
    datasets: [
      {
        label: "Bubble Chart",
        data: [
          { x: 1, y: 1, r: 30, label: "30%" },
          { x: 2, y: 2, r: 55, label: "55%" },
          { x: 3, y: 3, r: 15, label: "15%" },
        ],
        backgroundColor: ["#FDA953", "#7EC483", "#FF6767"],
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return context.raw.label;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  const breadcrumb = [
    {
      text: "Dashboard",
      link: "/",
    },
    {
      text: "EprocureFinance",
      link: "",
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

  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "This year",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "#fa7268",
        tension: 0.5,
      },
      {
        label: "Prev year",
        data: [28, 48, 40, 19, 86, 27],
        fill: false,
        borderColor: "#e0e0e0",
        tension: 0.4,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const transactionsData = [
    {
      id: "1",
      date: "23 Jan 2024",
      type: "UPI transaction",
      amount: "SAR 23476",
      coupon: "",
    },
    {
      id: "2",
      date: "23 Jan 2024",
      type: "UPI transaction",
      amount: "SAR 23476",
      coupon: "2348 6234 7632",
    },
    {
      id: "3",
      date: "23 Jan 2024",
      type: "UPI transaction",
      amount: "SAR 23476",
      coupon: "",
    },
    {
      id: "4",
      date: "23 Jan 2024",
      type: "UPI transaction",
      amount: "SAR 23476",
      coupon: "",
    },
    {
      id: "5",
      date: "23 Jan 2024",
      type: "UPI transaction",
      amount: "SAR 23476",
      coupon: "",
    },
  ];

  const redirect = useRouter();
  const searchParams = usePathname();
  const [hide, setShow] = useState(false);

  return (
    <div className="dashboardSection">
      <div className="dashboardAlignment">
        <div className="container">
          <div className="dashboardGrid">
            <div className="leftSideALignment ">
              <Sidebar locale={locale} />
            </div>

            <div className="rightSideAlignment">
              <div className="rightTopDetails">
                <Breadcrumbs breadcrumbArray={breadcrumb} />
                <h1>{t("FinanceDashboard")}</h1>
              </div>
              <div className="rightBottomDetails">
                <div className="rightBottomGrid">
                  <div className="rightBottomLetf">
                    <div
                      className="rightBoxAlignment"
                      onClick={() => setShow(!hide)}
                    >
                      {!hide ? (
                        <>
                          <div className="custom-section">
                            <div className="section-content">
                              <div className="header">
                                <span className="header-text">{t("You")}</span>
                              </div>
                              <h1>{t("Youhave")}</h1>
                              <p>{t("Forfinance")}</p>
                              <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="logos">
                                  <Image
                                    unoptimized
                                    height={0}
                                    width={0}
                                    src="/assets/snb.png"
                                    alt="HSBC Logo"
                                    className="logo"
                                  />
                                  <Image
                                    unoptimized
                                    height={0}
                                    width={0}
                                    src="/assets/sib.png"
                                    alt="Other Logo"
                                    className="logo"
                                  />
                                  <Image
                                    unoptimized
                                    height={0}
                                    width={0}
                                    src="/assets/sabb.png"
                                    alt="SNB Logo"
                                    className="logo"
                                  />
                                </div>
                                <a className="view-all">{t("ViewAll")}</a>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="custom-section ">
                            <div className="section-content ">
                              <div className="test">
                                <h1>{t("Youhave")}</h1>
                                <p>{t("Forfinance")}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className={hide ? "hide" : "secondBox"}>
                      <div className="p-4">
                        <div className="title">{t("RequestSummary")}</div>
                        <div className="subTitle">{t("Tilldate")}</div>
                        <Bubble data={data} options={options} />
                        <div className="border-chart mt-3"></div>
                        <div className="d-flex item-center justify-content-between mt-2">
                          <div className="oneDot d-flex item-center align-items-center gap-2">
                            <div className="dotone"></div>
                            <p>{t("Approved")}</p>
                          </div>
                          <div className="oneDot d-flex item-center align-items-center gap-2">
                            <div className="dottwo"></div>
                            <p>{t("InProcess")}</p>
                          </div>
                          <div className="oneDot d-flex item-center align-items-center gap-2">
                            <div className="dotthree"></div>
                            <p>{t("Rejected")}</p>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className={hide ? "hide" : "rightBottomRight"}>
                    <div className="transaction-list">
                      <div className="transaction-header">
                        <h2>{t("RecentTransactions")}</h2>
                      </div>
                      <div className="desktop-transation">
                        <ul>
                          {transactions.map((transaction,key) => (
                            <>
                              {transaction?.status === "PENDING" ? (
                                <li
                                  key={key}
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
                                       {key.toFixed(5)}
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
                                    key={transaction.id}
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
                      </div>
                      <div className="mobile-transation">
                        {transactions.map((transaction, index) => (
                          <>
                          { transaction?.status === 'PENDING' ? (<>
                            <div className="card" key={index}  onClick={() =>
                                    dispatch(
                                      isOpenModal({
                                        open: true,
                                        name: "NeedKyc",
                                      })
                                    )
                                  }>
                            <div className="card-header">
                              <div className="request-id">
                                <span className="title">Request ID</span>
                                <span className="date">{transaction.date}</span>
                              </div>
                              <div className="amount">{transaction.amount}</div>
                            </div>
                            <div className="card-body">
                              <div className="company-info">
                                <Image
                                  height={0}
                                  width={0}
                                  unoptimized
                                  src={transaction.img}
                                  alt="HSBC Logo"
                                  className="company-logo"
                                />
                                <div className="company-details">
                                  <span className="company-name">
                                    HSBC Finance
                                  </span>
                                  <span className="rfp-id">
                                    RFP-ID : {transaction.rfpId}
                                  </span>
                                </div>
                              </div>
                              <div
                                className={`status ${transaction.status.toLowerCase()}`}
                              >
                                {transaction.status}
                              </div>
                            </div>
                          </div>
                          </>):(<>
                            <div className="card" key={index}>
                            <div className="card-header">
                              <div className="request-id">
                                <span className="title">Request ID</span>
                                <span className="date">{transaction.date}</span>
                              </div>
                              <div className="amount">{transaction.amount}</div>
                            </div>
                            <div className="card-body">
                              <div className="company-info">
                                <Image
                                  height={0}
                                  width={0}
                                  unoptimized
                                  src={transaction.img}
                                  alt="HSBC Logo"
                                  className="company-logo"
                                />
                                <div className="company-details">
                                  <span className="company-name">
                                    HSBC Finance
                                  </span>
                                  <span className="rfp-id">
                                    RFP-ID : {transaction.rfpId}
                                  </span>
                                </div>
                              </div>
                              <div
                                className={`status ${transaction.status.toLowerCase()}`}
                              >
                                {transaction.status}
                              </div>
                            </div>
                          </div></>)}
                          </>
                         
                        ))}
                      </div>
                      <div className="summary">
                        <div className="summary-content">
                          <div className="d-flex">
                            <div>
                              {" "}
                              <h1>08</h1>
                            </div>
                            <div>
                              <p>
                                {t("Youhaveransactions")}
                                <br />
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
                  <div className={!hide ? "hide" : "transaction-lisst"}>
                    <div className="">
                      <div className="summary">
                        <div className="summary-content">
                          <div>
                            {" "}
                            <h1>09</h1>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <p>
                                {t("Youhaveransactions")} <br />{" "}
                                {t("thatcanbe")}
                              </p>
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
                </div>
              </div>
              <div className="rightSIdeOtherDetails">
                <div className="first">
                  <div className="wallet-dashboard">
                    <div className="wallet-balance">
                      <Image
                        unoptimized
                        height={0}
                        width={0}
                        src="/assets/wallets.png"
                        alt="Wallet"
                        className="wallet-icon"
                      />
                      <div className="balance-info">
                        <div className="balance">
                          {balance} <span className="currency">{currency}</span>
                        </div>
                        <div className="description">{t("MyWallet")}</div>
                        <div className="sub-description">
                          {t("Financemodule")}
                        </div>
                        <button
                          className="recharge-button"
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
                        </button>
                      </div>
                    </div>
                    <div className="centerborder"></div>
                    <div className="wallet-insights">
                      <h2>{t("WalletInsights")}</h2>
                      <Line data={data1} options={options1} />
                    </div>
                  </div>
                </div>
                <div className="second">
                  <div>
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
                        <div className="subText">
                          {t("Applicable")}
                          {/*  on min txn value of SAR 5000 */}
                        </div>
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
                        <div className="subText">{t("Applicableon")}</div>
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
                        <div className="sub-heading">
                          Get 5200 SAR credited card <br /> SAR 100 in your
                          wallet
                        </div>
                        <div className="subText">{t("Applicableon")}</div>
                      </div>
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
                    </div>
                  </div>
                  <div>
                    <div className="heading pt-4">
                      {t("RecentRechargesDone")}
                    </div>
                    <div className="transaction-list">
                      {transactionsData.map((transaction) => (
                        <div
                          key={transaction.id}
                          className={`transaction ${
                            transaction.coupon ? "with-coupon" : ""
                          }`}
                        >
                          <div className="transaction-info">
                            <div className="transaction-id">Transaction ID</div>
                            <div className="transaction-date">
                              {transaction.date}
                            </div>
                          </div>
                          <div className="transaction-type">
                            {transaction.coupon && (
                              <Image
                                unoptimized
                                height={0}
                                width={0}
                                src='/assets/sabb.png'
                                alt="Reward"
                                className="reward-icon"
                              />
                            )}
                            <div className="d-block">
                              <div>{transaction.type}</div>
                              {transaction.coupon && (
                                <div className="coupon-code">
                                  COUPON CODE - {transaction.coupon}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="transaction-amount">
                            {transaction.amount}
                          </div>
                        </div>
                      ))}
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
      {
        modalData.isOpen && modalData.modalName === "RechargeWallet" && (
          <>
            <RechargeWallet />
          </>
        )
      }
      {
        modalData.isOpen && modalData.modalName === "WalletRecharge" && (
          <>
            <WalletRecharge />
          </>
        )
      }
      {
        modalData.isOpen && modalData.modalName === "SuccessModal" && (
          <>
            <SuccessModal />
          </>
        )
      }
      {
        modalData.isOpen && modalData.modalName === "SignInCard" && (
          <>
            <SignInCard />
          </>
        )
      }
        {modalData.isOpen && modalData.modalName === "CreditDebitModel" && (
        <>
          <CreditDebitModel />
        </>
      )}
        {modalData.isOpen && modalData.modalName === "CredirDebitOtp" && (
        <>
          <CredirDebitOtp />
        </>
      )}
        {modalData.isOpen && modalData.modalName === "Restricted" && (
        <>
          <Restricted />
        </>
      )}
      
    </div>
  );
}
