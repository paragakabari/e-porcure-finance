import { isOpenModal } from '@/store/modal-slice';
import { IoCloseOutline, IoCloudUploadOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import './popup.scss';
import { useTranslations } from 'next-intl';
export default function KybModal() {
const dispatch = useDispatch();
const t =useTranslations('Data');
    return (
        <div className="popup-overlay">
        <div className="popup full-width">
          <button className="close-button" onClick={() => dispatch(isOpenModal({ open: false, name: "KybModal" }))} >
            <IoCloseOutline />
          </button>
          <h2>{t('Complete')}</h2>
          <div className="modal-body">
          <div className="file-selection">
           <div className='textleft w-50'>
           <div>{t('Selectfile')}</div>
            <input
              type="text"
              placeholder={t('Choose')}
             
              className="file-type-input w-100"
            />
           </div>
            <div className='w-50 d-flex'>
            <div className="file-upload ">
              <input
                type="file"
                id="file-upload"
                multiple
                className="file-input"
              />
              <label htmlFor="file-upload" className="file-dropzone">
              <div className='d-flex gap-2 align-items-center'>
              <div>
                  <IoCloudUploadOutline color='#ff5a5a' size={30} />
                </div>
                <div className="dropzone-text">
                  <p className='font-13'>{t("Drop")}</p>
                  <p className='font-12 stextcolor'>{t("Uploadupto")}</p>
                </div>
              </div>
              </label>
            </div>
            </div>
          </div>
          <div className='text-start'>

          <button className="add-more" onClick={() => dispatch(isOpenModal({ open: true, name: "KybUploadModal" }))}>{t("ADDMOREDOCUMENTS")}</button>
          </div>
        </div>
        <div className="" onClick={() => dispatch(isOpenModal({ open: false, name: "KybModal" }))}>
          <button className="enquire-button" >{t("YESSURE")}</button>
        </div>
       
        </div>
     
      </div>
    )

}