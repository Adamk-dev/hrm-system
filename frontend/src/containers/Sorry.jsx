import {  Grid } from '@mui/material'
import React,{button} from 'react'
import { useNavigate } from 'react-router-dom';
// import SideBar from '../components/SideBar';

const Sorry = () => {
    const navigate=useNavigate();
  return (
    <>
      <Grid style={{backgroundColor:"lightgray", display:"flex", flex:1, width:"100%",height:"100vh", justifyContent:"center", alignItems:"center"}} >
        <h1 style={{color:"Black"}}>Sorry You Don't have enough permissions</h1>
        <button onClick={()=>navigate('/')} style={{backgroundColor:"royalblue", width:100,height:40, marginLeft:20}}>Go Back</button>
      </Grid>
    </>
  )
}

export default Sorry

