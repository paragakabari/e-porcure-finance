import { IoCloseOutline } from "react-icons/io5";
import "./popup.scss";
import Image from "next/image";

export default function SupplyChainFinanceModal() {
  const financers = [
    {
      name: "Saudi National Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Variable",
      logo: "/assets/ar.png",
    },
    {
      name: "Alawwal Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Variable",
      logo: "/assets/ar.png",
    },
    {
      name: "Saudi Investment Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
      logo: "/assets/ar.png",
    },
    {
      name: "Alinma Bank",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
      logo: "/assets/ar.png",
    },
    {
      name: "Banque Saudi Fransi",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
     logo: "/assets/ar.png",
    },
    {
      name: "Banque Saudi Fransi",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
     logo: "/assets/ar.png",
    },
    {
      name: "Banque Saudi Fransi",
      documents: "3 Documents",
      eligibility: "Check Eligibility",
      rate: "15.2%-20.4%",
      type: "Fixed",
     logo: "/assets/ar.png",
    },
  ];

  return (
    <div className="popup-overlay">
      <div className="popup full-width">
        <button className="close-button">
          <IoCloseOutline />
        </button>

        <h2>Few Financers1</h2>
        <div className="financer-list">
          <div className="financer-list-container table-responsive">
            <table>
            {financers.map((financer, index) => (
                <>
              <tr className="financer-item" key={index}>
                <td>
                  <div className="financer-logo">
                    <Image
                      unoptimized
                      height={0}
                      width={0}
                      src={financer.logo}
                      alt={financer.name}
                    />
                    <span className="font-20">{financer.name}</span>
                  </div>
                </td>
                <td>
                  <div className="font-17">{financer.documents}</div>
                  <div className="font-17">{financer.eligibility}</div>
                </td>
                <td className="font-17">
                  <div>{financer.rate}</div>
                  <div className="gray">{financer.type}</div>
                </td>
                <td>
                  <button className="enquire-button">ENQUIRE NOW</button>
                </td>
              </tr>
              <caption className="spacer"></caption>
              </>
            ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
