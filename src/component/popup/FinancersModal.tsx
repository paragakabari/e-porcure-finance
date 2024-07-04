import { IoCloseOutline } from "react-icons/io5";
import "./popup.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { isOpenModal } from "@/store/modal-slice";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function FinanceModal() {
  const financers = [
    {
      name: "Saudi National Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Variable",
      logo: "/assets/snb.jpeg",
    },
    {
      name: "Alawwal Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Variable",
      logo: "/assets/sabb.png",
    },
    {
      name: "Saudi Investment Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
      logo: "/assets/sib.png",
    },
    {
      name: "Alinma Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
      logo: "/assets/alima.png",
    },
    {
      name: "Banque Saudi Fransi",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
      logo: "/assets/bsf.png",
    },
    {
      name: "AI Rajhi Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
      logo: "/assets/ai.png",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [showanother, setShowAnother] = useState(false);
  const dispatch = useDispatch();
  const t = useTranslations("Data");
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };
  return (
    <div className="popup-overlay">
      <div className="popup fullpopup">
        <button
          className="close-button"
          onClick={() =>
            dispatch(isOpenModal({ open: false, name: "FinanceModal" }))
          }
        >
          <IoCloseOutline />
        </button>

        <h2 className="textleft">{t("FewFinancers")}</h2>
        <div className="financer-list">
          <div className="financer-list-container table-responsive">
            <div className="f-table collapsible-table">
              <table>
              {financers.map((financer, index) => (
        <React.Fragment key={index}>
          <tr className="financer-item">
            <td>
              <div className="financer-logo">
                <Image
                  unoptimized
                  height={0}
                  width={0}
                  src={financer.logo}
                  alt={financer.name}
                />
                <span className="font-18">{financer.name}</span>
              </div>
            </td>
            <td>
              <div className="font-14">{financer.documents}</div>
              <div className="font-14">{financer.eligibility}</div>
            </td>
            <td className="font-14">
              <div>{financer.rate}</div>
              <div className="gray">{financer.type}</div>
            </td>
            <td>
              <button
                className="enquire-button"
                onClick={() => handleToggle(index)}
              >
                {t('EnquireNow')}
              </button>
            </td>
          </tr>

          {expandedRowIndex === index && (
            <tr>
              <td colSpan={12} >
              <div className="loan-offers">
                      <div>
                        <div className="bank-header">
                          <div className="f-table">
                            <table>
                              <>
                                <tr className="">
                                  <td>
                                    <div className="financer-logo">
                                      <Image
                                        unoptimized
                                        height={0}
                                        width={0}
                                        src="/assets/sabb.png"
                                        alt="logo"
                                      />
                                      <span className="font-18">
                                        Alawwal Bank
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="font-14">3 Documents</div>
                                    <div className="font-14">
                                      Check Eligibility
                                    </div>
                                  </td>
                                  <td className="font-14">
                                    <div>8.55% - 9.99%</div>
                                    <div className="gray">
                                      Variable Interest Rate
                                    </div>
                                  </td>
                                </tr>

                                <caption className="spacer"></caption>
                              </>
                            </table>
                          </div>
                          <div className="f-table-responsive">
                            <div className="bank-card">
                              <div className="bank-logo">
                                <Image
                                  unoptimized
                                  height={0}
                                  width={0}
                                  src="/assets/ar.png"
                                  alt="logo"
                                />
                              </div>
                              <div className="bank-details">
                                <div className="bank-name">
                                  Alawwal Bank
                                </div>
                                <div className="flexs">
                                  <div>
                                    <div className="bank-eligibility">
                                      3 Documents
                                    </div>
                                    <div className="bank-docs">
                                      Check Eligibility
                                    </div>
                                  </div>
                                  <div className="bank-rates">
                                    <div className="rate-range">
                                      8.55% - 9.99%
                                    </div>
                                    <div className="rate-type">
                                      Variable Interest Rate
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="bank-action"
                                onClick={() => setToggle(!toggle)}
                              >
                                <button className="action-button">→</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="offers-section">
                          <div className="offers">
                            <div>
                              <h2>{t('OffersAssocciateWithUs')}</h2>
                            </div>
                            <div className="imggrid">
                              <Image
                                unoptimized
                                height={0}
                                width={0}
                                src="/assets/1card.png"
                                alt="Offer 1"
                              />
                              <Image
                                unoptimized
                                height={0}
                                width={0}
                                src="/assets/2card.png"
                                alt="Offer 1"
                              />
                              <Image
                                unoptimized
                                height={0}
                                width={0}
                                src="/assets/3card.png"
                                alt="Offer 2"
                              />
                            </div>
                          </div>
                          <div className="details">
                            <div className="what-you-like">
                              <h2>{t('WhatYoue')}</h2>
                              <ul>
                                <li>{t('Instantfinancefrom')}</li>
                                <li>{t('Nohiddenfees')}</li>
                                <li>{t('Quickapproval')}</li>
                                <li>{t('AffordableEMI')}</li>
                              </ul>
                            </div>
                            <div className="perks-provided">
                              <h2>{t('PerksProvided')}</h2>
                              <ul>
                                <li>{t('Noguarantorrequired')}</li>
                                <li>{t('EapprovalReceived')}</li>
                                <li>{t('NoForeclosure')}</li>
                                <li>{t('QuickUpdate')}</li>
                              </ul>
                            </div>
                            <div className="eligibility-criteria">
                              <h2> {t('EligibilityCriteria')}</h2>
                              <p>
                                {t('Minimumage21')}
                                <br />
                                {t('Maximumage60')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="documents-required">
                        <h2>{t('DocumentsRequired')}</h2>
                        <ul>
                          <li>{t('KYCPANcurrent')}</li>
                          <li>{t('Bankstatement')}</li>
                          <li>{t('SelfieProfilePicture')}</li>
                        </ul>

                        {!showanother && (
                          <>
                            <div className="actions">
                              <div className="font-16">
                                {t('Doyouhave')}
                              </div>
                              <div
                                className="yesbutton"
                                onClick={() => setShowAnother(!showanother)}
                              >
                                {t('YESIHAVEANAC')}
                              </div>
                            </div>
                          </>
                        )}
                        {showanother && (
                          <div className="actions">
                            <div className="font-16">
                              {t('DoyouhaveanaccountwithHSBC')}
                            </div>
                            <div>
                              <div className="inputs">
                                <input type="text" placeholder={t('ACNumber')} />
                              </div>
                              <div className="inputs">
                                <input
                                  type="text"
                                  placeholder={t('AuthorisedName')}
                                />
                              </div>
                              <div>
                                <button
                                  className="buttons w-100"
                                  onClick={() =>
                                    dispatch(
                                      isOpenModal({
                                        open: true,
                                        name: "SignInCard",
                                      })
                                    )
                                  }
                                >
                                  {t('SENDREQUEST')}
                                  
                                </button>
                              </div>
                              <div
                                className="my-3 cursor-pointer	font-16"
                                onClick={() => setShowAnother(!showanother)}
                              >
                                {t('SigninwithNafath')}
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="action-buttons">
                          <button className="no-account-button ">
                            {t('Idonthaveanaccount')}
                          </button>
                          {!showanother && (
                            <button className="account-button">
                              {t('EnquireNow')}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
              </td>
            </tr>
          )}

       
        </React.Fragment>
      ))}
              </table>
            </div>

            <div className="responsive-financer-list">
              {financers.map((financer, index) => (
                <>
                  <div className="bank-card">
                    <div className="bank-logo">
                      <Image
                        unoptimized
                        height={0}
                        width={0}
                        src={financer.logo}
                        alt={financer.name}
                      />
                    </div>
                    <div className="bank-details">
                      <div className="bank-name">{financer.name}</div>
                      <div className="flexs">
                        <div>
                          <div className="bank-eligibility">
                            {financer.documents}
                          </div>
                          <div className="bank-docs">
                            {financer.eligibility}
                          </div>
                        </div>
                        <div className="bank-rates">
                          <div className="rate-range">{financer.rate}</div>
                          <div className="rate-type">{financer.type}</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="bank-action"
                      onClick={() => handleToggle(index)}
                    >
                      <button className="action-button">→</button>
                    </div>
                  </div>
                  {
                    expandedRowIndex === index  && (
                      <div className="loan-offers">
                      <div>
                        <div className="bank-header">
                          <div className="f-table">
                            <table>
                              <>
                                <tr className="">
                                  <td>
                                    <div className="financer-logo">
                                      <Image
                                        unoptimized
                                        height={0}
                                        width={0}
                                        src="/assets/sabb.png"
                                        alt="logo"
                                      />
                                      <span className="font-18">
                                        Alawwal Bank
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="font-14">3 Documents</div>
                                    <div className="font-14">
                                      Check Eligibility
                                    </div>
                                  </td>
                                  <td className="font-14">
                                    <div>8.55% - 9.99%</div>
                                    <div className="gray">
                                      Variable Interest Rate
                                    </div>
                                  </td>
                                </tr>

                                <caption className="spacer"></caption>
                              </>
                            </table>
                          </div>
                          <div className="f-table-responsive">
                            <div className="bank-card">
                              <div className="bank-logo">
                                <Image
                                  unoptimized
                                  height={0}
                                  width={0}
                                  src="/assets/ar.png"
                                  alt="logo"
                                />
                              </div>
                              <div className="bank-details">
                                <div className="bank-name">
                                  Alawwal Bank
                                </div>
                                <div className="flexs">
                                  <div>
                                    <div className="bank-eligibility">
                                      3 Documents
                                    </div>
                                    <div className="bank-docs">
                                      Check Eligibility
                                    </div>
                                  </div>
                                  <div className="bank-rates">
                                    <div className="rate-range">
                                      8.55% - 9.99%
                                    </div>
                                    <div className="rate-type">
                                      Variable Interest Rate
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="bank-action"
                                onClick={() => setToggle(!toggle)}
                              >
                                <button className="action-button">→</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="offers-section">
                          <div className="offers">
                            <div>
                              <h2>{t('OffersAssocciateWithUs')}</h2>
                            </div>
                            <div className="imggrid">
                              <Image
                                unoptimized
                                height={0}
                                width={0}
                                src="/assets/1card.png"
                                alt="Offer 1"
                              />
                              <Image
                                unoptimized
                                height={0}
                                width={0}
                                src="/assets/2card.png"
                                alt="Offer 1"
                              />
                              <Image
                                unoptimized
                                height={0}
                                width={0}
                                src="/assets/3card.png"
                                alt="Offer 2"
                              />
                            </div>
                          </div>
                          <div className="details">
                            <div className="what-you-like">
                              <h2>{t('WhatYoue')}</h2>
                              <ul>
                                <li>{t('Instantfinancefrom')}</li>
                                <li>{t('Nohiddenfees')}</li>
                                <li>{t('Quickapproval')}</li>
                                <li>{t('AffordableEMI')}</li>
                              </ul>
                            </div>
                            <div className="perks-provided">
                              <h2>{t('PerksProvided')}</h2>
                              <ul>
                                <li>{t('Noguarantorrequired')}</li>
                                <li>{t('EapprovalReceived')}</li>
                                <li>{t('NoForeclosure')}</li>
                                <li>{t('QuickUpdate')}</li>
                              </ul>
                            </div>
                            <div className="eligibility-criteria">
                              <h2> {t('EligibilityCriteria')}</h2>
                              <p>
                                {t('Minimumage21')}
                                <br />
                                {t('Maximumage60')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="documents-required">
                        <h2>{t('DocumentsRequired')}</h2>
                        <ul>
                          <li>{t('KYCPANcurrent')}</li>
                          <li>{t('Bankstatement')}</li>
                          <li>{t('SelfieProfilePicture')}</li>
                        </ul>

                        {!showanother && (
                          <>
                            <div className="actions">
                              <div className="font-16">
                                {t('Doyouhave')}
                              </div>
                              <div
                                className="yesbutton"
                                onClick={() => setShowAnother(!showanother)}
                              >
                                {t('YESIHAVEANAC')}
                              </div>
                            </div>
                          </>
                        )}
                        {showanother && (
                          <div className="actions">
                            <div className="font-16">
                              {t('DoyouhaveanaccountwithHSBC')}
                            </div>
                            <div>
                              <div className="inputs">
                                <input type="text" placeholder={t('ACNumber')} />
                              </div>
                              <div className="inputs">
                                <input
                                  type="text"
                                  placeholder={t('AuthorisedName')}
                                />
                              </div>
                              <div>
                                <button
                                  className="buttons w-100"
                                  onClick={() =>
                                    dispatch(
                                      isOpenModal({
                                        open: true,
                                        name: "SignInCard",
                                      })
                                    )
                                  }
                                >
                                  {t('SENDREQUEST')}
                                  
                                </button>
                              </div>
                              <div
                                className="my-3 cursor-pointer	font-16"
                                onClick={() => setShowAnother(!showanother)}
                              >
                                {t('SigninwithNafath')}
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="action-buttons">
                          <button className="no-account-button ">
                            {t('Idonthaveanaccount')}
                          </button>
                          {!showanother && (
                            <button className="account-button">
                              {t('EnquireNow')}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    )

                  }
                </>
              ))}
            </div>

           
            
          </div>
        </div>
      </div>
    </div>
  );
}
