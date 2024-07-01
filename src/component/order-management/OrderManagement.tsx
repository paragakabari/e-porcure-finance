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
import { BsCopy, BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { IoIosInformation } from "react-icons/io";
import Breadcrumbs from "../breadcrumb/BreadCrumb";
import "./order.scss";
import Sidebar from "../sidebar/sidebar";
import { useTranslations } from "next-intl";
import { isOpenModal } from "@/store/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import RechargeTheWalletModel from "../popup/RechargeTheWallet";
import SupplyChainFinanceModal from "../popup/SupplyChainFinanceModal";
import FinanceModal from "../popup/FinancersModal";
import PaymentOption from "../popup/paymentOption";
import NeedKyc from "../popup/NeedKyc";
import KybModal from "../popup/KybModal";
import KybUploadModal from "../popup/KybUploadModal";
import DeclarationModal from "../popup/DeclarationModal";
import ThankYouModal from "../popup/ThankYouModal";
import LeaveYourRequestModal from "../popup/LeaveYourRequestModal";
import RechargeWallet from "../popup/RechargeWallet";
import WalletRecharge from "../popup/WalletRecharge";
import CreditDebitModel from "../popup/CredirDebitModel";
import CredirDebitOtp from "../popup/CredirDebitOtp";
import Restricted from "../popup/Restricted";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
export default function OrderManagementComponent({
  locale,
}: {
  locale: string;
}) {
  const breadcrumb = [
    {
      text: "Dashboard",
      link: "/",
    },
    {
      text: "OrderManagement",
      link: "",
    },
  ];

  const redirect = useRouter();
  const searchParams = usePathname();
  const orders = [
    {
      id: "1",
      orderNumber: "PO-1137 ORDER-1763",
      description: "Montblanc Starwalker",
      type: "Multiple orders",
      orderType: "Direct Order",
      customer: {
        name: "Nouf Aziz",
        date: "12-05-2023",
        avatar: "customer1.png",
      },
      amount: "19,500",
      currency: "SAR",
      status: "Delivered",
      statusColor: "#dadefb",
      actionButtons: ["view", "edit", "delete",],
      img:'/assets/sib.png',
      by:'/assets/nils.png'
    },
    {
      id: "2",
      orderNumber: "RFX-1232",
      description: "Office Chair (Black)",
      type: "",
      orderType: "Direct Order",
      customer: {
        name: "Nouf Aziz",
        date: "12-05-2023",
        avatar: "customer1.png",
      },
      amount: "19,500",
      currency: "SAR",
      status: "Payment Pending",
      statusColor: "#fee1dd",
      actionButtons: ["pay", "view", "edit", "delete"],
      img:'/assets/snb.png',
      by:'/assets/tata.png'
    },
    {
      id: "3",
      orderNumber: "RFX-1232",
      description: "Office Chair (Black)",
      type: "",
      orderType: "Direct Order",
      customer: {
        name: "Nouf Aziz",
        date: "12-05-2023",
        avatar: "customer1.png",
      },
      amount: "19,500",
      currency: "SAR",
      status: "Payment Pending",
      statusColor: "#FFE0E0",
      actionButtons: ["pay", "view", "edit", "delete"],
       img:'/assets/sabb.png',
      by:'/assets/alka.png'
    },
    {
      id: "4",
      orderNumber: "RFX-1232",
      description: "Office Chair (Black)",
      type: "",
      orderType: "Direct Order",
      customer: {
        name: "Nouf Aziz",
        date: "12-05-2023",
        avatar: "customer1.png",
      },
      amount: "19,500",
      currency: "SAR",
      status: "Payment Pending",
      statusColor: "#FFE0E0",
      actionButtons: ["pay", "view", "edit", "delete"],
       img:'/assets/alima.png',
      by:'/assets/tata.png'
    },
    {
      id: "5",
      orderNumber: "RFX-1232",
      description: "Office Chair (Black)",
      type: "",
      orderType: "Direct Order",
      customer: {
        name: "Nouf Aziz",
        date: "12-05-2023",
        avatar: "customer1.png",
      },
      amount: "19,500",
      currency: "SAR",
      status: "Payment Pending",
      statusColor: "#FFE0E0",
      actionButtons: ["pay", "view", "edit", "delete"],
       img:'/assets/ai.png',
      by:'/assets/tata.png'
    },
  ];

  const [show, setShow] = useState(false);
  const t = useTranslations("Data");
  const dispatch = useDispatch();
  const modalData = useSelector((state: RootState) => state.modalState);


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
                <h1>{t("OrderManagement")}</h1>
              </div>

              <div className="rightSIdeOtherDetail">
                <div className="order-table">
                  <div className="order-table-header">
                    <div>{t("OrderInformation")}</div>
                    <div>{t("OrderBY")}</div>
                    <div>{t("OrderAmt")}</div>
                    <div>{t("Status")}</div>
                    <div>{t("Actions")}</div>
                  </div>
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="order-row"
                      onClick={() => setShow(!show)}
                    >
                      <div className="order-info">
                        <Image
                          unoptimized
                          height={0}
                          width={0}
                          src={order.img}
                          alt="Product"
                          className="product-image"
                        />
                        <div>
                          <div className="order-number">
                            {order.orderNumber}
                          </div>
                          <div className="order-description">
                            {order.description}
                          </div>
                          {order.type && (
                            <div className="order-type">{order.type}</div>
                          )}
                          <div className="order-type">{order.orderType}</div>
                        </div>
                      </div>
                      <div className="order-by">
                        <Image
                          unoptimized
                          height={0}
                          width={0}
                          src={order.by}
                          alt={order.customer.name}
                          className="customer-avatar"
                        />
                        <div className="customer-info">
                          <div>{order.customer.name}</div>
                          <div className="order-date">
                            {order.customer.date}
                          </div>
                        </div>
                      </div>
                      <div className="order-amount">
                        <div> {order.amount}</div>
                        <span>{order.currency}</span>
                      </div>
                      <div
                        className=""
                       
                      >
                       <div  style={{ backgroundColor: order.statusColor }} className="order-status"> {order.status}</div>

                        {
                          order.status === "Payment Pending" && (
                            <div className="button"  onClick={() => {
                              dispatch(
                                isOpenModal({
                                  open: true,
                                  name: "RechargeTheWalletModel",
                                })
                              );
                            }}>
                             Pay Now
                            </div>
                          )
                        }
                      </div>
                      <div className="order-actions">
                        {order.actionButtons.includes("copy") && (
                          <BsCopy className="  cursor-pointer copy-button" title="Copy" />
                        )}
                        {order.actionButtons.includes("view") && (
                          <BsEye className="  cursor-pointer view-button" title="View" />
                        )}
                        {order.actionButtons.includes("edit") && (
                          <BsPencil className="  cursor-pointer edit-button" title="Edit" />
                        )}
                        {order.actionButtons.includes("delete") && (
                          <BsTrash className="  cursor-pointer delete-button" title="Delete" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mobile-table">
                {orders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <Image
                        unoptimized
                        height={0}
                        width={0}
                        className="product-image"
                        src="/assets/ar.png"
                        alt="Montblanc Starwalker Midnight Black Pen"
                      />
                      <div className="order-info">
                        <div className="order-id">{order.orderNumber}</div>
                        <div className="order-name">{order.description}</div>
                        {order.type && (
                          <div className="order-type">
                            <span className="multiple-orders">
                              Multiple orders
                            </span>
                            <span className="direct-order">Direct Order</span>
                          </div>
                        )}
                        <div className="order-type">{order.orderType}</div>
                      </div>
                    </div>
                    <div className="order-footer">
                      <div className="order-by">
                        <Image
                          unoptimized
                          height={0}
                          width={0}
                          src="/assets/ar.png"
                          alt={order.customer.name}
                          className="user-avatar"
                        />
                        <div>
                          <div className="user-name">{order.customer.name}</div>
                          <div className="order-date">
                            {order.customer.date}
                          </div>
                        </div>
                      </div>
                      <div className="order-amount">
                        <div className="amount"> {order.amount}</div>
                        <div className="currency">{order.currency}</div>
                      </div>
                      <div
                        className="order-status"
                        style={{ backgroundColor: order.statusColor }}
                      >
                        {order.status}
                      </div>
                    </div>
                  </div>
                ))}
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
