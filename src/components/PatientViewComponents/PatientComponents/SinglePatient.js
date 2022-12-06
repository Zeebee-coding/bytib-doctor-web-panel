import React from 'react'
import styled from "styled-components";
import PaitientImg from '../../../Assets/images/Patients/singlePatientimg.png'
import gender from '../../../Assets/images/Patients/sexicon.png'
import weightIcon from '../../../Assets/images/Patients/scaleicon.png'
import height from '../../../Assets/images/Patients/height.png'
import personicon from '../../../Assets/images/Patients/personicon.png'
import RightIcon from '../../../Assets/images/Patients/rightIcon.png'
import CalenderIcon from '../../../Assets/images/Patients/calender.png'
import ScannerIcon from '../../../Assets/images/Patients/scan.png'
import VideoIcon from '../../../Assets/images/Patients/videoicon.png'
import ChatIcon from '../../../Assets/images/Patients/chat.png'
import { useTranslation } from "react-i18next";
const SinglePatient = () => {
    const { t } = useTranslation(["sidebar"])
    return (
        <SinglePatientContainer>
            <div className='singlepatient__header__container'>
                <img src={PaitientImg} alt="img" />
                <p>Ghadeer Radwan</p>
            </div>
            <div className='singlepatient__info__div'>
                <div className='singlepatient__info__sec'>
                    <div className='img__back'>
                        <img className='gender__icon' src={gender} alt="icon" />
                    </div>
                    <div className='patientInfo'>
                        <p className='title_info'>{t("Gender")}</p>
                        <p className='actual__info'>Female</p>
                    </div>
                </div>
                <div className='singlepatient__info__sec'>
                    <div className='singlepatient__info__sec'>
                        <div className='img__back'>
                            <img className='gender__icon' src={personicon} alt="icon" />
                        </div>
                        <div className='patientInfo'>
                            <p className='title_info'>{t("Age")}</p>
                            <p className='actual__info'>18 Years</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='singlepatient__info__div'>
                <div className='singlepatient__info__sec'>
                    <div className='img__back'>
                        <img className='height__icon' src={height} alt="icon" />
                    </div>
                    <div className='patientInfo'>
                        <p className='title_info'>{t("Height")}</p>
                        <p className='actual__info'>156CM</p>
                    </div>
                </div>
                <div className='singlepatient__info__sec'>
                    <div className='img__back'>
                        <img className='weight__icon' src={weightIcon} alt="icon" />
                    </div>
                    <div className='patientInfo'>
                        <p className='title_info'>{t("Weight")}</p>
                        <p className='actual__info'>55Kg</p>
                    </div>
                </div>
            </div>
            <div className='showallinfo__sec'>
                <button>{t("Show_All_Infomation")}</button>
            </div>
            <div className='appoint__history__sec'>
                <p>{t("Appointment_History")}</p>
                <a href='#'>{t("see_all")}</a>
            </div>
            <div className='for__more__details'>
                <div className='singlepatient__info__sec'>
                    <div className='img__back'>
                        <img className='calender__icon' src={CalenderIcon} alt="icon" />
                    </div>
                    <div className=''>
                        <p className='bottom__p__tag1'>{t("Medical_Checkup")}</p>
                        <p className='bottom__p__tag2'>May 10 - 9:20 am</p>
                    </div>
                </div>
                <div className=''>
                    <img className='bottom__icon' src={RightIcon} alt="icon" />
                </div>
            </div>
            <div className='for__more__details'>
                <div className='singlepatient__info__sec'>
                    <div className='img__back'>
                        <img className='calender__icon' src={ScannerIcon} alt="icon" />
                    </div>
                    <div className=''>
                        <p className='bottom__p__tag1'>{t("Screaning")}</p>
                        <p className='bottom__p__tag2'>May 10 - 9:20 am</p>
                    </div>
                </div>
                <div className=''>
                    <img className='bottom__icon' src={RightIcon} alt="icon" />
                </div>
            </div>
            <div className='for__more__details'>
                <div className='singlepatient__info__sec'>
                    <div className='img__back'>
                        <img className='calender__icon' src={ChatIcon} alt="icon" />
                    </div>
                    <div className=''>
                        <p className='bottom__p__tag1'>{t("Chat_Consultation")}</p>
                        <p className='bottom__p__tag2'>May 10 - 9:20 am</p>
                    </div>
                </div>
                <div className=''>
                    <img className='bottom__icon' src={RightIcon} alt="icon" />
                </div>
            </div>
            <div className='for__more__details'>
                <div className='singlepatient__info__sec'>
                    <div className='img__back'>
                        <img className='calender__icon' src={VideoIcon} alt="icon" />
                    </div>
                    <div className=''>
                        <p className='bottom__p__tag1'>{t("Vedio_Call_Consultation")}</p>
                        <p className='bottom__p__tag2'>May 10 - 9:20 am</p>
                    </div>
                </div>
                <div className=''>
                    <img className='bottom__icon' src={RightIcon} alt="icon" />
                </div>
            </div>
        </SinglePatientContainer>
    )
}

export default SinglePatient

const SinglePatientContainer = styled.section`
 width: 364px;
    height: auto;
    background-color: white;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;

    
.singlepatient__header__container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.singlepatient__header__container>img {
    width: 207px;
    height: 207px;
    border-radius: 50%;
    object-fit: cover;
}

.singlepatient__header__container>p {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 600;
}

.singlepatient__info__div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.patientInfo{
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
}

.singlepatient__info__sec {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.img__back {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background-color: #70B5D3;
}

.img__back>.gender__icon {
    margin-left: 8px;
    margin-top: 8px;
}

.img__back>.height__icon {
    margin-left: 14px;
    margin-top: 10px;
}

.img__back>.weight__icon {
    margin-left: 10px;
    margin-top: 10px;
}

.title_info {
    font-size: 13px;
    color: #AEAEAE;
    margin-bottom: -6px;
}

.actual__info {
    font-size: 15px;
    color: #000;
}

.weight___div {
    margin-right: 10px;
}

.showallinfo__sec {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.showallinfo__sec>button {
    padding: 15px;
    background-color: #AEAEAE;
    border: none;
    outline: none;
    border-radius: 30px;
}

.appoint__history__sec {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.appoint__history__sec>p {
    font-size: 19px;
    color: #000;
    font-weight: 600;
}

.appoint__history__sec>a {
    color: #AEAEAE;
    font-size: 13px;
    text-decoration: none;
}

.appoint__history__sec>a:hover {
    color: #AEAEAE;
}

.for__more__details {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.bottom__p__tag1 {
    font-size: 15px;
    color: #000;
    margin-bottom: -6px;
}

.bottom__p__tag2 {
    font-size: 13px;
    color: #AEAEAE;
}

.img__back>.calender__icon {
    margin-left: 6px;
    margin-top: 5px;
}

.bottom__icon {
    cursor: pointer;
}
`;