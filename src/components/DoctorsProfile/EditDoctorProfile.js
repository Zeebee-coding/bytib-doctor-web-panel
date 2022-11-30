import React, { useState } from 'react'
import './editProfile.css'
import DummyImage from '../../../Assets/Images/DoctorProfileImg/NoPath.png'
import CameraImg from '../../../Assets/Images/DoctorProfileImg/camera.png'
import Fileicon from '../../../Assets/Icons/fileLogo.png'
const EditDoctorProfile = () => {
    const [file, setFile] = useState("")
    const [doctorImg, setDoctorImg] = useState("")
    return (
        <div className='edit_profle_container'>
            <div className='edit_top_container'>
                <div className='edit_top_sec'>
                    <img className='doc_dummy_img' src={doctorImg ? URL.createObjectURL(doctorImg) : DummyImage} alt="img" />
                    <label className='doc_cam_img' for="file-input">
                        <img className="" src={CameraImg} id="" />
                    </label>
                    <input id="file-input" onChange={(e) => setDoctorImg(e.target.files[0])} type="file" style={{ display: "none" }} />
                </div>
                <div className='input_filed_container'>
                    <div className='input_left_container'>
                        <div className='span_text'>
                            <span>
                                Name
                            </span>
                        </div>
                        <div className='text_input_field'>
                            <input className='input_field_text' placeholder='...' type="text" value={"Muhammad Mubeen"} />
                        </div>
                    </div>
                    <div className='input_right_container'></div>
                </div>
                <div className='input_filed_container'>
                    <div className='input_left_container'>
                        <div className='span_text'>
                            <span>
                                Section
                            </span>
                        </div>
                        <div className='text_input_field'>
                            <input className='small_input_field' placeholder='...' type="text" value={"Heart Gurg"} />
                        </div>
                    </div>
                    <div className='input_right_container'></div>
                </div>
                <div className='input_filed_container'>
                    <div className='input_left_container'>
                        <div className='span_text'>
                            <span>
                                Gender
                            </span>
                        </div>
                        <div className='text_input_field'>
                            <input className='input_field_text' placeholder='...' type="text" value={"Male"} />
                        </div>
                    </div>
                    <div className='input_right_container'></div>
                </div>
                <div className='input_filed_container'>
                    <div className='input_left_container'>
                        <div className='span_text'>
                            <span>
                                Email
                            </span>
                        </div>
                        <div className='text_input_field'>
                            <input className='input_field_text' placeholder='...' type="text" value={"mubeen@gmail.com"} />
                        </div>
                    </div>
                    <div className='input_right_container'></div>
                </div>
                <div className='input_filed_container'>
                    <div className='input_left_container'>
                        <div className='span_text'>
                            <span>
                                Phone Number
                            </span>
                        </div>
                        <div className='text_input_field'>
                            <input className='small_input_field' placeholder='+92 343 2275634' type="number" value={""} />
                        </div>
                    </div>
                    <div className='input_right_container'></div>
                </div>
                <div className='input_filed_container'>
                    <div className='input_left_container'>
                        <div className='span_text'>
                            <span>
                                About me
                            </span>
                        </div>
                        <div className='text_input_field'>
                            <textarea className='input_field_text' placeholder='...' type="text" value={"Muhammad Mubeen"} />
                        </div>
                    </div>
                    <div className='input_right_container'></div>
                </div>
                <div className='input_filed_container'>
                    <div className='input_left_container'>
                        <div className='span_text'>
                            <span>
                                CV
                            </span>
                        </div>
                        <div className='text_input_field'>
                            <div className='file_input'>
                                <label htmlFor='file'>
                                    douments <img src={Fileicon} alt="" className='icon' />
                                </label>
                                <input
                                    type='file' id='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }} />
                            </div>
                        </div>
                    </div>
                    <div className='input_right_container'></div>
                </div>
                <div className='bottom'>
                    <div className='bottom_btn_left'>
                        <button className='save_button'>Save</button>
                        <button className='cancel_button'>Cancel</button>
                    </div>
                    <div className='bottom_btn_right'></div>
                </div>
            </div>
        </div>
    )
}

export default EditDoctorProfile