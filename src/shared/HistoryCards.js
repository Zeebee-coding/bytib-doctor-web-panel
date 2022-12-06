import React from 'react'
import styled from "styled-components";
// import BloodGroup from '../../../Assets/Images/Patients/blood-drop.png'
import PolygonUp from '../Assets/images/Patients/polygon-up.png'
const HistoryCards = ({ image, title, value, description }) => {
    return (
        <HistoryCardsContainer>
            {
                title === "Blood Pressure" ? (
                    <div className='blood__pressure__img'>
                        <img src={image} alt="icon" />
                    </div>
                ) : (<div className='historycards_header'>
                    
                    <img src={image} alt="icon" />
                    
                </div>)
            }

            <div className=''>
                <p className='card__title'>{title}</p>
                <p className='card__value'>{value}</p>
            </div>
            <div className='bottom__Sec__cards'>
                <img src={PolygonUp} alt="icon" />
                <p className='bottom__desc'>{description}</p>
            </div>
        </HistoryCardsContainer>
    )
}

export default HistoryCards
const HistoryCardsContainer = styled.section`
 width: 200px;
    height: 230px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;

    .historycards_header {
    padding: 12px;
    margin-left: 30%;
    object-fit: cover;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d0e7f1;
    margin-bottom: 10px;
}

.card__title {
    margin-top: 10px;
    font-size: 18px;
}

.card__value {
    font-size: 22px;
    font-weight: 600;
}

.bottom__Sec__cards {
    object-fit: cover;
    display: flex;
    align-items: center;
}

.bottom__Sec__cards>img {
    height: 7px;
    width: 7px;
    object-fit: cover;
}

.bottom__Sec__cards>p {
    font-size: 12px;
    color: #707070;
    margin-top: 13px;
    margin-left: 10px;
}

.blood__pressure__img {
    display: flex;
    justify-content: center;
}
`;