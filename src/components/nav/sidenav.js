import React, { Component } from 'react';

class SideNav extends Component {
    componentDidMount() {
        const config = {
            draggable: true,
            inDuration: 350,
            outDuration: 350,
            preventScrolling: true
        }

        M.Sidenav.init(this.sidenav, config);
    }
    render() {
        console.log('props', this.props);
        return (
            <ul id='sidenav' ref={(element) => { this.sidenav = element }} className="sidenav">
                {this.props.links}
            </ul>
        )
    }
}

export default SideNav;