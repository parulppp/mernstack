import {Reset} from 'styled-reset';
import {createGlobalStyle} from 'styled-components';
import Header from './Header';
import Questions from './Questions';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AskPage from './AskPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import bottomPage from './BottomPage';
import ForgetPass from './ForgetPass';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300,700&display=swap');
body{
       background : #2d2d2d;
       color : #fff;
       font-family : Roboto, sans-serif;
       }
`;


function App() {
  return (
     <div>
     <Reset />
     <GlobalStyles />
     <Router>
     <Header />
       <Switch>
<Route exact path="/ask" component={AskPage} /> 
<Route exact path="/sign" component={SignUpPage} />
<Route exact path="/login" component={LoginPage} />
<Route exact path="/" component={Questions} />
<Route exact path="/talent" component={bottomPage} />
<Route exact path="/forget" component={ForgetPass} />
       </Switch>
     </Router>
     </div>
  );
}
export default App;
