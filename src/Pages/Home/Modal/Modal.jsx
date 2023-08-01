import React from 'react';
import './Model.css';
import GridlinesDetailsPopup from '../PopUpComponents/GridlinesDetailsPopup';
import ELockrDetailsPopup from './../PopUpComponents/ELockrDetailsPopup';
import OnGridDetailsPopup from './../PopUpComponents/OnGridDetailsPopup';
import OnDemandPopup from './../PopUpComponents/OnDemandPopup';
import StaffingPopup from './../PopUpComponents/StaffingPopup';
import LogisticsAndTransportationPopup from './../PopUpComponents/LogisticsAndTransportationPopup';
import HospitalityPopup from './../PopUpComponents/HospitalityPopup';
import RetailPopup from './../PopUpComponents/RetailPopup';
import ManufacturingPopup from './../PopUpComponents/ManufacturingPopup';
import InformationTechnologyPopup from './../PopUpComponents/InformationTechnologyPopup';
import HealthcarePopup from './../PopUpComponents/HealthcarePopup';
import InternetPlatformsPopup from './../PopUpComponents/InternetPlatformsPopup';

function Modal({handleCloseModal,id}) {
  return (
    <>
      <div className='popup'>
      <div className="popup-inner">
        <i className='close-btn material-icons' onClick={()=>handleCloseModal()}>close</i>
         {id===1?<OnGridDetailsPopup/>:<></>}
         {id===2?<GridlinesDetailsPopup/>:<></>}
         {id===3?<ELockrDetailsPopup/>:<></>}
         {id===4?<OnDemandPopup/>:<></>}
         {id===5?<StaffingPopup/>:<></>}
         {id===6?<LogisticsAndTransportationPopup/>:<></>}
         {id===7?<HospitalityPopup/>:<></>}
         {id===8?<RetailPopup/>:<></>}
         {id===9?<ManufacturingPopup/>:<></>}
         {id===10?<InformationTechnologyPopup/>:<></>}
         {id===11?<HealthcarePopup/>:<></>}
         {id===12?<InternetPlatformsPopup/>:<></>}
      </div>
    </div>
    </>
  )
}

export default Modal;
