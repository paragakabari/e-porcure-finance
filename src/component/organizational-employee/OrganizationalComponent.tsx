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
import "./organizational.scss";
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
import { IoCloseOutline, IoPencil, IoPencilOutline } from "react-icons/io5";
import Sidebar from "../sidebar/sidebar";
import { useTranslations } from "next-intl";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
export default function OrganizationalComponent({
  locale,
}: {
  locale: string;
}) {
  const modalData = useSelector((state: RootState) => state.modalState);
  const dispatch = useDispatch();
  const t = useTranslations('Data');
  const [tab, setTab] = useState("recharge");
  const breadcrumb = [
    {
      text: "Dashboard",
      link: "/",
    },
    {
      text: "WorkspaceSetting",
      link: "",
    },
    {
      text: "OrganizationalEmployees",
      link: "",
    },
  ];
  const employees = [
    {
      initials: "KJ",
      name: "Kinjal Jain",
      lastLogin: "10 hours ago 2:10 PM",
      department: "Executive",
      location: "Riyadh, Riyadh Province, Saudi Arabia",
      inviteStatus: "Pending",
    },
    {
      initials: "RR",
      name: "Rashida Rajamdar",
      lastLogin: "10 hours ago 2:10 PM",
      department: "Executive",
      location: "Riyadh, Riyadh Province, Saudi Arabia",
      inviteStatus: "Accepted",
    },
  ];

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
              <Breadcrumbs breadcrumbArray={breadcrumb} />
              <div className="rightTopDetails d-flex align-items-end justify-content-between ">
                <div>
                  <h1>{t('OrganizationalEmployees')}</h1>
                </div>
                <div className="resclass w-50 d-flex gap-2  justify-content-end">
                  <div className="importbutton">{t('IMPORT')}</div>
                  <div className="rechargethewallet">{t('ADDEMPLOYEE')}</div>
                </div>
              </div>
              <div className="rightBottomDetails">
                <div className="employee-table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>{t('Employee')}</th>
                        <th>{t('Department')}</th>
                        <th>{t('Role')}</th>
                        <th>{t('Location')}</th>
                        <th>{t('Actions')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee, index) => (
                        <tr key={index}>
                          <td>
                            <div className="employee-info">
                             <div className="d-block">
                             <div
                                className={`initials ${
                                  employee.inviteStatus === "Pending"
                                    ? "pending"
                                    : "accepted"
                                }`}
                              >
                                {employee.initials}
                              </div>
                             </div>
                              <div className="details">
                                <span className="name">{employee.name}</span>
                                <span className="last-login">
                                  Last Login: {employee.lastLogin}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>{employee.department}</td>
                          <td>
                            <a className="assign-role">Assign Role &nbsp;</a>
                          </td>
                          <td>{employee.location}</td>
                          <td>
                            {employee.inviteStatus === "Pending" ? (
                              <button className="resend-invite">
                                Resend Invite
                              </button>
                            ) : (
                              <a className="payment-permission">
                                Payment Permission
                              </a>
                            )}
                            <button className="edit">
                              <IoPencilOutline />
                            </button>
                            <button className="delete">
                              <IoCloseOutline />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="res-table">
                  {
                    employees.map((employee, index) => (
                      <div className="card" key={index}>
                        <div className="card-header">
                        <div
                              className={`initials ${
                                employee.inviteStatus === "Pending"
                                  ? "pending"
                                  : "accepted"
                              }`}
                            >
                              {employee.initials}
                            </div>
                          <div className="request-info">
                            <span className="title">{employee.name}</span>
                            <span className="date">  {employee.lastLogin}</span>
                          </div>
                        </div>
                          <div className="amount">{employee.location}</div>
                        <div className="card-body">
                          <div className="company-info">
                          
                            <div className="company-details">
                              {employee.inviteStatus === "Pending" ? (
                              <button className="resend-invite">
                                Resend Invite
                              </button>
                            ) : (
                              <a className="payment-permission">
                                Payment Permission
                              </a>
                            )}
                            
                            <button className="edit">
                              <IoPencilOutline />
                            </button>
                            <button className="delete">
                              <IoCloseOutline />
                            </button>
                            </div>
                            
                            
                          </div>
                        </div>
                      </div>
                    ))
                  }
              
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
    </div>
  );
}
