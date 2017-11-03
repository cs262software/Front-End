import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MainHeader extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                	<div className="container">

                		<div className="navbar-header">
                			<a className="navbar-brand" href="#">Theatre Software Suite</a>
                		</div>

                		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        	<ul className="nav navbar-nav navbar-right">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/schedule'>Schedule</Link></li>
                                <li><Link to='/blocking'>Blocking</Link></li>
                                <li><Link to='/files'>Files</Link></li>
                                <li className="dropdown">
                					<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Director<span className="caret"></span></a>
                					<ul className="dropdown-menu">
                                        <li><Link to='/director/manage-sharing'>Manage Sharing</Link></li>
                                        <li><Link to='/director/manage-crew'>Manage Crew</Link></li>
                					</ul>
                				</li>
                			</ul>

                		</div>

                	</div>
                </nav>

            </div>
        );
    }
}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        // prop: reduxValue
    };
}

export default connect(
    mapStateToProps,
    {/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
        // Name of imported action.
    }
)(MainHeader);
