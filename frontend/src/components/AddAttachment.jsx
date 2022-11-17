import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SelectInput from './ProfileSelectInput'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AttachFile, Delete } from '@mui/icons-material';
const AddAttachment = () => {
    const AttachType = ["File", "Link", "SharePoint"]
    const AttachmentData = AttachType.map((item) => {
        return item;
    });
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#fff', height: '20vh', width: "100%", padding: '10px' }} >
                    <Typography variant="h4" gutterBottom>
                        Add Attachment:
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container columns={16} spacing={10}>
                            <Grid item xs={8} lg={8} >
                                <Stack direction="row" spacing={2}>
                                    <AttachFile sx={{ fontSize: 40, marginTop: '10px' }} />
                                    <Box sx={{ width: "100%" }}>
                                        <SelectInput
                                            option={AttachmentData}
                                            name="city"
                                            label="city" />
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={8} lg={8}>
                                <Stack direction="row" spacing={4} sx={{ marginTop: "10px" }}>
                                    <Button variant="contained" size="large" >Upload</Button>
                                    <Button variant="contained" size="large" color="inherit">Cancel</Button>
                                    <Button variant="contained" startIcon={<Delete />} size="large" color="success">Delete</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default AddAttachment