import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
padding : 30px 20px;
`;

const QuestionInput = styled.input`
   border: 1px solid #FF5733;
   border-radius : 3px;
   display: block;
   width : 100%;
   background : none;
   box-sizing : border-box;
   padding :10px;
   margin-bottom : 20px;
   color: #FF5733;
`;
const StyledTextarea = styled.textarea`
border: 1px solid #FF5733;
   border-radius : 3px;n
   display: block;
   width : 100%;
   background : none;
   box-sizing : border-box;
   padding :10px;
   height : 200px;
   color: #FF5733;

`;
const QuesHeading = styled.div`
 margin-bottom : 20px;
 font-size:2rem; 
`;
const StyledSection = styled.div`
   margin-bottom : 5px;
   font-size:1.2rem;
`;
const StyledTag= styled.div`
  font-size: 0.8rem;
  padding-top : 10px;
`;
const StyledBody = styled.div`
  font-size:1.2rem;
  margin-top: 10px;
`;
const StyledTag2 = styled.div`
   font-size:0.8rem;
   line-height:25px;
`;
const StyledLastTag = styled.div`
   font-size:1.2rem;
   h3{
      margin-top:10px;
      margin-bottom:10px;
   }
`;
const StyledTagInput = styled.input`
 width : 100%;
 background: none;
 border: 1px solid #FF5733;
 box-sizing:border-box;
 border-radius : 3px;
 padding : 10px;
 color: #FF5733;
`;
const StyledLastHeading = styled.div`
  font-size: 0.8rem;
  margin-bottom:10px;

`;

const StyledReview = styled.button`
margin-top: 10px;
width : 150px;
height : 40px;
background-color: #FF5733;
border : 0;
border-radius : 5px;
`;
const StyledOuterDiv = styled.div`
 border: 3px solid #FF5733;
 padding : 20px ;
 border-radius : 5px;
`;

export default function AskPage(){

 return(

    <MainDiv>
    <StyledOuterDiv>
      <QuesHeading>Ask a public question</QuesHeading>
      <StyledSection>
      <h4><b>Title</b></h4>
      <StyledTag>Be specific and imagine you’re asking a question to another person</StyledTag>
      </StyledSection>
       <QuestionInput type="text" placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
       <StyledBody>
          <h3><b>Body</b></h3>
          <StyledTag2>Include all the information someone would need to answer your question</StyledTag2>
       </StyledBody>
       <StyledTextarea placeholder="Elaborate you question here..."></StyledTextarea>
       <StyledLastTag>
       <h3>Tags</h3>
       <StyledLastHeading>Add up to 5 tags to describe what your question is about</StyledLastHeading>
       <StyledTagInput type="text" placeholder="e.g (c laravel sql)" />
       </StyledLastTag>
       <StyledReview>Review your question</StyledReview>
       </StyledOuterDiv>
    </MainDiv>
 );

}

