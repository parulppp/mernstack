import React from 'react';
import styled from 'styled-components';


const QuestionVAV =styled.div`
text-align : center;
font-size : 1.2rem;
display : inline-block;
color : #FF5733;

span{
    font-size:0.7rem;
    display :block;
    margin-top : 4px;
}

`;
const QuestionTitle = styled.div`
  padding : 0px 20px;
`;
const QuesLink = styled.a`
text-decoration : none;
color: #23CBFF;
font-size : 17px;
display : block;
`;
const Tag = styled.span`
  display : inline-block;
  margin-right: 3px;
  font-size:0.8rem;
  color:#9cc3db;
  background-color:#3e4a52;
  padding : 4px;
  border-radius : 2px;
`;
const StyledQuestionRow = styled.div`
background-color: rgba(255,255,255,0.1);
padding : 15px 15px;
display : grid;
grid-template-columns : 50px 50px 50px 1fr;
grid-column-gap : 20px;
border-top: 1px solid #555;
`;
const StyledWhen = styled.div`
  float : right;
  display : inline-block;
  font-size:0.8rem;
`;
const StyledNewTag= styled.p`
    border: 0.5px solid #FF5733;
    padding-top : 5px;
    padding-bottom: 5px;
    `;

const StyledWhom = styled.div`
color : #FF5733 ;
`;
function QuestionRow()
{
return (
  <>
 
    <StyledQuestionRow>
    <QuestionVAV>0<span>votes</span></QuestionVAV>
    <QuestionVAV><StyledNewTag>4<span>answers</span></StyledNewTag></QuestionVAV>
    <QuestionVAV>20<span>views</span></QuestionVAV>
    <QuestionTitle>
        <QuesLink>Getting string in quotes in Javascript</QuesLink>
        <Tag>Javascript</Tag>
        <Tag>parsing</Tag>
        <Tag>quotes</Tag>
        <Tag>literals</Tag>
  <StyledWhen>
  Asked 2 min ago&nbsp;<StyledWhom>Paras</StyledWhom>
  </StyledWhen>
    </QuestionTitle>
    </StyledQuestionRow>
    </>
);
}

export default QuestionRow;