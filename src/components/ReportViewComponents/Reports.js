import React, { useState } from "react";
import Pagination from "../../shared/Pagination";
import Img1 from "../../Assets/images/Reports/1.png";
import Img2 from "../../Assets/images/Reports/2.png";
import Img3 from "../../Assets/images/Reports/3.png";
import Img4 from "../../Assets/images/Reports/4.png";
import Img5 from "../../Assets/images/Reports/5.png";
import Img6 from "../../Assets/images/Reports/6.png";
import Paper from "../../Assets/images/Reports/Paper.png";
import HorizontalDots from "../../Assets/images/Reports/dots-horizontal.png";
import styled from "styled-components";

import { useTranslation } from "react-i18next";

const Reports = () => {
  const { t } = useTranslation(["sidebar"])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [tableObject, setTableObject] = useState([
    {
      id: 1,
      image: Img1,
      name: "Beanie",
      age: "19",
      date: "11/03/2020",
      Id: "1234",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 2,
      image: Img2,
      name: "Beanie",
      age: "20",
      date: "11/03/2020",
      Id: "2563",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 3,
      image: Img3,
      name: "Beanie",
      age: "21",
      date: "11/03/2020",
      Id: "7896",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 4,
      image: Img4,
      name: "Beanie",
      age: "22",
      date: "11/03/2020",
      Id: "4178",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 5,
      image: Img5,
      name: "Beanie",
      age: "21",
      date: "11/03/2020",
      Id: "7896",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 6,
      image: Img6,
      name: "Beanie",
      age: "22",
      date: "11/03/2020",
      Id: "4178",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 7,
      image: Img1,
      name: "Beanie",
      age: "19",
      date: "11/03/2020",
      Id: "1234",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 8,
      image: Img2,
      name: "Beanie",
      age: "20",
      date: "11/03/2020",
      Id: "2563",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 9,
      image: Img3,
      name: "Beanie",
      age: "21",
      date: "11/03/2020",
      Id: "7896",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 10,
      image: Img4,
      name: "Beanie",
      age: "22",
      date: "11/03/2020",
      Id: "4178",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 11,
      image: Img5,
      name: "Beanie",
      age: "21",
      date: "11/03/2020",
      Id: "7896",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
    {
      id: 12,
      image: Img6,
      name: "Beanie",
      age: "22",
      date: "11/03/2020",
      Id: "4178",
      report: Paper,
      detail: "Details",
      editIcon: HorizontalDots,
    },
  ]);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableObject.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <ReportsContainer>
      <div className="report_title">{"BOOKINGS TODAY"}</div>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead className="table_heading_row">
            <tr className="">
              <th scope="col">{t("patient")}</th>
              <th scope="col">{t("Age")}</th>
              <th scope="col">{t("Date")}</th>
              <th scope="col">{t("Id")}</th>
              <th scope="col">{t("Report")}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="report_table_body">
            {currentPosts.map((ls) => (
              <tr className="">
                <td className="first_column">
                  <img src={ls.image} alt="" />
                  {ls.name}
                </td>
                <td className="">
                  <p className="second_column common_design">{ls.age}</p>
                </td>
                <td className="">
                  <p className="third_column common_design">{ls.date}</p>
                </td>
                <td className="">
                  <p className="forth_column common_design">{ls.id}</p>
                </td>
                <td className="">
                  <img className="fifth_column" src={ls.report} alt="" />
                </td>
                <td className="sixth_column">
                  <span>{ls.detail}</span>
                  <img className="sixth_column_img" src={ls.editIcon} alt="" />
                </td>
              </tr>
            ))}
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={tableObject.length}
              paginate={paginate}
            />
          </tbody>
        </table>
      </div>
    </ReportsContainer>
  );
};

export default Reports;

const ReportsContainer = styled.section`
  width: 100%;
  padding: 15px;

  table {
    width: 100%;
    border-spacing: 0;
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    thead {
      tr {
        width: 100%;
      }
      tr th {
        padding: 30px 0px 20px 15px;
        font-size: 14px;
        background-color: #103641;
        color: white;
      }
    }
  }

  .report_title {
    font-size: 28px;
    color: #707070;
    font-weight: 700;
    text-align: left;
  }

  .table_heading_row > tr > th {
    padding: 20px 0px 20px 15px;
    background-color: #103641;
    color: white;
  }
  .first_column {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .first_column img{
    height: 50px;
    width: 50px;
    margin: 15px 15px 10px 12px;
    border-radius: 50%;
    object-fit: cover;
  }

  .common_design {
    margin: 25px 15px 10px 12px;
  }

  .fifth_column {
    margin: 25px 15px 10px 12px;
    cursor: pointer;
  }

  .sixth_column {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sixth_column_img {
    margin: 30px 15px 30px 20px;
    cursor: pointer;
  }
`;
