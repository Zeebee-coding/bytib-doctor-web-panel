import React from 'react'
import styled from "styled-components";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const AppointmentBooking = () => {
    return (
        <AppointmentBookingContainer>
            <div className='appointmentbooking__header__sec'>
                <p>External Transfer</p>
                {/* <hr className='appointmentbooking__line' /> */}
            </div>
            <div className='appointmentbooking__body__sec'>
                <p>Title</p>
                <input placeholder='title...' type="text" />
                <ArrowCircleDownIcon/>
            </div>
            <div className='appointmentbooking__body__sec__textare'>
                <p>Detail</p>
                <textarea placeholder='detail...' />
            </div>
            <div className='appointmentbooking__body__sec__button'>
                <button>Add</button>
            </div>
            <div className='appointmentbooking__body__sec__table'>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item</th>
                                <th scope="col">Dtails</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td >
                                <DeleteIcon/>
                                    <EditIcon/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td >
                                    <DeleteIcon/>
                                    <EditIcon/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td >
                                <DeleteIcon/>
                                    <EditIcon/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppointmentBookingContainer>
    )
}

export default AppointmentBooking
const AppointmentBookingContainer = styled.section`
width: 700px;
    width: 100%;
    height: 830px;
    background-color: white;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;


    .appointmentbooking__header__sec {
    border-bottom: 0.5px solid rgba(201, 201, 201, 0.47);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.appointmentbooking__header__sec>p {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #000;
}

.appointmentbooking__body__sec {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    .css-i4bv87-MuiSvgIcon-root {
      font-size: 4rem !important;
      cursor: pointer;
    }
}

.appointmentbooking__body__sec>p {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #000;
}

.appointmentbooking__body__sec>p {
    margin-top: 10px;
}

.appointmentbooking__body__sec>input {
    height: 50px;
    width: 400px;
    border: 0.5px solid rgba(201, 201, 201, 0.47);
    outline: none;
}

.appointmentbooking__body__sec>i {
    font-size: 50px;
}

.appointmentbooking__body__sec__textare {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

}

.appointmentbooking__body__sec__textare>p {
    font-size: 20px;
    color: #000;
}

.appointmentbooking__body__sec__textare>textarea {
    height: 100px;
    border: 0.5px solid rgba(201, 201, 201, 0.47);
    outline: none;
}

.appointmentbooking__body__sec__button>button {
    margin-top: 10px;
    padding: 18px;
    width: 200px;
    border-radius: 10px;
    background-color: #70B5D3;
    color: white;
    font-weight: 600;
    border: none;
}

.appointmentbooking__body__sec__table {
    margin-top: 10px;

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
}

.del__icon {
    margin-right: 15px;
    color: red;
    cursor: pointer;
}
`;