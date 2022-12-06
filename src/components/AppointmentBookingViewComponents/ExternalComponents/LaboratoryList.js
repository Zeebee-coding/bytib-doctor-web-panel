import React, { useState,useEffect,useRef } from 'react'
import SearchIcon from '../../../Assets/images/AppointmentImages/search_icon.png'
import FilterIcon from '../../../Assets/images/AppointmentImages/filter_icon.png'
import LocationIcon from '../../../Assets/images/AppointmentImages/location.png'
import StartIcon from '../../../Assets/images/AppointmentImages/Star.png'
import ClockIcon from '../../../Assets/images/AppointmentImages/clock.png'
import AvatarImg from '../../../Assets/images/AppointmentImages/Avatar.png'
import styled from "styled-components";
const LaboratoryList = () => {
    const [labArray, setLabArray] = useState([
        {
            id: "1", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "2", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "3", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "4", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "5", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "6", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "7", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "8", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "9", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
        {
            id: "10", image: AvatarImg, lab_name: "laboratory name", time: "Open now", lab_dec: "Lorem ipsum dolor sit amet Consectetur…", lab_rating: "4.9", lab_loca: "5.3Km"
        },
    ])
    const [FilterToggle, setFilterToggle] = useState(false);
    const FilterToggleHandler = () => {
      if (FilterToggle === false) {
        setFilterToggle(true);
      } else {
        setFilterToggle(false);
      }
    };
  // ------------------------Function to Handle when click outside drop down should be close--------------------
    let useClickOutside = (handler) => {
      let domNode = useRef();

    
      return domNode;
    };
  
    let domNode = useClickOutside(() => {
      setFilterToggle(false);
    });
    return (
        <LaboratoryListContainer>
            <div className='labortorylist__container'>
                <div className='header__sec'>
                    <div className='header__left__sec'>
                        <img src={SearchIcon} alt="icon" />
                        <input placeholder='search' type="text" />
                    </div>
                    <img class="dropdown" onClick={FilterToggleHandler} src={FilterIcon} alt="icon" />
                          {/* ------------Toggling for Filter icon------------ */}
      {FilterToggle === true ? (
        <div   class="dropdown-content-filter">
          <label class="container">
            <span className="Title">Nearby Laboratory</span>
            <input type="radio" name="radio" value='Nearby Laboratory' />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            <span className="Title">Top Rated Laboratory</span>
            <input type="radio" name="radio" value='Top Rated Laboratory' />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            <span className="Title">Open Laboratory</span>
            <input type="radio" name="radio" value='Open Laboratory' />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            <span className="Title">Most Searched Laboratory</span>
            <input type="radio" name="radio" value='Most Searched Laboratory' />
            <span class="checkmark"></span>
          </label>
        </div>
      ) : null}
                </div>
            </div>
            <div className='body__scroll_purpose'>
                {
                    labArray.map((ls, index) => (
                        <>
                            <div className='body__sec'>
                                <div className='body__left__sec'>
                                    <img src={ls.image} alt="img" />
                                    <div className='body__left_sec__container'>
                                        <p className='body__ptag'>{ls.lab_name}</p>
                                        <p className='body__ptag__two'>{ls.lab_dec}</p>
                                    </div>
                                </div>
                                <div className='body__right__sec'>
                                    <div className='body__right__top__sec'>
                                        <img src={ClockIcon} alt="icon" />
                                        <p>{ls.time}</p>
                                    </div>
                                    <div className='body__right__bottom__sec'>
                                        <div className='lab__star'>
                                            <img src={StartIcon} alt="icon" />
                                            <p>{ls.lab_rating}</p>
                                        </div>
                                        <div className='lab__loca'>
                                            <img src={LocationIcon} alt="icon" />
                                            <p>{ls.lab_loca}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </LaboratoryListContainer>
    )
}

export default LaboratoryList
const LaboratoryListContainer = styled.section`
width: 412px;
    height: auto;
    background-color: white;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /* overflow-y: scroll; */


    .header__sec {
    display: flex;
    justify-content: space-between;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    border-radius: 10px;
}

.header__sec>img {
    cursor: pointer;
}

.header__sec>.header__left__sec>img {
    cursor: pointer;
}

.header__sec>.header__left__sec>input {
    border: none;
    outline: none;
    width: 300px;
    margin-left: 10px;
}

.body__sec {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}

.body__scroll_purpose {
    overflow-y: scroll;
    padding: 0px;
}

.body__scroll_purpose::-webkit-scrollbar {
    width: 10px;
}

/* Track */
.body__scroll_purpose::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(201, 201, 201, 0.47);
    border-radius: 20px;
}

/* Handle */
.body__scroll_purpose::-webkit-scrollbar-thumb {
    background: rgba(201, 201, 201, 0.47);
    border-radius: 20px;
}

/* Handle on hover */
.body__scroll_purpose::-webkit-scrollbar-thumb:hover {
    background: rgba(201, 201, 201, 0.47);
}

.body__left__sec {
    display: flex;
}

.body__left__sec>img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
}

.body__left_sec__container {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
}

.body__left_sec__container>.body__ptag {
    font-size: 12px;
    color: #4D4F5C;
}

.body__left_sec__container>.body__ptag__two {
    font-size: 10px;
    color: #4D4F5C;
    margin-top: -10px;
}

.body__right__sec {
    display: flex;
    flex-direction: column;
}

.body__right__top__sec {
    display: flex;
    gap: 10px;

}

.body__right__top__sec>img {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
}

.body__right__top__sec>p {
    font-size: 10px;
    color: #4D4F5C;
}

.body__right__bottom__sec {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.body__right__bottom__sec>.lab__star {
    display: flex;
    gap: 5px;
}

.body__right__bottom__sec>.lab__star>img {
    height: 10px;
    width: 10px;
    cursor: pointer;
    object-fit: cover;
}

.body__right__bottom__sec>.lab__star>p {
    font-size: 8px;
    color: #4D4F5C;
}

.body__right__bottom__sec>.lab__loca {
    display: flex;
    gap: 5px;
}

.body__right__bottom__sec>.lab__loca>img {
    height: 10px;
    width: 10px;
    cursor: pointer;
    object-fit: cover;
}

.body__right__bottom__sec>.lab__loca>p {
    font-size: 8px;
    color: #4D4F5C;
    margin-right: 10px;
}
/* ////////////////////////DropDown////////////////////////////// */
.main-filter{
    background-color: #f8f9fa;
    height: 400px;
    width: 30%;
    margin-left: 300px;
    margin-top: 20px;
  }
  .dropdown {
    /* position: relative; */
    /* display: inline-block; */
    float: right;
     margin-right: 20px;
      cursor: pointer;
  }
  
  
    .dropdown-content-filter {
      display: none;
      position: absolute;
      background-color: #eee;
      min-width: 360px;
      padding-left: 20px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      margin-top: 35px;
      display: block;
      padding-top: 40px;
      padding-bottom: 60px;
      /* Set the position of dropdown By here as you wish */
      right: 680px;
    }
    .radio-btn-filter{
        border:null;
        outline: null;
        background-color: white;
    }
  
  
  
    
    /* The container */
  .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 16px;
      cursor: pointer;
      font-size: 15px;
      margin-left: 20px;
     
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    /* Hide the browser's default radio button */
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      border: 1px solid black;
    }
    .Title{
        margin-left: 20px;
    }
    /* Create a custom radio button */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 17px;
      width: 17px;
      background-color: #eee;
      border-radius: 50%;
      border:1px solid #70B5D3;
      outline: none;
    }  
    /* When the radio button is checked, add a blue background */
    .container input:checked ~ .checkmark {
      background-color: #eee;
    }
    
    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    
    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }
    
    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
         top: 5px;
        left: 5px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #70B5D3;
    }
`;