import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { colors } from "../../shared/colors";
import Profileimg from "./../../Assets/Icons/navBarDoc.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import RatingStar from "react-rating-stars-component";
import { Link, useMatch } from "react-router-dom";
import InfoButton from "./InfoButton";
import { device } from "../../shared/BreakPoints";
function Header() {
  let headerHistory = null;
  let login = useMatch('/')
  if (login) {
    headerHistory = true;
  }
  let [showInfo, setShowInfo] = useState(false);
  const [BellToggle, setbellToggel] = useState(false);
  const [Data, setdata] = useState([
    { name: "David Lee", message: "sent you a message" },
    { name: "Alex Jhonson", message: "sent you a message" },
    { name: "Jonathan Chen", message: "sent you a message" },
    { name: "David Lee", message: "sent you mail" },
  ]);
  let useClickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
      let maybeHandler = (event) => {
        if (event.target !== "") {
          if (!domNode.current.contains(event.target)) {
            handler();
          }
        }
      };
      document.addEventListener("mousedown", maybeHandler);
    });

    return domNode;
  };

  const domNode = useClickOutside(() => {
    setbellToggel(false);
  });
  const BellToggleHandler = () => {
    if (BellToggle === false) {
      setbellToggel(true);
    } else {
      setbellToggel(false);
    }
  };
  const options = {
    edit: true,
    color: "rgba(20,20,20,0.1)",
    activeColor: colors.blue,
    value: 4,
    count: 5,
    size: 20,
    isHalf: true,
    onChange: (newValue) => {
      console.log("Example 3: new value is: ${newValue}");
    },
  };
  return (
    <>
      <HeaderContainer props={headerHistory}>
        <InputSection>
          <SearchRoundedIcon />
          <input className="form-input" placeholder="Search" type="text" />
        </InputSection>
        <NotificationSection>
          <Dropdown ref={domNode}>
            {BellToggle === true ? (
              <DropdownContent>
                <div>
                  <h3>Notifications</h3>
                  <hr></hr>
                  {Data.map((item, index) => {
                    return (
                      <>
                        <MenuItems>
                          <Image>
                            <img src={Profileimg} />
                          </Image>
                          <Notify>
                            <p>
                              {item.name} {item.message}
                            </p>
                            <span>4 min ago</span>
                          </Notify>
                        </MenuItems>
                        <hr></hr>
                      </>
                    );
                  })}
                  <ViewAllNotifications>
                    <center>
                      <h4>
                        <a>View all notification</a>
                      </h4>
                    </center>
                  </ViewAllNotifications>
                </div>
              </DropdownContent>
            ) : null}
            <span
              ref={domNode}
              onClick={() => {
                setShowInfo(true);
              }}
            >
              <NotificationsNoneRoundedIcon onClick={BellToggleHandler} />
              <GreenDots></GreenDots>
            </span>

            <InfoButton show={showInfo} message=<DropdownContent /> />
          </Dropdown>
        </NotificationSection>
        <DoctorProfile>
          <Link to="/ShowDoctorProfile">
            <img src={Profileimg} alt="img" />
          </Link>
          <User>
            <DocData>
              <h1>Dr.Mohammed Mohammed</h1>
              <p>Heart surgen</p>
            </DocData>
            <RatingStar {...options} />
          </User>
        </DoctorProfile>
      </HeaderContainer>
    </>
  );
}

export default Header;
const HeaderContainer = styled.section`
  display: ${(props) => (props.props === true ? "none" : "flex")};
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  position: fixed;
  width:80vw;
  z-index: 1000;
  background-color: ${colors.lightgray};
  @media (min-width:${device.mobileS}) and (max-width:${device.laptop}){
  width:90vw;
  }
`;
const InputSection = styled.section`
  display: flex;
  align-items: center;
  background-color: white;
  gap: 10px;
  height: 3rem;
  width: 50%;
  border-radius: 10px;
  input {
    font-size: 22px;
    width: 50%;
    padding: 8px;
    height: 20px;
    border: none;
    outline: none;
  }
  input::placeholder {
    font-size: 1.5rem;
  }
  .css-i4bv87-MuiSvgIcon-root {
    font-size: 2.5rem;
    color: ${colors.gray};
  }
`;
const NotificationSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2%;

  .css-i4bv87-MuiSvgIcon-root {
    font-size: 1.8rem;
    animation: notification 2s infinite;
    @keyframes notification {
      5% {
        transform: rotate(10deg);
      }
      10% {
        transform: rotate(-10deg);
      }
      15% {
        transform: rotate(10deg);
      }
      20% {
        transform: rotate(0deg);
      }
    }
  }
`;
const GreenDots = styled.section`
  position: relative;
  top: -1.8em;
  right: -15px;
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
`;

const Dropdown = styled.section`
  display: block;
  span {
    cursor: pointer;
  }
`;
const DropdownContent = styled.section`
  div {
    display: none;
    position: absolute;
    background-color: white;
    width: 45%;
    padding: 1rem;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.87);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    z-index: 1;
    margin-top: 35px;
    display: block;
    right: 36%;
  }
  div::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: 100%;
    right: 82px;
    border-width: 0 9px 9px 9px;
    border-style: solid;
    border-color: white transparent;
  }
  hr {
    width: 90%;
    color: #858585;
  }
`;
const MenuItems = styled.section`
  display: flex;
  cursor: pointer;
  align-content: center;
  margin-bottom: 10px;
`;
const Image = styled.section`
  margin-right: 1rem;
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Notify = styled.section`
  margin-left: 5px;
  p {
    font-size: 13px;
    margin-bottom: 0px;
    font-weight: 600;
  }
  span {
    color: #858585;
    font-size: 11px;
  }
`;
const ViewAllNotifications = styled.section`
  text-align: center;
  h4 {
    color: #70b5d3;
    font-weight: 600;
    cursor: pointer;
    font-size: 11px;
  }
`;
const DoctorProfile = styled.section`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    border-radius: 50px;
    width: 15%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
const User = styled.section`
 
    width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
`;

const DocData = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    ${'' /* font-size: clamp(0.5em, 2vh, 4em); */}
    font-size:  1em;
    color: black;
    margin:0;
    padding:0;
    width: 100%; @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
      font-size:  0.8em;
      }
  }
  p {
    font-size: clamp(0.7em, 1vh, 4em);
    color: ${colors.gray};
    margin: -2px 0 -1px 0;
  }
`;
