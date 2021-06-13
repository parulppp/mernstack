import React from 'react';
import styled  from 'styled-components';
import QuestionRow from './QuestionRow';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const StylingHeader = styled.h1`
 font-size : 1.8rem;
`;
const StylingDiv = styled.div`
display : grid;
grid-template-columns : 1fr min-content;
padding : 30px 20px;
`;

const StylingButton = styled(Link)`
  background-color : #FF5733 ;
  color: #fff;
  border:0;
  border-radius : 2px;
  padding : 10px;
  text-decoration : none;
`;
const StyledStack = styled.h3`
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap');
padding-top : 30px;
padding-left :30px;
span{
  padding-left : 30px;
  font-weight: 700;
  font-family: 'Mulish', sans-serif;
}
`;
const StyledTag =styled.h3`
padding-top : 10px;
padding-left:73px;
`;
const StyledList = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Mate+SC&display=swap');
   padding-top:10px;
   padding-left:12px;
   color : #999;
   font-family: 'Mate SC', serif;
`;
const StyledBottomInfo = styled.div`
 width:100%;
 height:300px;
 display :grid;
`;
const StyledSecond =styled.h3`
 grid-template-columns : 240px 200px 1fr;
 grid-column-gap: 20px;
`;
const StyledMain = styled.div`
grid-template-columns : 240px 200px 1fr;
 grid-column-gap: 20px;

`;
function Questions()
{
return(
    <main>
    <StylingDiv>
  <StylingHeader>Top Questions</StylingHeader>
  <StylingButton to={'./ask'}>Ask&nbsp;Question</StylingButton>
  </StylingDiv>
  <QuestionRow />
  <QuestionRow />
  <QuestionRow />
  <QuestionRow />
  <QuestionRow />
  <QuestionRow />
  <QuestionRow />
  <QuestionRow />
  <QuestionRow />
  <StyledMain>
  <StyledBottomInfo>
  <StyledStack>
  <FontAwesomeIcon icon = {faStackOverflow} size="2x" color='#FF5733' />
  <span><b>STACK OVERFLOW</b></span>
  </StyledStack>
  <StyledList>
  <StyledTag>Questions</StyledTag>
  <StyledTag>Jobs</StyledTag>
  <StyledTag>Developer Jobs Directory</StyledTag>
  <StyledTag>Salary Calculator</StyledTag>
  <StyledTag>Help</StyledTag>
  <StyledTag>Mobile</StyledTag>
  <StyledTag>Disable Responsiveness</StyledTag>
  </StyledList>
  <StyledSecond>PRODUCTS</StyledSecond>
  <h3>Teams</h3>
  <h3>Talent</h3>
  <h3>Advertising</h3>
  <h3>Enterprise</h3>
  </StyledBottomInfo>
  </StyledMain>
  </main>

);
}

export default Questions;