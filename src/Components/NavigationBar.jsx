import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, InputGroup, FormControl, DropdownButton, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom'

class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeKey: '/',
            searchKey: '小学',
        }
    }

    navigate = (eventKey) => {
        if(eventKey !== ""){
            this.setState({activeKey: eventKey});
            window.location = "#/" + eventKey;
        }
    };

    handleTest = () => {
        //alert("this.props.userloggedin: " + this.props.userLoggedIn + "\n this.props.user: " + JSON.stringify(this.props.currentUser));
    };

    handleLogout = () => {
        this.props.loginStateHandler(false,"");
        //window.location = "#/redirect/LogoutSuccess";
    };

    handleSearchClick = () => {
        console.log(this.state.searchKey);
    };

    render(){
        const signInButton =
            <NavItem eventKey={"login"}>
                <span className="NavItemTop">登陆</span>
            </NavItem>;
        // const signOutButton =
        //     <NavItem eventKey={"redirect/LogoutSuccess"} href="#">
        //         <span className="NavItem" onClick={this.handleLogout}>注销</span>
        //     </NavItem>;
        // const userName =
        //     <NavItem eventKey={""} href="#">
        //         <span className="NavItem">欢迎回来 {this.props.currentUser.firstname}</span>
        //     </NavItem>;

        const signOut =
            <NavDropdown eventKey={""} className="NavItemTop" title={"欢迎回来" + this.props.currentUser.firstname} id="basic-nav-dropdown">
                <MenuItem eventKey={1}>我的课程</MenuItem>
                <MenuItem eventKey={2}>个人档案</MenuItem>
                <MenuItem eventKey={3}>偏好设置</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={"redirect/LogoutSuccess"} onClick={this.handleLogout}>注销</MenuItem>
            </NavDropdown>;

        return(
            <div>
                <Navbar inverse className="NavBarTop"  style={{height:30,backgroundColor:'rgb(31,61,101)',marginBottom:0}}>
                    <Navbar.Collapse>
                        <Nav className="myNavTop">
                            <NavItem>
                                <span className="NavItemTop" style={{font:"FangSong"}}>新 西 兰 教 育 全 攻 略</span>
                            </NavItem>
                        </Nav>
                        <Nav pullRight className="myNavTop" activeKey={this.state.activeKey} onSelect={this.navigate}>
                            <NavItem eventKey={"register"}>
                                <span className="NavItemTop">注册</span>
                            </NavItem>

                            <NavItem eventKey={""}>
                                <span className="NavItemTop">|</span>
                            </NavItem>

                            {this.props.userLoggedIn ? signOut : signInButton}

                            <NavItem eventKey={""}>
                                <span className="NavItemTop">|</span>
                            </NavItem>

                            <NavDropdown eventKey={7} className="NavItemTop" title="+64 9 392 9218(新西兰时间：9:00am-6:00pm)" id="basic-nav-dropdown">
                                <MenuItem eventKey={7.1}>二维码缺失</MenuItem>
                                <MenuItem eventKey={7.2}>二维码缺失</MenuItem>
                                <MenuItem eventKey={7.3}>二维码缺失</MenuItem>
                            </NavDropdown>
                            {/*{this.props.userLoggedIn ? userName : null}*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar className="NavBarBottom" style={{height:60,marginBottom:0,backgroundColor:'white'}}>
                    <Navbar.Collapse>
                        <Nav className="myNavBottom" activeKey={this.state.activeKey} onSelect={this.navigate}>
                            <NavItem className="myNavItemBottomImg" eventKey={" "}>
                                <span style={{width:125,height:59,padding:0,margin:'0 auto',display:'block'}}>
                                    <img src={"/Images/logo.png"} style={{weight:'100%', height:'100%'}} alt="200X100"/>
                                </span>
                            </NavItem>
                            <NavItem className="myNavItemBottomOthers" eventKey={1}>
                                <span className="NavItemBottom">Link1</span>
                            </NavItem>
                            <NavItem className="myNavItemBottomOthers" eventKey={2}>
                                <span className="NavItemBottom">Link2</span>
                            </NavItem>
                            <NavItem className="myNavItemBottomOthers" eventKey={"redirect/ResetPasswordSuccess"}>
                                <span className="NavItemBottom" onClick={this.handleTest}>Test Link</span>
                            </NavItem>
                            <NavItem className="myNavItemBottomOthers" eventKey={4}>
                                <span className="NavItemBottom">Link4</span>
                            </NavItem>

                        </Nav>
                        <Nav pullRight className="myNavBottom">
                            <FormGroup style={{width:300,marginTop:15}}>
                                <InputGroup>
                                    <DropdownButton
                                        onSelect={eventKey => this.setState({searchKey:eventKey})}
                                        componentClass={InputGroup.Button}
                                        id="input-dropdown-addon"
                                        title={this.state.searchKey}
                                    >
                                        <MenuItem eventKey="小学" >小学</MenuItem>
                                        <MenuItem eventKey="初中" >初中</MenuItem>
                                        <MenuItem eventKey="高中">高中</MenuItem>
                                        <MenuItem eventKey="私立高中">私立高中</MenuItem>
                                        <MenuItem eventKey="国立理工">国立理工</MenuItem>
                                        <MenuItem eventKey="国立大学">国立大学</MenuItem>

                                    </DropdownButton>

                                    <FormControl type="text" placeholder="请输入搜索内容" />

                                    <InputGroup.Button>
                                        <Button onClick={this.handleSearchClick}>
                                            <span className="glyphicon glyphicon-search" aria-hidden="true"/>
                                        </Button>
                                    </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;