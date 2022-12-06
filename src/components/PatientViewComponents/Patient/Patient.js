import React from 'react'
import styled from "styled-components";
import PatientList from '../../../components/PatientViewComponents/PatientComponents/PatientList'
import SinglePatient from '../../../components/PatientViewComponents/PatientComponents/SinglePatient'
import DiagnoseHistory from '../../../components/PatientViewComponents/PatientComponents/DiagnoseHistory'
const Patients = () => {
    return (
        <PatientContainer>
            <div className='patients__left__container'>
                <PatientList />
            </div>
            <div className='patients__center__container'>
                <DiagnoseHistory />
            </div>
            <div className='patients__right__container'>
                <SinglePatient />
            </div>
        </PatientContainer>
    )
}

export default Patients
const PatientContainer = styled.section`
width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 5px;
    flex-wrap: wrap;
    overflow-x: hidden;

    /* //////////left side////////////////// */
.patients__left__container {
    flex: 1.3;
}

/* ////////////Center////////////////////// */
.patients__center__container {
    flex: 2;
}

/* //////////////Right///////////////////////// */
.patients__right__container {
    flex: 1.2;
}

`;