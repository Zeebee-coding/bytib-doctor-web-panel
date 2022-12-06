import React, { useState , useEffect } from 'react'
import SearchIcon from '../../../../Assets/images/Message/search.png'
import { Avatar } from "@mui/material";
import {onSnapshot,collection,query} from "firebase/firestore"
import db from '../../../../db'
import styled from 'styled-components';

const UserList = () => {
    const [userlistArray, setUserlistArray] = useState([])
    useEffect (()=>{
        async function fetchDataAPI(){
         const q = query(collection(db,"MessageUser"));
         const unsub = onSnapshot(q,(querySnapshot)=>{
            setUserlistArray(querySnapshot.docs.map((d)=>d.data()));
         })
        }
        fetchDataAPI();
         },[]);
    return (
        <UserListContainer>
            <div className='userlist__header'>
                <img src={SearchIcon} alt="icon" />
                <input placeholder='Search messsage or Name' type="text" />
            </div>
            {
                userlistArray.map((ls, index) => (
                    <div className='userlist__body'>
                        <div className='userlist__body__left'>
                        <Avatar/>
                            <div className='left__message__div'>
                                <p className='user__name'>{ls.Name}</p>
                                <p className='user__message'>{ls.Message}</p>
                            </div>
                        </div>
                        <div className='userlist__body__right'>
                            <p>{ls.createdDate}</p>
                        </div>
                    </div>
                ))
            }
        </UserListContainer>
    )
}

export default UserList
const UserListContainer = styled.section`
 width: 100%;
    height: 635px;
    background-color: white;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;

    .userlist__header {
    display: flex;
    align-items: center;
    gap: 10px;
}

.userlist__header>img {
    height: 18px;
    width: 18px;
    object-fit: cover;
}

.userlist__header>input {
    width: 100%;
    padding: 15px;
    border: none;
    outline: none;
}

.userlist__body {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.userlist__body__left {
    display: flex;
    align-items: center;
    gap: 10px;
}

.userlist__body__left>img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 50%;
}


.user__name {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 600;
}

.user__message {
    font-size: 10px;
    margin-top: -8px;
}

.userlist__body__right>p {
    font-size: 10px;
}
`;