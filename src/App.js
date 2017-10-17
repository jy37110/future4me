import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import NavigationBar from './Components/NavigationBar';
import Constructing from './Pages/Constructing';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            login:false,
        }
    }

    onUserStateChange = (userState) => {
        this.setState({login:userState});
        // alert("userState: " + userState + "\nstate: " + this.state.login);
    };

    test = () => {
        alert("state.login: " + this.state.login);
    };

    render() {
        return (
            <div className="App">
                <div>
                    <Router history={createBrowserHistory()}>
                        <div>
                            <NavigationBar userLoggedIn={this.state.login} test={this.test} loginStateHandler={this.onUserStateChange}/>
                            <div className="row">
                                {/*<div className="col-md-3">*/}
                                {/*</div>*/}
                                <div>
                                    <Route exact path="/" component={Home}/>
                                    {/*<Route path="/about" component={About}/>*/}
                                    <Route path="/1" component={Constructing}/>
                                    <Route path="/2" component={Constructing}/>
                                    <Route path="/3" component={Constructing}/>
                                    <Route path="/4" component={Constructing}/>
                                    <Route path="/5" component={Constructing}/>
                                    <Route path="/6" component={Constructing}/>
                                    <Route path="/7" component={Constructing}/>

                                </div>
                                {/*<div className="col-md-3">*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </Router>
                </div>

                <div className="footer">

                </div>
            </div>
        );
    }
}

export default App;
