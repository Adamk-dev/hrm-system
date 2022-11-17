import { Grid } from '@mui/material';
import React from 'react';
import '../styles/subject&title.scss';
import Select from './selectInput';
import Input from './sharedComponents/input';

const SubjectTitle = () => {
    const title = ["Title no 1", "Title no 2", "Title no 3", "Title no 4", "Title no 5"];
    return (
        <div className='ff'>
            <Grid container space={2} className="subject_title_container">
                <Grid item md={6} xs={12} className="subject_container"  >
                    <Input
                        type="text"
                        placeholder="Subject...."
                        label="subject"
                        name="Subject"
                        className='subject_input'


                    />
                </Grid>
                <Grid item md={6} xs={12} className="title_container" >
                    <Select
                        option={title}
                        className='title_input'
                        name="titleinput"
                        label="titleinput"
                        placeholder="Task Title...."

                    />
                </Grid>
            </Grid>

        </div>
    )
}

export default SubjectTitle