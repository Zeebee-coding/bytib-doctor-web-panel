import React from 'react'
import styled from "styled-components";
import DoctorImg from '../../Assets/LoginPage/female-doctor.png'
import LoginLogo from '../../Assets/LoginPage/logo.png'
import Input from '../../BusinessLogistics/InputFields/Input'
import SingupButton from '../../BusinessLogistics/Buttons/SimpleButton/SimpleButton'
const SingupPage = () => {
    return (
        <SignUpPageContainer>
            <div className="singup_page_left">
                <div className="signup_left_header_wrapper">
                    <img className="mt-1" src={LoginLogo} alt="logo" />
                    <p>Please complete to create your account.</p>
                </div>
                <div className="signup_left_two_input">
                    <Input
                        placeholder="First Name"
                        margin="1vmax"
                        marginLeft="5vmax"
                    />
                    <Input
                        placeholder="Last name"
                        margin="1vmax"
                        marginRight="5vmax"
                    />
                </div>
                <div className="signup_input_fields">
                    <Input
                        placeholder="Username"
                        width="40vmax"
                        margin="1vmax"
                    />
                    <Input
                        placeholder="Email"
                        type="email"
                        width="40vmax"
                        margin="1vmax"
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        width="40vmax"
                        margin="1vmax"
                    />
                    <Input
                        placeholder="Confirm Password"
                        type="password"
                        width="40vmax"
                        margin="1vmax"
                    />
                </div>
                <div className="singup_check_btn">
                    <div class="form-check singup_check_box">
                        <input class=" form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="signup_label form-check-label" for="flexCheckDefault">
                            I agree with terms and conditions
                        </label>
                    </div>
                </div>
                <div className="singup_page_button">
                    <SingupButton
                        width="15vmax"
                        height="4vmax"
                        margin="1vmax"
                        text="Sing Up"
                    />
                </div>
                <div className="singup_page_a_tag">
                    <a href="/">Already have an account? Sign in.</a>
                </div>
            </div>
            <div className="singup_page_right">
                <img className="" src={DoctorImg} alt="" />
            </div>
        </SignUpPageContainer>
    )
}

export default SingupPage
const SignUpPageContainer = styled.section`
padding-top: 30px;
    overflow-x: hidden;
    display: flex;
    overflow-y: hidden;
    max-height: 100vh;

    .singup_page_left{
    flex: 6;
}
.signup_left_header_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.signup_left_header_wrapper>img{
    max-height: 35vh;
    max-width: 35vmax
}
.signup_left_header_wrapper>P{
    font-weight: 700;
    font-size: 1.2vmax;
}
.signup_left_two_input{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.signup_input_fields{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.singup_check_box{
    margin-left: 5vmax;
}
.signup_label{
    color: #b1b1b1;
    font-weight: 600;
    font-size: 1vmax;
}
.singup_page_button{
    display: flex;
    justify-content: center;
    align-items: center;
}
.singup_page_a_tag{
    display: flex;
    justify-content: center;
    align-items: center;
}
.singup_page_a_tag>a{
    text-decoration: none;
    color: #b1b1b1;
    font-weight: 600;
    font-size: 1vmax;
}




/* //////////////////////////////////////////////////////////////////// */
.singup_page_right{
    flex: 6;
}
.singup_page_right>img{
    width: 100%;
    height: 100%;
}
`;