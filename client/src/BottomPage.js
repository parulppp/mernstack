import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle , faFacebookSquare, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
span{
    color : #FFFFFF;
    font-family: 'Teko', sans-serif;
    font-size :45px;
}
`;
const StyledGoogleButton = styled.button`
            background-color :#fff;
            color :#3c4146;
            border : 0;
            border-radius : 4px;
            padding : 5px;
            margin-top : 15px;
            height : 35px;
            width :280px;
`;
const StyledFbButton =styled.button`
background-color :#385499;
color:#FFFFFF;
       margin-top :10px;
            border : 0;
            border-radius : 4px;
            padding : 5px;
            height : 35px;
            width :280px;
`;
const StyledDiv = styled.div`
    margin-top : 100px;
    text-align: center; 
`;
const  StyledEPass =styled.form`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500,550&display=swap');
      border : 1px solid;
      padding-top : 13px;
      padding-left:20px;
      padding-right:20px;
      padding-bottom : 3px;
      width : 240px;
      background-color:#fff;
      height : 230px;
      text-align : center;
      margin-left:627px;
      border-radius : 4px;
      box-shadow : 20px 25px 120px grey;
      margin-top:20px;
      form{
          color : #040404;
          span{
              font-size: 13px;
              padding-left: 60px;
              color: #0077cc;
          }
          div{
              padding-top:10px;
              color :#0077cc;
              font-size :12px;
          }
      }
      input{
          width : 220px;
          height : 26px;
          margin-top:10px;
          color:#0077cc ;
          font-family: 'Teko', sans-serif;
      }
`;
const StyledLabelOne = styled.label`
    font-weight :550;
    padding-right:180px;
`;
const StyledLabelTwo = styled.label`
font-weight :550;
`;

const StyledLogIn = styled.button`
             background-color : #0095ff;
             border : 0;
             color : #fff;
             width  :240px;
             height : 35px;
             border-radius : 4px;
             margin-top:20px;
             box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 40%);
`;
const StyledLastDiv =styled.div`
          text-align : center;
          padding-top:18px;
          font-size:13px;
          font-family: 'Open Sans', sans-serif;
`;
const StyledLink = styled(Link)`
     color : #FF5733;
`;
const StyledMain = styled.main`
 background-image : url('https://cdn.sstatic.net/careers/img/svg-illustrations/Illo-Onboarding-Sign-Up-3.svg?v=86388da7a9a8');
`;

const StyledForgetLink = styled(Link)`
  color : #0077cc;
  padding-left:45px;
  font-size:12px;
`;

function bottomPage(){
    return(
        <>
        <GlobalStyles />
        <StyledMain>
        <StyledDiv>
         <FontAwesomeIcon icon ={faStackOverflow} color="#FF5733" size ='3x'/><span> TALENT</span><br/ >
             <StyledGoogleButton><FontAwesomeIcon icon ={faGoogle} size='lg'/> Log in with Google</StyledGoogleButton><br />
             <StyledFbButton><FontAwesomeIcon icon ={faFacebookSquare}  size='lg'/> Log in with Facebook</StyledFbButton>
         </StyledDiv>
         <StyledEPass>
         <form>
                 <StyledLabelOne for="email">Email</StyledLabelOne>
                 <input type="text" /><br /><br />
                 <StyledLabelTwo for="pass">Password</StyledLabelTwo>
                 <StyledForgetLink to={"./forget"}>Forget Password?</StyledForgetLink>
                 <input type="password" />
                 <StyledLogIn>Log in</StyledLogIn>
                 <div>Sign in using another provider</div>
        </form>
        </StyledEPass>
        <StyledLastDiv>Don't have an account? <StyledLink to={"./sign"}>Sign up</StyledLink></StyledLastDiv>
        </StyledMain>
        </>
    );
}

export default bottomPage;