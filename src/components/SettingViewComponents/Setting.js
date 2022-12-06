import React, { useEffect } from 'react'
import styled from "styled-components";

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
const Setting = () => {
    const { i18n, t } = useTranslation(["sidebar"]);
    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, [])
    const handlerLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <SettingContainer>
            <div className='setting_container_left'>
                <div className='password_change_collection'>
                    <span>Change Password</span>
                    <div className='setting_input_collection'>
                        <div className='setting_span_div'>
                            <span>Last Password</span>
                        </div>
                        <div className='setting_input_div'>
                            <input type="password" placeholder='Enter Last Password' />
                        </div>
                    </div>
                    <div className='setting_input_collection'>
                        <div className='setting_span_div'>
                            <span>New Password</span>
                        </div>
                        <div className='setting_input_div'>
                            <input type="password" placeholder='Enter Last Password' />
                        </div>
                    </div>
                    <div className='setting_input_collection'>
                        <div className='setting_span_div'>
                            <span>Confirm Password</span>
                        </div>
                        <div className='setting_input_div'>
                            <input type="password" placeholder='Enter Last Password' />
                        </div>
                    </div>
                    <div className='password_forgot'>
                        <a href='#'>Forgot Password</a>
                    </div>
                    <div className='change_pass_btn'>
                        <button>Save</button>
                    </div>
                </div>
                <div className='notification_container'>
                    <div className='notifi_text'>
                        <span>Notification</span>
                    </div>
                    <label className="switch" for="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                    </label>
                </div>
                <div className='language_container'>
                    <span>
                        Language
                    </span>
                    <form action="#" style={{ margin: "25px" }}>
                        <p>
                            <input type="radio" id="test1" name="radio-group" value="ar"  />
                            <label for="test1">Arabic</label>
                        </p>
                        <p>
                            <input type="radio" id="test2" name="radio-group" value="en"  />
                            <label for="test2">English</label>
                        </p>
                    </form>
                </div>
            </div>
            <div className='setting_container_right'>
            </div>
        </SettingContainer>
    )
}

export default Setting
const SettingContainer = styled.section`
 flex: 1;
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: row;
    background-color: #F0F1F6;

    .setting_container_left {
    flex: 8;
    height: 465px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.password_change_collection>span {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
}

.password_change_collection {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47)
}

.setting_input_collection {
    display: flex;
    margin-top: 30px;
}

.setting_input_collection>.setting_span_div {
    flex: 3;
    padding: 2px;
    margin-top: 10px;
}

.setting_input_collection>.setting_input_div {
    flex: 5;
}

.setting_span_div>span {
    font-size: 20px;
    color: #707070;
    margin: 0px 0px 0px 70px;
}

.setting_input_div>input {
    height: 62px;
    width: 100%;
    outline: none;
    border: 0.5px solid #cccccc;
    border-radius: 5px;
}

.password_forgot>a {
    display: flex;
    justify-content: flex-end;
    margin: 15px 0px 5px 0px;
    text-decoration: none;
    color: #707070;
}

.password_forgot>a:hover {
    color: #707070;
}

.change_pass_btn {
    display: flex;
    justify-content: center;
}

.change_pass_btn>button {
    border: none;
    width: 89px;
    padding: 12px;
    background-color: #70B5D3;
    color: white;
    border-radius: 5px;
}

.notification_container {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47)
}

.notifi_text>span {
    font-size: 20px;
    color: #000000;
    font-weight: 500;
}

.switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
}

.switch input {
    display: none;
}

.slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
}

.slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
}

input:checked+.slider {
    background-color: #66bb6a;
}

input:checked+.slider:before {
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.language_container {
    margin-top: 20px;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47)
}

.language_container>span {
    font-size: 20px;
    color: #000000;
    font-weight: 500;
    margin-bottom: 20px;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

[type="radio"]:checked+label,
[type="radio"]:not(:checked)+label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}

[type="radio"]:checked+label:before,
[type="radio"]:not(:checked)+label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}

[type="radio"]:checked+label:after,
[type="radio"]:not(:checked)+label:after {
    content: '';
    width: 10px;
    height: 10px;
    background: #70B5D3;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

[type="radio"]:not(:checked)+label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}

[type="radio"]:checked+label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

/* /////////////////Right Section///////////////////////////// */
.setting_container_right {
    flex: 1;
    margin: 10px;
}
`;