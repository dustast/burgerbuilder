import React, {Component} from 'react'
import Auxx from '../../Auxx'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'
class Layout extends Component {
render() {

            return(
            <Auxx>
                 <Toolbar />
                 <Sidebar />
            <div>Sidebar Backdrop</div>
            <main className = {classes.Content}>{this.props.children}</main>
            </Auxx>

                 );

        }   
                            }



export default Layout;