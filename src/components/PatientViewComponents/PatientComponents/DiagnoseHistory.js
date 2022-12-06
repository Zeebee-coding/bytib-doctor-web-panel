import React, { useState } from 'react'
import downArrow from '../../../Assets/images/Patients/downarrow.png'
import BloodGroup from '../../../Assets/images/Patients/blood-drop.png'
import HeartIcon from '../../../Assets/images/Patients/cardiogram.png'
import Golucose from '../../../Assets/images/Patients/glucose.png'
import BloodPressure from '../../../Assets/images/Patients/bloodpressure.png'
import Chart from '../../../shared/Chart'
import DownloadIcon from '../../../Assets/images/Patients/downlaodIcon.png'
import Paper from '../../../Assets/images/Patients/Papericon.png'
import LinkIcon from '../../../Assets/images/Patients/linkicon.png'
import HistoryCards from '../../../shared/HistoryCards'
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
const DiagnoseHistory = () => {
    const { t } = useTranslation(["sidebar"])
    const [documentsArray, setDocumentsArray] = useState([
        { id: "1", name: "Blood States.Pdf", size: "1 MB" },
        { id: "2", name: "Heart Rate.Pdf", size: "1 MB" },
        { id: "3", name: "Antigen Test.Pdf", size: "1 MB" },
        { id: "4", name: "Glucouse Report.Pdf", size: "1 MB" },
    ])
    return (
        <DiagnoseHistoryContainer>
            <div className='diagnosehistory__header__sec'>
                <p>{t("Diagnosis_History")}</p>
                <div className=''>
                    <a href='#'>May 10 , 2022</a>
                    <img src={downArrow} alt="icon" />
                </div>
            </div>
            <div className='card__histroy__sec'>
                <HistoryCards image={BloodGroup} title={t("Blood_Status")} value="100/70" description="Higher than the avarege" />
                <HistoryCards image={HeartIcon} title={t("Heart_Rate")} value="78bmp" description="Higher than the avarege" />
                <HistoryCards image={Golucose} title={t("Glucose_Level")} value="78-92" description="Higher than the avarege" />
            </div>
            <div className='chart__sec__body'>
                <div className='chart__div__left'>
                    <Chart title="Hemoglobeen" aspect={2.8 / 1} />
                </div>
                <div className='chart__div__right'>
                    <HistoryCards image={BloodPressure} title={t("Blood_Pressure")} value="100mg/dI" description="Higher than the avarege" />
                </div>
            </div>
            <div className='diagnosehistory__bottom__sec'>
                <div className='illness__digonsis'>
                    <div className='illness__digonsis__header'>
                        <p>{t("IIIness_digonsis")}</p>
                    </div>
                    <div className='illness__digonsis__body'>
                        <div className=''>
                            <p className='title_info'>{t("Code")}</p>
                            <p className='actual__info'>D50.3</p>
                        </div>
                        <div className=''>
                            <p className='title_info'>{t("Name")}</p>
                            <p className='actual__info'>Ghadeer Radwan</p>
                        </div>
                    </div>
                    <div className='illness__digonsis__body'>
                        <div className=''>
                            <p className='title_info'>{t("Diagnose")}</p>
                            <p className='actual__info'>20-2-2020</p>
                        </div>
                        <div className=''>
                            <p className='title_info'>{t("Treatment")}</p>
                            <p className='actual__info'>Insuline</p>
                        </div>
                    </div>
                    <p className='title_info'>{t("Medicine")}</p>
                    <div className='illness__digonsis__medicine__sec'>
                        <div className='documents__body__left__container'>
                            <img src={LinkIcon} alt="icon" />
                        </div>
                        <p className='medicine__name'>Insuline</p>
                    </div>
                    <div className='illness__digonsis__medicine__sec'>
                        <div className='documents__body__left__container'>
                            <img src={LinkIcon} alt="icon" />
                        </div>
                        <p className='medicine__name'>Pantoloc</p>
                    </div>
                </div>
                <div className='decuments'>
                    <div className='documents__header'>
                        <p>{t("Documents")}</p>
                    </div>
                    {
                        documentsArray.map((ls, index) => (
                            <div className='documents__body'>
                                <div className='documents__body__left'>
                                    <div className='documents__body__left__container'>
                                        <img src={Paper} alt="icon" />
                                    </div>
                                    <div className=''>
                                        <p className='p__tag__title'>{ls.name}</p>
                                        <p className='p__tag__size'>{ls.size}</p>
                                    </div>
                                </div>
                                <div className='documents__body__right'>
                                    <img src={DownloadIcon} alt="icon" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </DiagnoseHistoryContainer>
    )
}

export default DiagnoseHistory
const DiagnoseHistoryContainer = styled.section`
width: 100%;
    min-height: auto;
    background-color: #f0f1f4;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;


    .diagnosehistory__header__sec {
    display: flex;
    justify-content: space-between;
}

.diagnosehistory__header__sec>p {
    font-size: 27px;
    color: #000;
}

.diagnosehistory__header__sec>div>a {
    font-size: 17px;
    color: #707070;
    text-decoration: none;
    margin-right: 10px;
}

.card__histroy__sec {
    display: flex;
    gap: 50px;
}

.chart__sec__body {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.chart__div__left {
    flex: 2;
}

.chart__div__right {
    flex: 1;
}

.diagnosehistory__bottom__sec {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.illness__digonsis {
    flex: 1;
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
}

.decuments {
    flex: 1;
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.documents__header {
    font-size: 18px;
    font-weight: 600;
    color: #000;
}

.documents__body {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.documents__body__left {
    display: flex;
    gap: 10px;
}

.documents__body__left__container {
    height: 36px;
    width: 36px;
    background-color: #70B5D3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.p__tag__title {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: -2px;
}

.p__tag__size {
    font-size: 13px;
    color: #707070;
}

.documents__body__right>img {
    cursor: pointer;
}

/* ///////////illness__digonsis__header////////////// */
.illness__digonsis {
    display: flex;
    flex-direction: column;
}

.illness__digonsis__header>p {
    font-size: 18;
    font-weight: 600;
    color: #000;
}

.illness__digonsis__body {
    display: flex;
    justify-content: space-between;
}

.illness__digonsis__medicine__sec {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 30px;
}

.medicine__name {
    margin-top: 5px;
    font-size: 15px;
    color: #000;
    font-weight: 600;
}
`;