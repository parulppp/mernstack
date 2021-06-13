import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle , faGithub , faFacebookSquare, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'; 
import {Link} from 'react-router-dom';

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
const StyledGithubButton = styled.button`
 background-color :#2f3337;
 color: #FFFFFF;
       margin-top :10px;
            border : 0;
            border-radius : 4px;
            padding : 5px;
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
      height : 200px;
      text-align : center;
      margin-left:627px;
      border-radius : 4px;
      box-shadow : 20px 25px 120px grey;
      margin-top:20px;
      form{
          color : #040404;
      }
      input{
          width : 220px;
          height : 26px;
          margin-top:10px;
          color:#7C7C83 ;
      }
`;
const StyledSpanLink = styled(Link)`
              font-size: 11px;
              padding-left: 60px;
              color: #0077cc;
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
const StyledSecondLast = styled.h3`
 font-size : 12px;
    padding-top:20px;
    font-family: 'Quicksand', sans-serif;
    margin-left:685px;
`;
const StyledLast = styled.h3`
 font-size : 12px;
    padding-top:20px;
    font-family: 'Quicksand', sans-serif;
    margin-left:665px;
`;
const StyledLink = styled(Link)`
  color: #FF5733;
`;
const StyledTalent = styled(Link)`
  color :#FF5733;
`;
const StyledMain = styled.main`
background-image : url('https://cdn.sstatic.net/careers/img/svg-illustrations/Illo-Onboarding-Sign-Up-3.svg?v=86388da7a9a8');
`;

function LoginPage(){
    return(
        <>
        <StyledMain>
         <StyledDiv>
         <FontAwesomeIcon icon ={faStackOverflow} color="#FF5733" size ='3x'/><br />
             <StyledGoogleButton><FontAwesomeIcon icon ={faGoogle} size='lg'/> Log in with Google</StyledGoogleButton><br />
             <StyledGithubButton><FontAwesomeIcon icon ={faGithub} size='lg' /> Log in with GitHub</StyledGithubButton><br />
             <StyledFbButton><FontAwesomeIcon icon ={faFacebookSquare}  size='lg'/> Log in with Facebook</StyledFbButton>
         </StyledDiv>
         <StyledEPass>
         <form>
                 <StyledLabelOne for="email">Email</StyledLabelOne>
                 <input type="text" /><br /><br />
                 <StyledLabelTwo for="pass">Password</StyledLabelTwo>
                 <StyledSpanLink to={"./forget"}>Forget Password?</StyledSpanLink>
                 <input type="password" />
                 <StyledLogIn>Log in</StyledLogIn>
        </form>
             </StyledEPass>
             <StyledSecondLast>Don't have an account? <StyledLink to={"./sign"}>Sign up </StyledLink></StyledSecondLast>
             <StyledLast>Are you an employer? <StyledTalent to={"./talent"}> Sign up on Talent </StyledTalent> <FontAwesomeIcon icon ={faExternalLinkAlt} color='#FF5733' /></StyledLast>
        </StyledMain>
        </>
    );
}

export default LoginPage;