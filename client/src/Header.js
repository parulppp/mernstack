import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import {faInbox , faTrophy ,faQuestionCircle , faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Link} from 'react-router-dom';
import LoginButton from './LoginButton';
import SignButton from './SignButton';


const StyledHeader = styled.header`
 background-color : #393939;
 box-shadow :0px 5px 5px rgba(0,0,0,0.2);
 display :grid;
 grid-template-columns: 240px 1fr 50px 55px 20px 20px 20px 40px; 
 grid-column-gap : 20px;
 `;

 const LogoLink = styled(Link)`
 color:#fff;
 text-decoration : none;
 display :inline-block;
 padding : 0px 15px;
 line-height: 30px;
 height :50px;
 svg{
   margin-top :7px;
   display: inline-block;
   color :#FF5733 ;
   float: left;
 }
span{
  font-size:1.2rem;
  padding-top :10px;
  display : inline-block;
  padding-left:5px;
  fomt-weight : 300;
}
 b{
   font-weight :bold;
   display :inline-block;
 }
 
  `;
  const Search = styled.input`
 width : 100%;
 background-color: rgba(0,0,0,0.1);
 border:1px solid #555;
 padding : 8px 10px; 
 margin-top:9px; 
 display : inline-block;
 box-sizing: border-box;
 color : #fff; 
 border-radius:3px;
`;
const StyledInbox =styled.h3`
   padding-top : 14px;
`;
const StyledAchieve= styled.h4`
 padding-top : 14px;
`;
const StyledQues = styled.h5`
  padding-top : 14px;
`;
const StyledComm = styled.h6`
 padding-top :14px;
`;
function Header(){
   return (
    <StyledHeader>
    <LogoLink to={'./'} className="logo">
    <FontAwesomeIcon icon ={faStackOverflow} size="2x" />
    <span>stack <b>OverCloned</b></span>
    </LogoLink>
    <form action="" className="search">
      <Search type="text" placeholder="Search.." />
    </form>
    <LoginButton to={'./login'}/>
    <SignButton to ={'./sign'}/>
    <StyledInbox>
      <FontAwesomeIcon icon ={faInbox} size="lg" />
    </StyledInbox>
    <StyledAchieve>
    <FontAwesomeIcon icon ={faTrophy} size="lg"/>
    </StyledAchieve>
    <StyledQues>
      <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
    </StyledQues>
    <StyledComm>
      <FontAwesomeIcon icon = {faCommentAlt} size="lg" />
    </StyledComm>
  </StyledHeader>
   );
}

export default Header;