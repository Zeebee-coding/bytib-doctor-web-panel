import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

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
              <a class="page-link">{"Next"}</a>
            </li>
          </ul>
      </nav>
    </Container>
  );
};

export default Pagination;
const Container = styled.section`
  
  ul{
    display: flex;
   li{
    list-style: none;
    cursor: pointer;

    a{
        background-color: white;
    color: black;
    margin-right: 10px;
    padding: 5px  10px;
        
    }
    a:focus {
    box-shadow: none;
    cursor: pointer;
}
a:hover {
    background-color: black;
    color: white;
}
}}

`;


