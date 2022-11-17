import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SelectInput from './ProfileSelectInput'
import Stack from '@mui/material/Stack';
import {AccountCircle,LowPriority } from '@mui/icons-material';

const TaskAssign = () => {
    const Assigne = ["Brandon Fisher", "Lauren Hoper", "Howard Gray"]
    const AssigneData = Assigne.map((item) => {
        return item;
    });
    const priority = ["High", "Normal", "Low"]
    const priorityData = priority.map((item) => {
        return item;
    });
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#fff', height: '20vh',  }} >
                    <Typography variant="h4" gutterBottom>
                        Project Assign:
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container columns={16} spacing={2}>
                        <Grid item xs={8} lg={8}>
                                <Stack direction="row" spacing={2} >
                                <AccountCircle sx={{ fontSize: 40, marginTop: '10px' }} />
                                <h4 style={{marginTop:"15px"}}>Assignee:</h4>
                                <Box sx={{ width: "70%" }}>
                                        <SelectInput
                                            option={AssigneData}
                                            name="city"
                                            label="city" />
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={8} lg={8}>
                                <Stack direction="row" spacing={2} >
                                <LowPriority sx={{ fontSize: 40, marginTop: '10px' }} />
                                <h4 style={{marginTop:"15px"}}>Priority:</h4>
                                <Box sx={{ width: "70%" }}>
                                        <SelectInput
                                            option={priorityData}
                                            name="city"
                                            label="city" />
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default TaskAssign