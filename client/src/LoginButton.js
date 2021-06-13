import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LogoLink = styled(Link)`
 text-decoration : none;
background-color: #FF5733;
 border: 2px;
 padding :5px;
 width: 50px;
 space-between : 10px;
 color :#fff;
 margin-top:10px;
 margin-bottom:10px;
 border-radius :3px;
`;
function LoginButton(){
    return(
        <>
        <LogoLink to={'./login'}>Log in</LogoLink>
        </>
    );
}

export default LoginButton;