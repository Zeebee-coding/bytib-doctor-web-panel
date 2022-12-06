import React, { useState } from "react";
import DummyImg1 from "../../Assets/images/AppointmentImages/1.png";
import DummyImg2 from "../../Assets/images/AppointmentImages/2.png";
import DummyImg3 from "../../Assets/images/AppointmentImages/3.png";
import DummyImg4 from "../../Assets/images/AppointmentImages/4.png";
import DummyImg5 from "../../Assets/images/AppointmentImages/5.png";
import DummyImg6 from "../../Assets/images/AppointmentImages/6.png";
import OkIcon from "../../Assets/images/AppointmentImages/ok.png";
import CloseIcon from "../../Assets/images/AppointmentImages/close.png";
import Pagination from "../../shared/Pagination";
import AppointmentTable from "./AppointmentTable";
import styled from "styled-components";

const Appointment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [tableObject, setTableObject] = useState([
    {
      id: 1,
      image: DummyImg1,
      name: "Beanie",
      Id: "1234",
      date: "11/03/2020",
      phone: "021549778",
      email: "ghsfrhaj@gmail.com",
      OkImage: OkIcon,
      closeImage: CloseIcon,
    },
    {
      id: 2,
      image: DummyImg2,
      name: "Beanie",
      Id: "2563",
      date: "11/03/2020",
      phone: "021549778",
      email: "ghsfrhaj@gmail.com",
      OkImage: OkIcon,
      closeImage: CloseIcon,
    },
    {
      id: 3,
      image: DummyImg3,
      name: "Beanie",
      Id: "7896",
      date: "11/03/2020",
      phone: "021549778",
      email: "ghsfrhaj@gmail.com",
      OkImage: OkIcon,
      closeImage: CloseIcon,
    },
    {
      id: 4,
      image: DummyImg4,
      name: "Beanie",
      Id: "4178",
      date: "11/03/2020",
      phone: "021549778",
      email: "ghsfrhaj@gmail.com",
      OkImage: OkIcon,
      closeImage: CloseIcon,
    },
    {
      id: 5,
      image: DummyImg5,
      name: "Beanie",
      Id: "4348",
      date: "11/03/2020",
      phone: "021549778",
      email: "ghsfrhaj@gmail.com",
      OkImage: OkIcon,
      closeImage: CloseIcon,
    },
    {
      id: 6,
      image: DummyImg6,
      name: "Beanie",
      Id: "4568",
      date: "11/03/2020",
      phone: "021549778",
      email: "ghsfrhaj@gmail.com",
      OkImage: OkIcon,
      closeImage: CloseIcon,
    },
  ]);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableObject.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <AppointmentContainer>
      <AppointmentTable posts={currentPosts} />
      <hr></hr>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={tableObject.length}
        paginate={paginate}
      />
    </AppointmentContainer>
  );
};

export default Appointment;
const AppointmentContainer = styled.section`
width: 100%;
hr{
    width:90%;
    color: lightgray;
}
`;