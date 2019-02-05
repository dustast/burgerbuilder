import React, {Component} from 'react'
import Auxx from '../../Auxx'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'
class Layout extends Component {
          state = {
               showSideDrawer: true
          }

     sideDrawerClosedHandler = () => {
          this.setState({
               showSideDrawer:false
          });
     }

     sideDrawToggleHandler = () => {
          this.setState((prevState) => {
               return {showSideDrawer: !prevState.showSideDrawer}
          });
     }
render() {
return(
            <Auxx>
                 <Toolbar drawtoggle = {this.sideDrawToggleHandler}/>
                 <Sidebar closed = {this.sideDrawerClosedHandler} open = {this.state.showSideDrawer} />
            <main className = {classes.Content}>{this.props.children}</main>
            </Auxx>

                 );

        }   
                            }



export default Layout;