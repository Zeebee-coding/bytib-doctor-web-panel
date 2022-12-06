import React, { useState } from 'react'
import RatingStar from 'react-rating-stars-component'
import Pagination from '../../shared/Pagination'
import Img1 from '../../Assets/images/Reports/1.png'
import Img2 from '../../Assets/images/Reports/2.png'
import Img3 from '../../Assets/images/Reports/3.png'
import styled from "styled-components";
import ProgressBar from "../../BusinessLogistics/ProgressBar/ProgressBar";
const Rating = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [reviews, setReviews] = useState([
        {
            id: 1, name: "Umar Hayat", image: Img1, date: "at 19 Jab 2018", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release "
        },
        {
            id: 2, name: "Khizar Iftikhar", image: Img2, date: "at 19 Jab 2019", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release "
        },
        {
            id: 3, name: "Hamza Shareef", image: Img3, date: "at 19 Jab 2020", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release "
        }
    ])
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "#70B5D3",
        value: 5,
        size: window.innerWidth < 600 ? 20 : 16,
        isHalf: true,
    }
    return (
        <RatingContainer>
            <div className='rating_left_container'>
                <div className='progress_body'>
                    <div className='progrss_container'>
                        <div className='progrss_bar'>
                            <span>5 Star</span>
                            <ProgressBar width="60%" />

                            <span>60%</span>
                        </div>
                        <div className='progrss_bar'>
                            <span>4 Star</span>
                            <ProgressBar width="50%" />

                            <span>50%</span>
                        </div>
                        <div className='progrss_bar'>
                            <span>3 Star</span>
                            <ProgressBar width="40%" />

                            <span>40%</span>
                        </div>
                        <div className='progrss_bar'>
                            <span>2 Star</span>
                            <ProgressBar width="30%" />

                            <span>30%</span>
                        </div>
                        <div className='progrss_bar'>
                            <span>1 Star</span>
                            <ProgressBar width="20%" />

                            <span>20%</span>
                        </div>
                    </div>
                    <div className='progress_Card '>
                        <div className="Review_highlight_seting">
                            <p>20 Reviews</p>
                            <span>4.8</span>
                            <div><RatingStar {...options} /></div>
                        </div>
                    </div>
                </div>
                <div className='sort_container'>
                    <span>
                        1-5 of 20 Reviews
                    </span>
                    <label className="dropdown">
                        <div className="dd-button">
                            Sort By: Default
                        </div>
                        <input type="checkbox" className="dd-input" id="test" />
                        <ul className="dd-menu">
                            <li>3 Star</li>
                            <li>4 Star</li>
                            <li>5 Star</li>
                        </ul>
                    </label>
                </div>
                <div className='review_container'>
                    <div className='review_list'>
                        {
                            currentPosts.map(ls => (
                                <>
                                    <div className='main_div'>
                                        <img src={ls.image} alt="" className='review_img' />
                                        <div className='name_rating_div'>
                                            <div className='name_div'>
                                                <span className='name'>{ls.name}</span>
                                                <span className='date'>{ls.date}</span>
                                            </div>
                                            <div className='rating_star'>
                                                <RatingStar {...options} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='comments' >
                                        <p>
                                            {ls.description}
                                        </p>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={reviews.length}
                        paginate={paginate}
                    />
                </div>
            </div>
            <div className='rating_right_container'></div>
        </RatingContainer>
    )
}

export default Rating
const RatingContainer = styled.section`
display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: row;

    .rating_left_container {
    flex: 6;
    height: 465px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.progress_body {
    display: flex;
}

.progrss_container {
    flex: 7;
}

.progress_Card {
    flex: 5;
    padding: 20px;
}

.progrss_bar {
    display: flex;
    flex-direction: row;
}

.progrss_bar>span {
    margin: 1vmax 0.1vmax 0vmax 0.8vmax;
    font-size: 0.8vmax;
}

.Review_highlight_seting {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 200px;
    height: 150px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1);
}

.Review_highlight_seting>p {
    font-size: 12px;
    color: #000000;
}

.Review_highlight_seting>span {
    color: #70B5D3;
    font-weight: 700;
    font-size: 18px;
}

.sort_container {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #F6F6F6;
}

.sort_container>span {
    font-size: 14px;
    color: #666666;
    background-color: #F6F6F6;
}

/* //////////dropdown css//////////////////// */


.dropdown {
    display: inline-block;
    position: relative;
}

.dd-button {
    display: inline-block;
    border-radius: 4px;
    padding: 10px 30px 10px 20px;
    background-color: #ffffff;
    cursor: pointer;
    white-space: nowrap;
}

.dd-button:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
}

.dd-button:hover {
    background-color: white;
}


.dd-input {
    display: none;
}

.dd-menu {
    position: absolute;
    top: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0;
    margin: 2px 0 0 0;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    list-style-type: none;
}

.dd-input+.dd-menu {
    display: none;
}

.dd-input:checked+.dd-menu {
    display: block;
}

.dd-menu li {
    padding: 10px 20px;
    cursor: pointer;
    white-space: nowrap;
}

.dd-menu li:hover {
    background-color: #f6f6f6;
}

.dd-menu li a {
    display: block;
    margin: -10px -20px;
    padding: 10px 20px;
}

.dd-menu li.divider {
    padding: 0;
    border-bottom: 1px solid #cccccc;
}

.review_container {
    margin-top: 20px;
}

.review_list {
    display: flex;
    flex-direction: column;
    padding: 5px;
}

.review_img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.main_div {
    display: flex;
}

.name_div>.name {
    margin: 5px 0px 0px 30px;
    font-size: 14px;
}

.rating_star {
    margin: 5px 0px 0px 30px;
}

.name_div>.date {
    font-size: 12px;
    color: #BBBBBB;
    margin: 5px 0px 0px 100px;
}

.comments {
    margin-left: 80px;
}

.comments>p {
    font-size: 14px;
    color: #4A4A4A;
}

/* ////////////////////////////////Right Side///////////////////////////////////////// */
.rating_right_container {
    flex: 1.5;
}

`