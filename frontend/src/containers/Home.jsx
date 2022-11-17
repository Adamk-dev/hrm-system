import { Divider, Grid } from '@mui/material'
import React from 'react'
import Input from '../components/sharedComponents/input'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import Styles from "../styles/login.module.scss"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Home = () => {


  return (
    <>

      <Grid container className={Styles.login_container} >
            <h1 style={{color:"white"}}>Hello, Welcome to Lucid HRM !</h1>
      </Grid>
    </>
  )
}

export default Home

