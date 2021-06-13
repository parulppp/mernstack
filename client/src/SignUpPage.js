import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle , faGithub , faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpenText, faTags ,faTrophy , faCaretLeft, faCaretRight ,faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'; 
import {Link} from 'react-router-dom';

const StyledGoogleButton = styled.button`
            background-color :#fff;
            color :#3c4146;
            border : 0;   
            border-radius : 4px;
            height : 35px;
            width :330px;
`;
const StyledGithubButton = styled.button`
 background-color :#2f3337;
 color: #FFFFFF;
       margin-top :10px;
            border : 0;
            border-radius : 4px;
            height : 35px;
            width :330px;
`;
const StyledFbButton =styled.button`
background-color :#385499;
color:#FFFFFF;
       margin-top :10px;
            border : 0;
            border-radius : 4px;
            height : 35px;
            width :330px;
`;
const StyledDiv = styled.div`
    margin-left :630px; 
    margin-top:0px;
`;
const  StyledEPass =styled.form`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500,550&display=swap');
      border : 1px solid;
      padding-top : 13px;
      padding-left:20px;
      padding-right:20px;
      padding-bottom : 3px;
      width : 290px;
      background-color:#fff;
      height : 400px;
      text-align : center;
      margin-left:627px;
      border-radius : 4px;
      box-shadow : 20px 25px 120px grey;
      margin-top:20px;
      h4{
        color:#0095ff;
      }
      h3{
        padding-top:10px;
        font-size:12px;
      }
      span{ 
        padding-top : 5s0px;
        font-size:10px;
      }
      form{
          color : #040404;
      }
      input{
          width : 270px;
          height : 35px;
          margin-top:10px;
          color:#0D0D0D ;
      }
`;
const StyledLabelOne = styled.label`
    font-weight :550;
    padding-top :30px;
    padding-right:220px;
    line-height:30px;
`;
const StyledLabelTwo = styled.label`
font-weight :550;
padding-right:190px;
`;
const StyledLabelDisplay = styled.label`
    font-weight :550;
    margin-top: 55px;
    padding-right:165px;
    input{
      padding-bottom :20px;
    }
`;

const StyledLogIn = styled.button`
             background-color : #0095ff;
             border : 0;
             color : #fff;
             width  :277px;
             height : 35px;
             border-radius : 4px;
             margin-left:10px;
             margin-top:20px;
             margin-right : 20px;
             box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 40%);
`;
const StyledComm = styled.div`
   font-size : 40px;
   padding-top:200px;
   float : left;
    margin-left : 150px;
   span{
     font-size:20px;
     font-family: 'Quicksand', sans-serif;
   }
`;
const StyledHeading =styled.h3`
font-family: 'Open Sans', sans-serif;
justify-content : center; 
h3{
  color :#FF5733;
}
`;
const StyledCombine = styled.div`
     margin-top :30px;
     padding-left :200px;
`;
const StyledSmall = styled.h5`
  font-size: 12px;
  padding-top :12px;
  line-height : 18px;
  font-family: 'Open Sans', sans-serif; 
  span{
    color :#0095ff;
    font-size: 12px;
  }
`;
const StyledReturn = styled.h3`
    font-size : 12px;
    font-family: 'Quicksand', sans-serif;
    padding-top:20px;
    margin-left:910px;
`;
const StyledLink = styled(Link)`
    color : #FF5733;
`;
const StyledReturnTalent = styled.h3`
    font-size : 12px;
    padding-top:20px;
    font-family: 'Quicksand', sans-serif;
    margin-left:890px;
`;
const StyledTalentLink = styled(Link)`
  color : #FF5733;
`;
const StyledMain = styled.main`
background-image : url('https://cdn.sstatic.net/careers/img/svg-illustrations/Illo-Onboarding-Sign-Up-3.svg?v=86388da7a9a8');
`;

function SignUpPage(){
  return(
    <>
    <StyledMain>
    <StyledComm>
      <StyledHeading>Join the&nbsp;<h3>Stack Overflow</h3> community</StyledHeading>
      <span><FontAwesomeIcon icon ={faEnvelopeOpenText} color ='#0095ff' /> Get unstuck — ask a question</span><br />
      <span><FontAwesomeIcon icon ={faCaretLeft} color =' #0095ff'/> <FontAwesomeIcon icon ={faCaretRight} color =' #0095ff' /> Unlock new privileges like voting and commenting</span><br />
      <span><FontAwesomeIcon icon ={faTags}  color =' #0095ff'/> Save your favorite tags, filters, and jobs</span><br />
      <span><FontAwesomeIcon icon={faTrophy}  color =' #0095ff'/> Earn reputation and badges</span>
      <StyledSmall>Collaborate and share knowledge with a private group for FREE.<br/>
<span>Get Stack Overflow for Teams free for up to 50 users.</span></StyledSmall>
    </StyledComm>

    <StyledCombine> 
      <StyledDiv>
        <StyledGoogleButton><FontAwesomeIcon icon ={faGoogle} size='lg'/> Log in with Google</StyledGoogleButton><br />
        <StyledGithubButton><FontAwesomeIcon icon ={faGithub} size='lg' /> Log in with GitHub</StyledGithubButton><br />
        <StyledFbButton><FontAwesomeIcon icon ={faFacebookSquare}  size='lg'/> Log in with Facebook</StyledFbButton>
</StyledDiv>
    <StyledEPass>
    <form>
            <StyledLabelDisplay for="displayname">Display&nbsp;name</StyledLabelDisplay>
            <input type="text" /><br />
            <StyledLabelOne for="email">Email</StyledLabelOne>
            <input type="text" /><br /><br />
            <StyledLabelTwo for="pass">Password</StyledLabelTwo>
            <input type="password" />
            <h3>Passwords must contain at least eight characters, including at least 1 letter and 1 number</h3>
            <StyledLogIn>Sign up</StyledLogIn>
            <span>By clicking "Sign up", you agree to our&nbsp;<h4>terms of service , privacy policy</h4> and <h4>cookie policy</h4></span>
   </form>
        </StyledEPass>
        </StyledCombine>
        <StyledReturn>Already have an account? <StyledLink to={"./login"}>Log in</StyledLink></StyledReturn>
        <StyledReturnTalent>Are you an employer? <StyledTalentLink to={"./talent"}>Sign up on Talent </StyledTalentLink><FontAwesomeIcon icon ={faExternalLinkAlt} color='#FF5733' /></StyledReturnTalent>
 </StyledMain>
   </>
  );
}

export default SignUpPage;