import React, { Component } from 'react';
import "../footer/footer.css"
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>    
                <div className='footer'>
                    <span> &copy; 2023 Developed by <i>PHAKISO</i></span>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer;