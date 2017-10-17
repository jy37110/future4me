import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, ButtonToolbar, Glyphicon, Nav, Navbar, NavItem, NavDropdown,MenuItem } from 'react-bootstrap';



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
        window.location.replace(eventKey);
    };

    register = () => {
        this.props.test();
    };

    render(){
        // const signOutButton =
        //     <NavItem>
        //         <Button bsStyle="info" className="navbar-btn"
        //                 onClick={() => {
        //                     this.props.loginStateHandler(false);
        //                     //this.navigate('/');
        //                 }}><Glyphicon glyph="log-out"/> Sign Out </Button>
        //     </NavItem>;
        //
        // const signInButton =
        //     <NavItem>
        //         <ButtonToolbar>
        //             <Button bsStyle="danger" className="navbar-btn"
        //                     onClick={this.register}><Glyphicon glyph="user"/> Register </Button>
        //             <Button bsStyle="info" className="navbar-btn"
        //                     onClick={() => {
        //                         //this.navigate('/');
        //                         this.props.loginStateHandler(true);
        //                     }}><Glyphicon glyph="log-in"/> Sign In</Button>
        //         </ButtonToolbar>
        //     </NavItem>;

        return(
            <div style={{color:'white'}}>
                <Navbar className="NavBar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">
                                <span className="NavItem">Home Logo</span>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav activeKey={this.state.activeKey} onSelect={this.navigate}>
                            <NavItem eventKey={1} href="#">
                                <span className="NavItem">Link</span>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <span className="NavItem">Link</span>
                            </NavItem>
                            <NavItem eventKey={3} href="#">
                                <span className="NavItem">Link</span>
                            </NavItem>
                            <NavItem eventKey={4} href="#">
                                <span className="NavItem">Link</span>
                            </NavItem>

                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={5}>
                                <Link to="/about">
                                    <span className="NavItem">注册</span>
                                </Link>
                            </NavItem>
                            <NavItem eventKey={6} href="#">
                                <span className="NavItem">登陆</span>
                            </NavItem>
                            <NavDropdown eventKey={7} className="NavItem" title="联系我们" id="basic-nav-dropdown">
                                <MenuItem eventKey={7.1}>Number</MenuItem>
                                <MenuItem eventKey={7.2}>Another action</MenuItem>
                                <MenuItem eventKey={7.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={"/test"}>
                                    Separated Link
                                </MenuItem>
                            </NavDropdown>
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