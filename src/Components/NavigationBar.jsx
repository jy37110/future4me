import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



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
            <div>
                <Navbar inverse className="NavBar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="NavItem" href="/">Home Logo</a>
                            {/*<Link to="/">*/}
                                {/*<span className="NavItem">Home Logo</span>*/}
                            {/*</Link>*/}
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav activeKey={this.state.activeKey} onSelect={this.navigate}>
                            <NavItem eventKey={1} href="#">
                                <span className="NavItem">Link1</span>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <span className="NavItem">Link2</span>
                            </NavItem>
                            <NavItem eventKey={3} href="#">
                                <span className="NavItem">Link3</span>
                            </NavItem>
                            <NavItem eventKey={4} href="#">
                                <span className="NavItem">Link4</span>
                            </NavItem>

                        </Nav>
                        <Nav pullRight activeKey={this.state.activeKey} onSelect={this.navigate}>
                            <NavItem eventKey={5} href="#">
                                <span className="NavItem">注册</span>
                            </NavItem>
                            <NavItem eventKey={6} href="#">
                                <span className="NavItem">登陆</span>
                            </NavItem>
                            <NavDropdown eventKey={7} className="NavItem" title="联系我们" id="basic-nav-dropdown">
                                <MenuItem eventKey={7.1}>400-991-5791</MenuItem>
                                <MenuItem eventKey={7.2}>400-991-5792</MenuItem>
                                <MenuItem eventKey={7.3}>在线咨询</MenuItem>
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