import { Box, Grid } from '@mui/material'
import React, { useState, useRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Input from './sharedComponents/input';
import '../styles/deadline.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import arrowdown from '../assets/images/arrow-down-sign-to-navigate.png'
import arrowup from '../assets/images/up-arrow.png'
import '../styles/calender.scss'
const Deadline = () => {
    // const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = useState(null)
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const refOne = useRef(null);

    // function handleArrowImage(e) {
    // function handleArrow(controlArrow) {
    // if (e) {
    //     e.target.setAttribute('src', {});
    //     e.target.setAttribute('src', { arrowup });
    // }
    // else {
    //     e.target.setAttribute('src', {});
    //     e.target.setAttribute('src', { arrowdown });
    // }
    // }
    // }
    return (
        <div className='Deadline_container'>
            <h2>Deadline:</h2>
            <Grid container space={2}>
                <Grid md={6} xs={12} className="Deadline_date_container" >
                    <Box className='Deadline_date_box'> <CalendarMonthIcon className='calender_icon' /><span className='date_heading'>Date:</span></Box>

                    <div className="calendar_div" >

                        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="d MMMM, yyyy" placeholderText="Enter Date"
                            showMonthDropdown showYearDropdown scrollableMonthYearDropdown className="calendar"
                        // isClearable
                        />
                        {/* <img src={arrowdown} className="arrow_down" /> */}
                        {/* onClick={handleArrowImage} */}
                    </div>
                </Grid>
                <Grid md={6} xs={12} className="Deadline_time_container">
                    <Box className='Deadline_time_box'> <HistoryToggleOffIcon className='time_icon' /><span className='time_heading'>Time:</span></Box>
                    <div className="time_div" >
                        <span>Start With</span>
                        <DatePicker
                            selected={startTime}
                            onChange={(date) => setStartTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            className="start_time"
                        />


                    </div>
                    <div className="time_div" >
                        <span>End With</span>
                        <DatePicker
                            selected={endTime}
                            onChange={(date) => setEndTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            className="end_time"
                        />


                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Deadline