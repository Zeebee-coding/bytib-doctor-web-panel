import React from 'react'
import RatingStar from "react-rating-stars-component";
import ChatIcon from '../../../Assets/images/AppointmentImages/chat.png'
import LabImg from '../../../Assets/images/AppointmentImages/lab_img.png'
import ShareIcon from '../../../Assets/images/AppointmentImages/share_icon.png'
import SendIcon from '../../../Assets/images/AppointmentImages/send_message.png'
import CalIcon from '../../../Assets/images/AppointmentImages/call.png'
import Lacation from '../../../Assets/images/AppointmentImages/location_icon.png'
import LabReviewImg from '../../../Assets/images/AppointmentImages/lab_review.png'
import { colors } from "../../../shared/colors";
import styled from "styled-components";
const LabortoryName = () => {
    const options = {
        edit: true,
        color: "rgba(20,20,20,0.1)",
        activeColor: colors.blue,
        value: 4,
        count: 5,
        size: 25,
        isHalf: true,
        onChange: (newValue) => {
          console.log("Example 3: new value is: ${newValue}");
        },
      };
    return (
        <LaboratoryNameContainer>
            <div className='labortoryname__header__sec'>
                <p>Labortory Name</p>
                <img src={ChatIcon} alt="icon" />
            </div>
            <div className='labortoryname__header__sec__img'>
                <div className='lab__img'>
                    <img className='lab__image' src={LabImg} alt="img" />
                    <img className='share__icon' src={ShareIcon} alt="img" />
                </div>
                <RatingStar {...options} />
            </div>
            <div className='labortoryname__body__sec__head'>
                <p>About Laboratory </p>
                <div className='about__lab'>
                    <img src={Lacation} alt="icon" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='about__lab'>
                    <img src={CalIcon} alt="icon" />
                    <p>23645789625</p>
                </div>
                <p className='lab__body__descrip'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
            <p className='lab_service_head'>Laboratory Services </p>
            <p className='lab_service'>Lorem ipsum dolor sit amet</p>
            <p className='lab_service'>Lorem ipsum dolor sit amet</p>
            <div className='lab__body__review__sec'>
                <div className='lab__body__review__sec__header'>
                    <p>Review</p>
                    <a href='#'>see all</a>
                </div>
                <div className='lab__body__review__sec__body'>
                    <img src={LabReviewImg} alt="icon" />
                    <div className='review__description'>
                        <p className='heading__'>Mohammed Mohammed</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn</p>
                    </div>
                </div>
                <div className='lab__body__review__sec__body'>
                    <img src={LabReviewImg} alt="icon" />
                    <div className='review__description'>
                        <p className='heading__'>Mohammed Mohammed</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magn</p>
                    </div>
                </div>
            </div>
            <div className='lab__body__bottom'>
                <input placeholder='leave comment...' type='text' />
                <img src={SendIcon} alt="icon" />
            </div>
        </LaboratoryNameContainer>
    )
}

export default LabortoryName
const LaboratoryNameContainer = styled.section`
    width: 370px;
    height: 830px;
    background-color: white;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    .labortoryname__header__sec {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid rgba(201, 201, 201, 0.47);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.labortoryname__header__sec>p {
    color: #70B5D3;
    font-size: 15px;
    font-weight: 600;
}

.labortoryname__header__sec>img {
    height: 17px;
    width: 17px;
    object-fit: cover;
    cursor: pointer;
}

.labortoryname__header__sec__img {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.lab__img>.lab__image {
    position: relative;
    height: 145px;
    width: 326px;
    object-fit: cover;
}

.lab__img>.share__icon {
    margin-top: 10px;
    position: absolute;
    right: 320px;
    cursor: pointer;
}

.labortoryname__body__sec__head>p {
    font-size: 15px;
    font-weight: 600;
    color: #000;
}

.about__lab {
    display: flex;
    gap: 20px;
}

.about__lab>img {
    height: 21px;
    width: 21px;
}

.about__lab>p {
    font-size: 12px;
}

.labortoryname__body__sec__head>.lab__body__descrip {
    font-size: 10px;
}

.lab_service_head {
    font-size: 15px;
    font-weight: 600;
}

.lab_service {
    font-size: 12px;
    margin-top: -15px;
}

.lab__body__review__sec {
    display: flex;
    flex-direction: column;
}

.lab__body__review__sec__header {
    display: flex;
    justify-content: space-between;
}

.lab__body__review__sec__header>p {
    font-size: 15px;
    color: #70B5D3;
    font-weight: 600;
}

.lab__body__review__sec__header>a {
    text-decoration: none;
    color: #70B5D3;
    font-size: 10px;
}

.lab__body__review__sec__header>a:hover {
    color: #70B5D3;
}

.lab__body__review__sec__body {
    display: flex;
    gap: 10px;
}

.lab__body__review__sec__body>img {
    height: 47px;
    width: 47px;
    object-fit: cover;
}

.lab__body__review__sec__body>.review__description {
    display: flex;
    flex-direction: column;
}

.review__description>.heading__ {
    margin-top: 1px;
    font-size: 10px;
    font-weight: 600;
    color: #70B5D3;
}

.review__description>p {
    font-size: 9px;
    margin-top: -15px;
}

.lab__body__bottom {
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    border-radius: 30px;
}

.lab__body__bottom>input {
    width: 300px;
    height: 30px;
    font-size: 12px;
    color: #BEB7B7;
    border: none;
    font-weight: 600;
    outline: none;
}

.lab__body__bottom>input::-webkit-input-placeholder {
    font-size: 12px;
    color: #BEB7B7;
    font-weight: 600;
}
`;