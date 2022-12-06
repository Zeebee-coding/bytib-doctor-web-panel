import React from 'react'
import DashBoard from '../../components/DashBoardComponents/DashBoard'
import styled from 'styled-components'


const DashBoardView = () => {
   
    return (
        <DashboardContainer>
                <DashBoard />
        </DashboardContainer>
    )
}
export default DashBoardView
const DashboardContainer = styled.section`
    width: 100%;
`;