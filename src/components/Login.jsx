import { Button, Card, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import background from "../images/login-banner.png";
const useStyle = makeStyles(theme=>({
    container: {
        marginTop: 90
    },
    loginImg: {
        height: 500,
        padding: 100,
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    },
    loginForm: {
        paddingLeft: 100,
        paddingTop: 50,
        [theme.breakpoints.down('md')]:{
            padding:0
        }
    },
    mainloginForm: {
        height: 450,
        padding: 50,
        width: 450
    },
    loginHead: {
        fontSize: 18,
        marginBottom: 3,
        marginLeft: 8,
        fontWeight: 500,
        color: "#272b41",
        paddingBottom: 15,
        fontFamily: "Poppins"
    },
    email: {
        margin: 8,
        textAlign: "center"
    },
    forgotPassword: {
        textAlign: "right",
        fontFamily: "Poppins",
        fontSize: 13,
        marginTop: 13,
        '&:hover': {
            cursor: 'pointer',
            color: "#ee344e"
        },
    },
    loginBtn: {
        backgroundColor: "#ee344e",
        color: "white",
        fontWeight: 600,
        textTransform: "capitalize",
        margin: 8,
        fontSize: 18,
        width: "100%",
        borderRadius: "0.3rem",
        cursor: "pointer",
        marginTop: 15,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#0168b3"
        },
    },
    register: {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: 13,
        marginTop: 40,
        color: "#272b41",
    }

}));
const Login = () => {
    const classes = useStyle();
    const [userData,setUserData] = useState({
        email:"",
        password:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(() => {
            return {
                ...userData, [name]: value
            }
        })
    }
    const loginData = async () => {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        var data = await response.json();
        console.log(data); //here you can see the response object
    };
    return (<>
        <Grid container className={classes.container}>
            <Grid item lg={6} >
                <img src={background} alt="login" className={classes.loginImg} />
            </Grid>
            <Grid item lg={6} xs={12}  className={classes.loginForm}>
                <form>
                    <Card className={classes.mainloginForm}>
                        <Typography className={classes.loginHead}>Welcome Back</Typography>
                        <TextField label='Email' type="email" name='email' variant='outlined' fullWidth required className={classes.email} onChange={(e)=>handleChange(e)} />
                        <TextField label='Password' type="password" name='password' variant='outlined' fullWidth required className={classes.email} onChange={(e)=>handleChange(e)}  />
                        <Typography className={classes.forgotPassword}>Forgot Password ?</Typography>
                        <Button className={classes.loginBtn} onClick={() => loginData()}>Login</Button>
                    </Card>
                </form>
            </Grid>
        </Grid>
    </>);
};
export { Login };