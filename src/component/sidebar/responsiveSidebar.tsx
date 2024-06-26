import React, { useState } from "react";
import "./sidebar.scss";
import CompanyLogo from "../logo/icon";
import { IoIosInformation, IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";
import { FaAngleDown, FaBarsStaggered } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function ResSidebar({ locale,handleToggle }) {

  const t = useTranslations('Data');
  const router = useRouter();
  const searchParams = usePathname();

  const [language, setLanguage] = useState(false);

  const handleChange = (event: string) => {
    const newLocale = locale === "en" ? "ar" : "en";
    const pathParts = searchParams
      .split("/")
      .filter((part) => part && part !== "en" && part !== "ar");
    const newPath = `/${newLocale}/${pathParts.join("/")}`;
    router.push(newPath);
  };

  const redirect = useRouter();
  return (
    <>
      <div className="w-100">
      
        <div className="sidebarResponsive">
        <div className="ressidebar">
        <div>
            <div className=" relatives">
              <span>{t("MYWORKSPACE")}</span>
              <div className="info">
                <IoIosInformation />
              </div>
            </div>

            <div className="leftSideProfileNameAlignment">
              <div className="profileDetails">
                <div className="profileBox">
                  <span>SP</span>
                </div>
              </div>
              <div className="profileDetails">
                <div className="profileBox">
                  <span>Ns</span>
                </div>
              </div>
              <div className="profileDetails">
                <div className="profileBox">
                  <span>SP</span>
                </div>
              </div>

              <div className="profileDetails">
                <div className="profileBox">
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sideBarAlignment">
            <div className="sidebarTopDetails">
              <div className="sidebarProfileDetails">
                <div className="sidebarProfile">
                  <span>NA</span>
                </div>

                <div className="profileRightSide">
                  <div className="topHeading">
                    <h6>{t("NawafA")}</h6>

                    <div className="statusAllginemt">
                      <p>Admin</p>
                    </div>
                  </div>

                  <div className="descriptionDetails">
                    <p>{t("SaudiProcurement")}</p>
                  </div>
                </div>
              </div>

           
            </div>

            <div className="sidebarMenuAlignment">
              <div className="allMenuAignment">
                <div
                  className="menuDetails"
                  onClick={() =>{

                    redirect.push(`${locale === "en" ? "/en" : "/ar"}/`),
                    handleToggle()
                  }
                  }
                >
                  <a className={searchParams === `/en` ? "" : ""}>
                    {t("Dashboard")}
                  </a>
                </div>
                <div className="menuDetails">
                  <a>
                    {t("StrategicSourcing")}{" "}
                    <div className="tryBox">
                      <p>TRY</p>
                    </div>
                  </a>
                </div>
                <div className="menuDetails">
                  <a>{t("EAuction")}</a>
                </div>
                <div className="menuDetails">
                  <a>{t("MyNetworks")}</a>
                  <div className="childDetailsMenu">
                    <p>{t("ExpertNetwork")}</p>
                    <p>{t("SupplierNetwork")}</p>
                  </div>
                </div>

                <div className="menuDetails">
                  <a>{t("ApprovalCenter")}</a>
                </div>
                <div
                  className="menuDetails"
                  onClick={() =>{
                    redirect.push(
                      `${locale === "en" ? "/en" : "/ar"}/order-management`
                    ),
                    handleToggle()
                  }}
                >
                  <a
                    className={
                      searchParams === `/en/order-management` ? "" : ""
                    }
                  >
                    {t("OrderManagement")}
                  </a>
                </div>
                <div className="menuDetails">
                  <a>{t("VendorManagement")}</a>
                </div>
                <div className="menuDetails">
                  <a>{t("InvoiceManagement")}</a>
                </div>
                <div className="menuDetails">
                  <a>{t("SmartContracts")}</a>
                </div>
                <div className="menuDetails"
                onClick={() =>{
                  redirect.push(
                    `${locale === "en" ? "/en" : "/ar"}/organizational-employee`
                  ),
                  handleToggle()
                }
                }>
                  <a>{t("WorkspaceSettings")}</a>
                </div>
                <div className="menuDetails">
                  <a>{t("SpendAnalytics")}</a>
                </div>
                <div
                  className="menuDetails"
                  onClick={() =>{

                    redirect.push(
                      `${locale === "en" ? "/en" : "/ar"}/wallet-management`
                    ),
                    handleToggle()
                  }
                  }
                >
                  <a
                    className={
                      searchParams === `/en/wallet-management` ? "" : ""
                    }
                  >
                    {t("WalletManagement")}
                  </a>
                </div>
              </div>
              <div className="bottomBox">
                <div>
                  <div className="bottomBoxHeading">
                    <div className="d-flex">
                      <h5>{t("EprocureFinance")}</h5>
                      <div className="newBox mx-2 px-2 ">
                        <p>NEW</p>
                      </div>
                    </div>
                  </div>
                  <p>{t("Findyourinvestors")}</p>
                </div>
              </div>
              <div className="allMenuAignment">
                <div className="border-logout"></div>
                <div className="menuDetails">
                  <a>{t("Logout")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
