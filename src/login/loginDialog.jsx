import React, { useState, useContext } from 'react'
import { Box, Button, Dialog, TextField, Typography ,styled} from "@mui/material"
import { authenticateSignup, authenticateLogin } from '../service/api';
import { DataContext } from '../context/DataProvider';


const Component = styled(Box)`
    height: 100%;
    width: 100%;
    padding: 0;
    padding-top: 0;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 30%;
    overflow: auto;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #fff;
        font-weight: 600
    }

`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    overflow: auto;
    flex: 1;
    & > div, & > Button, & > p {
        margin-top: 20px
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB461B;
    color: #fff;
    height: 48px;
    border-radius: 2px;

    &:hover {
        background: #FB461B;
        color: #fff;
    }
`;

const OtpButton = styled(Button)`
    text-transform: none;
    margin-bottom: 30px;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`;

const Error = styled(Typography)`
    font-size:10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`


const accounInitialValues = {
    login: {
        view: 'login',
        heading : "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },

    signup: {
        view: 'signup',
        heading : "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}

const loginInitialValues = {
    username: '',
    password: ''
}

const LoginDialog = ({ open, setOpen }) => {
    
    const [account, toggleAccount] = useState(accounInitialValues.login)
    const [signUp, setSignUp] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const [error, setError] = useState(false)
   
    const { setAccount } = useContext(DataContext)

    
    const toggleSignup = () => {
        toggleAccount(accounInitialValues.signup)
    }
    
    const handleClose = () => {
        setOpen(false)
        toggleAccount(accounInitialValues.login);
        setError(false);
    }

    const onInputChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value })
        console.log(signUp);
    }

    const signUpUser = async() => {
      let response =  await authenticateSignup(signUp)
      if(!response) return
      handleClose();
      setAccount(signUp.firstname)
    }

    const onValueChange = (e) => {
        setLogin({ ...login , [e.target.name]: e.target.value })
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login)
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname)
        } else {
            setError(true);
        }
    }

  return (
    <Dialog open={open} onClose={handleClose}>
        <Component>
            <Box style={{ display: "flex", height: "100%" }}>
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                </Image>
                {
                    account.view === 'login' ? 
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onValueChange(e)} name="username" label="Enter Email/Mobile number" />
                        { error && <Error>Please enter valid username or password</Error> }
                        <TextField variant='standard' onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                        <Typography style={{ textAlign: "center" }}>OR</Typography>
                        <OtpButton>Request OTP</OtpButton>
                        <CreateAccount onClick={() => toggleSignup()} style={{ textAlign: "center" }} >New to Flipkart, Create an account</CreateAccount>
                    </Wrapper>

                    :

                    <Wrapper>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
                    <LoginButton onClick={() => signUpUser()} >Continue</LoginButton>
                </Wrapper>

                }
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog