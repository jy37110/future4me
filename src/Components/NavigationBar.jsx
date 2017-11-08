import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//import { Link } from 'react-router-dom'



class NavigationBar extends Component{
    constructor(props){
        super(props);
        // alert(JSON.stringify(props));
        this.state = {
            activeKey: '/',
        }
    }

    navigate = (eventKey) => {
        this.setState({activeKey: eventKey});
        // window.location.replace('/' + eventKey);
        window.location = "#/" + eventKey;
        //alert(eventKey);

    };

    handleTest = () => {
        //alert("this.props.userloggedin: " + this.props.userLoggedIn + "\n this.props.user: " + JSON.stringify(this.props.currentUser));
    };

    handleLogout = () => {
        this.props.loginStateHandler(false,"");
        //window.location = "#/redirect/LogoutSuccess";
    };

    render(){
        const signInButton =
            <NavItem eventKey={"login"} href="#">
                <span className="NavItem">登陆</span>
            </NavItem>;
        const signOutButton =
            <NavItem eventKey={"redirect/LogoutSuccess"} href="#">
                <span className="NavItem" onClick={this.handleLogout}>注销</span>
            </NavItem>;
        const userName =
            <NavItem eventKey={""} href="#">
                <span className="NavItem">欢迎回来 {this.props.currentUser.firstname}</span>
            </NavItem>;

        return(
            <div>
                <Navbar inverse className="NavBar" style={{marginBottom:0}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="NavItem" href="/#">Home Logo</a>
                            {/*<Link to="/login">*/}
                                {/*<span className="NavItem">Home Logo</span>*/}
                            {/*</Link>*/}
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav activeKey={this.state.activeKey} onSelect={this.navigate}>
                            <NavItem eventKey={1}>
                                <span className="NavItem">Link1</span>
                            </NavItem>
                            <NavItem eventKey={2}>
                                <span className="NavItem">Link2</span>
                            </NavItem>
                            <NavItem eventKey={"redirect/ResetPasswordSuccess"}>
                                <span className="NavItem" onClick={this.handleTest}>Test Link</span>
                            </NavItem>
                            <NavItem eventKey={4}>
                                <span className="NavItem">Link4</span>
                            </NavItem>

                        </Nav>
                        <Nav pullRight activeKey={this.state.activeKey} onSelect={this.navigate}>
                            <NavItem eventKey={"register"} href="#">
                                <span className="NavItem">注册</span>
                            </NavItem>
                            {/*<NavItem eventKey={"login"} href="#">*/}
                                {/*<span className="NavItem">登陆</span>*/}
                            {/*</NavItem>*/}
                            {this.props.userLoggedIn ? signOutButton : signInButton}
                            <NavDropdown eventKey={7} className="NavItem" title="联系我们" id="basic-nav-dropdown">
                                <MenuItem eventKey={7.1}>400-991-5791</MenuItem>
                                <MenuItem eventKey={7.2}>400-991-5792</MenuItem>
                                <MenuItem eventKey={7.3}>在线咨询</MenuItem>
                            </NavDropdown>
                            {this.props.userLoggedIn ? userName : null}
                        </Nav>
                        {/*<Nav pullRight>*/}
                            {/*{*/}
                                {/*this.props.userLoggedIn*/}
                                    {/*? signOutButton*/}
                                    {/*: signInButton*/}
                            {/*}*/}
                        {/*</Nav>*/}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;