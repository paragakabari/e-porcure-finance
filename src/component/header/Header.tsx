import React, { useState } from "react";
import "./header.scss";
import CompanyLogo from "../logo/icon";
import { IoIosInformation, IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";
import { FaAngleDown, FaBarsStaggered } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "../sidebar/sidebar";
import ResSidebar from "../sidebar/responsiveSidebar";

export default function Header({ locale }: { locale: string }) {
  const [header, setHeader] = useState(false);
  const [sidebar, setSidebar] = useState(false);
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
const handleToggle = () => {
    setSidebar(!sidebar);
  }

  return (
    <>
      <div className="mainBg">
        <div className="headerSection">
          <div className="container">
            <div className="headerAlignment">
              <div className="headerLeftSide">
                <div>
                  <div className="profileDetails" onClick={() => setSidebar(true)}>
                    <div className="profileBox">
                      <span>SP</span>
                    </div>
                  </div>
                </div>
                <div
                  className="logoalignmentFlex"
                  onClick={() => router.push("/")}
                >
                  <div className="logoAlignment">
                    <CompanyLogo />
                  </div>
                </div>

                <div className="menuAlignment">
                  <a>{t("Discover")}</a>
                  <a>{t("B2BMarketplace")}</a>
                  <a>{t("ProcurementSoftware")}</a>
                  <a>{t("BusinesNetwork")}</a>
                  <a>{t("LogisticsHub")}</a>
                </div>

                <div className="mobilelogoAlignment">
                  <FaBarsStaggered
                    style={{
                      color: "white",
                    }}
                    onClick={() => setHeader(true)}
                    size={30}
                  />
                </div>
              </div>
              <div className="dropdowndesignRelative">
                <div
                  className="dropdown"
                  onClick={() => setLanguage(!language)}
                >
                  <div className="leftIconAlignment">
                    <Image
                      unoptimized
                      src={
                        locale === "ar" ? "/assets/ar.png" : "/assets/in.webp"
                      }
                      alt={locale === "ar" ? "AR" : "EN"}
                      width={0}
                      height={0}
                    />
                    <span>{locale === "ar" ? "العربية" : "English"}</span>
                  </div>
                  <div className={language ? "rotate animation" : "animation"}>
                    <FaAngleDown />
                  </div>
                </div>

                <div
                  className={
                    language
                      ? "show cusdropdownDesign"
                      : "hide cusdropdownDesign"
                  }
                >
                  <div
                    className="leftIconAlignment"
                    onClick={() => handleChange(locale === "en" ? "ar" : "en")}
                  >
                    <Image
                      unoptimized
                      src={"/assets/in.webp"}
                      alt="EN"
                      width={0}
                      height={0}
                    />
                    <span>English</span>
                  </div>
                  <div
                    className="leftIconAlignment"
                    onClick={() => handleChange(locale === "en" ? "ar" : "en")}
                  >
                    <Image
                      unoptimized
                      src={"/assets/ar.png"}
                      alt="AR"
                      width={0}
                      height={0}
                    />
                    <span>العربية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={header ? "show mobilesidebar" : "mobilesidebar hide"}>
        <div className="mobilesidebarAlignment" >
         
          <CompanyLogo
          />
          <IoMdClose size={30} onClick={() => setHeader(false)} />
        </div>
        <div className="headerResponsive">
                  <div className="sides">
                    <div>{t("Discover")}</div>
                    <div>{t("B2BMarketplace")}</div>
                    <div>{t("ProcurementSoftware")}</div>
                    <div>{t("BusinesNetwork")}</div>
                    <div>{t("LogisticsHub")}</div>
                    </div> 
        </div>
      </div>
      <div className={sidebar ? "show mobilesidebar" : "mobilesidebar hide"}>
        <div className="mobilesidebarAlignment mobileside">
          <ResSidebar locale={locale} handleToggle={handleToggle} />
         <div className="sidebarclose">
         <IoMdClose size={30} onClick={() => setSidebar(false)} />
         </div>
        </div>
      </div>
    </>
  );
}
