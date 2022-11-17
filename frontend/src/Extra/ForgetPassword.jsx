import React from 'react'
import Grid from "@mui/material/Grid";
import Styles from "../styles/forgetpassword.module.scss";
import Input from "../components/sharedComponents/input";
import lock from "../assets/images/Lock.png"
import { Link, useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate=useNavigate();
  return (
    <>
    
    <div className={Styles.container}>
    <Grid container className={Styles.forgetpass_container}>
          <Grid  item  xs={10} sm={7}
            md={3}
            display="flex"
            justifyContent="center"
            aligndivs="center"
          >
                  <div className={Styles.text_box}>
              <h1>welcome!</h1>
              <p>
                Enter your details and start <br /> journey with us
              </p>
            </div>

    </Grid>


    <Grid  xs={11} sm={9} md={7}  className={Styles.forgetpass_form} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <h2>Forget Your Password?</h2>


            <Grid className={Styles.subcontainer} sx={{ py:5 }} textAlign='center' container spacing={3} display="flex" flexDirection="column"   alignItems="center" md={10}  >
          
              <Grid className={Styles.heading_grid} item xs={12} sm={12} md={10} >
              <img src={lock} className={Styles.lock} alt='' />
             
               <p>Enter your email adress and we’ll send you a link to 
                  reset your password.</p>
               
             
              </Grid>


              <Grid className={Styles.input_grid} item xs={12} sm={12} md={10} >
                <p>Email Address</p>
                <Input type="email" placeholder="e.g. email@domain.com" />
            
        
                <div className={Styles.forgetpass_button}>
                     <button>Reset Button</button>
                </div>
              
              </Grid>

              <Grid className={Styles.create_buttons_grid} item xs={12} sm={12} md={10}   sx={{
               display: "flex",
               justifyContent: 'space-between',
               width: 1
              
           }}  >

                    <Link className={Styles.link}>Don’t have an account?</Link>
                    <button className={Styles.create_button} onClick={()=>navigate('/signup')}>Create An Account</button>
              </Grid>

            </Grid>
                
          </Grid>
</Grid>
    </div>
    
    
    </>



  )
}

export default ForgetPassword