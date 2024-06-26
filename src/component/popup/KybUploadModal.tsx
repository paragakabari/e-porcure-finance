import { isOpenModal } from "@/store/modal-slice";
import { useState } from "react";
import { IoCloseOutline, IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import "./popup.scss";
import { useTranslations } from "next-intl";
export default function KybUploadModal() {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'LicensingDocument', size: "4.5 KB" },
    { name: "Projectcontract", size: "4.5 KB" },
    { name: "PANnumber", size: "4.5 KB" },
  ]);
  const dispatch = useDispatch();
  const t = useTranslations("Data");
  return (
    <div className="popup-overlay">
      <div className="popup full-width">
        <button className="close-button"
          onClick={() => dispatch(isOpenModal({ open: false, name: "KybUploadModal" }))}>
          <IoCloseOutline />
        </button>
        <h2>{t('Complete')}</h2>
        <div className="modal-body">
          {uploadedFiles.map((file, index) => (
            <div className="uploaded-file" key={index}>
              <div className="file-info">
                <div className="file-icon"></div>
                <div className="file-details">
                  <div className="file-name">{t(file.name)}</div>
                  <div className="file-size">{file.size}</div>
                </div>
              </div>
              <button className="remove-button">
                <IoCloseOutline />
              </button>
            </div>
          ))}
          <div className="text-start mb-2">
            <button className="add-more">{t("ADDMOREDOCUMENTS")}</button>
          </div>
          <div className="file-selection mb-4">
            <div className="textleft w-50">
              <div>{t("Selectfile")}</div>
              <input
                type="text"
                placeholder={t('Choose')}
                className="file-type-input w-100"
              />
            </div>
            <div className="w-50 d-flex">
              <div className="file-upload ">
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  className="file-input"
                />
                <label htmlFor="file-upload" className="file-dropzone">
                  <div className="d-flex gap-2 align-items-center">
                    <div>
                      <IoCloudUploadOutline color="#ff5a5a" size={30} />
                    </div>
                    <div className="dropzone-text">
                      <p className="font-13">
                        {t("Drop")}
                      </p>
                      <p className="font-12 stextcolor">{t("Uploadupto")}</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="" onClick={() => dispatch(isOpenModal({ open: true, name: "DeclarationModal" }))}>
          <button className="enquire-button">{t("YESSURE")}</button>
        </div>
      </div>
    </div>
  );
}
