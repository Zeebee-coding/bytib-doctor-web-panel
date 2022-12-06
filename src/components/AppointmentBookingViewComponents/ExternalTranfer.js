import React from 'react'
import styled from "styled-components";
import LaboratoryList from './ExternalComponents/LaboratoryList'
import AppointmentBooking from './ExternalComponents/AppointmentBooking'
import LaboratoryName from './ExternalComponents/LaboratoryName'
const ExternalTranfer = () => {
    return (
        <ExternalTransferContainer>
            <ul className="nav nav-pills ul__tabs__design mb-3" id="pills-tab" role="tablist">
                <li className="nav-item " role="presentation">
                    <button className="nav-link nav__button " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"  >Laboratory</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav__button" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" >X-Ray</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav__button" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" >Sonar</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active labortory_div_name" id="pills-home" role="tabpanel" >
                    <div className='labortory_left_sec'>
                        <LaboratoryList />
                    </div>
                    <div className='labortory_center_sec'>
                        <AppointmentBooking />
                    </div>
                    <div className='labortory_right_sec'>
                        <LaboratoryName />
                    </div>
                </div>
            </div>
        </ExternalTransferContainer>
    )
}

export default ExternalTranfer
const ExternalTransferContainer = styled.section`
background-color: #f1f1f6;
    padding: 5px;

    .ul__tabs__design {

    width: 300px;
    display: flex;

    li{
        list-style: none;
        button{
            padding: 20px 10px;
        }
    }

}

.nav__button {
    height: auto;
    color: black !important;
    /* background-color:#70B5D3 !important ; */
    border: 0.5px solid #D7DAE2 !important;
}

.nav__button:focus{
    background-color:#70B5D3 !important ;
}
/* ///////////////////////////////////////////////////////////////////////////////////// */
.labortory_div_name {
    display: flex !important;
    flex-wrap: wrap;
    gap: 10px;
}

.labortory_left_sec {
    flex: 2;
}

.labortory_center_sec {
    flex: 3;
}

.labortory_right_sec {
    flex: 2;
}
`;