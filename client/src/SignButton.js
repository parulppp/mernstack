import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LogosLink = styled(Link)`
 text-decoration : none;
background-color: #FF5733;
 border: 2px;
 color :#fff;
 margin-top:10px;
 width:55px;
 padding:5px;
 margin-bottom:10px;
 padding-right:5px;
 border-radius :3px;

`;

function SignButton(){
    return(
        <LogosLink to ={'./sign'}>Sign&nbsp;up</LogosLink>
    );
}

export default SignButton;