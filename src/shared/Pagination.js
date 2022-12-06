import React from "react";
import styled from "styled-components";
import { colors } from "../shared/colors";
import { useTranslation } from "react-i18next";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const { t } = useTranslation(["sidebar"])

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <nav aria-label="Page navigation example">
          <ul className="pagination pagination_table">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a onClick={() => paginate(number)} className="page-link">
                  {number}
                </a>
              </li>
            ))}
            <li class="page-item">
              <a class="page-link">{t("Next")}</a>
            </li>
          </ul>
      </nav>
    </Container>
  );
};

export default Pagination;
const Container = styled.section`
.pagination_table{
  display: flex;
  flex: flex-end;
  margin-top: 30px;
}
  .pagination_table>li{
    list-style: none;
  }
  .pagination_table>li>a {
    background-color: white;
    color: black;
    padding: 10px 15px;
    border: 1px solid ${colors.gray};
}

.pagination_table>li>a:focus {
    box-shadow: 2px black;
}

.pagination_table>li>a:hover {
    background-color: black;
    color: white;
    box-shadow: 2px  10px  10px #103641;
    margin-right: 5px;
    cursor: pointer;
}
`;


