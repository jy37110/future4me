import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import { HashRouter, Route } from 'react-router-dom'
//import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'
import NavigationBar from './Components/NavigationBar';
import Constructing from './Pages/Constructing';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import RedirectPage from "./Pages/RedirectPage";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            login:false,
            currentUser:"",
        }
    }

    // handleTest = () => {
    //     alert(JSON.stringify(this.state));
    // };

    onUserStateChange = (userState, user) => {
        this.setState({login:userState, currentUser:user});
        //alert("userState: " + userState + "\nstate: " + this.state.login);
    };


    render() {
        const LoginPage = (props) => {return(<Login loginStateHandler={this.onUserStateChange.bind(this)}{...props}/>)};
        return (
            <div className="App">
                <div>
                    {/*<Router history={createBrowserHistory()}>*/}
                    <HashRouter history={createHashHistory()}>

                        <div style={{width:"100%"}}>
                            <NavigationBar userLoggedIn={this.state.login} currentUser={this.state.currentUser} loginStateHandler={this.onUserStateChange}/>
                            <div className="row" style={{width:'100%'}}>
                                {/*<div className="col-md-3">*/}
                                {/*</div>*/}
                                <div>
                                    <Route exact path="/" component={Home}/>
                                    {/*<Route path="/about" component={About}/>*/}
                                    <Route path="/1" component={Constructing}/>
                                    <Route path="/2" component={Constructing}/>
                                    <Route path="/3" component={Constructing}/>
                                    <Route path="/4" component={Constructing}/>
                                    <Route path="/register" component={Register}/>
                                    <Route path="/login" component={LoginPage}/>
                                    <Route path="/7" component={Constructing}/>
                                    <Route path="/forget" component={ForgetPassword}/>
                                    <Route path="/resetPassword/:id;:psd" component={ResetPassword}/>
                                    <Route path="/redirect/:type" component={RedirectPage}/>
                                </div>
                                {/*<div className="col-md-3">*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </HashRouter>
                </div>

                <div className="footer">
                    {/*<button onClick={this.handleTest}>Test Button</button>*/}
                </div>
            </div>
        );
    }
}

export default App;
