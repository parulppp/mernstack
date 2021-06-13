import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

const StyledFirstDiv = styled.div`
text-align : center;
margin-top:110px;
`;
const StyledSpan = styled.span`
font-family: 'Teko', sans-serif;
font-size:35px;
word-spacing:18px;
`;
const StyledSecondDiv = styled.div`
border: 2px solid ;
width:270px;
border-radius:5px;
background-color:#fff;
height:250px;
box-shadow: 20px 25px 100px grey;
padding-top:30px;
padding-left:20px;
margin-top:30px;
  margin-left:635px;
  h3{
     color :#3c4146;
     font-size:28px;
     font-family: 'Rubik', sans-serif;
  }
  p{
   color :#0D0D0D;
  }
  label{
     color :#0D0D0D;
     font-size:15px;
     font-weight:400;
     font-family: 'Mate SC', serif;
  }
  input{
     width: 245px;
     margin-top:10px;
     height:30px;
  }
  button{
     border: 1px solid #fff;
     border-radius:4px;
     width:250px;
     margin-top:15px;
     height:40px;
     color: #fff;
     box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 40%);
     background-color : #0095ff;
  }
`;
const StyledDiv = styled.div`
    margin-left:740px;
    color: #FFF;
    font-size:13px;
    margin-top: 25px;
    font-family: 'Rubik', sans-serif;
`;
const StyledLoginLink = styled(Link)`
 color:#FF5733;
`;

function ForgetPass(){
return(
   <>
   <StyledFirstDiv>
   <FontAwesomeIcon icon ={faStackOverflow} color="#FF5733" size ='3x'/><StyledSpan> TALENT</StyledSpan><br/ >
   </StyledFirstDiv>
   <StyledSecondDiv>
      <h3>Reset password</h3><br />
      <p>Having trouble? Don’t worry. We’ll <br />
      email you instructions to reset your <br />
      password.</p><br />
      <label for="email">Email address</label><br />
      <input type="text" />
      <button>Send&nbsp;recovery&nbsp;email</button>
   </StyledSecondDiv>
   <StyledDiv>Return to <StyledLoginLink to={'./login'}>Login</StyledLoginLink></StyledDiv>
   </>
);
}

export default ForgetPass;
