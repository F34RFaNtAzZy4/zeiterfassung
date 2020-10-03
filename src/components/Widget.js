import React, {Component} from 'react';
import Controls from './Controls.js';
import Grid from '@material-ui/core/Grid';


class Widget extends Component {
	state = {
		"sm" : 6
	}
	render() {
	  return (
				<Grid 
				item
				sm = {this.state.sm} 
				>
					<Grid
					container
					direction ="column" 
					spacing = {2} 
					justify="center" 
					alignContent="center"
					>
						<Controls/>
					</Grid>
				</Grid>
	  );
	}
}

export default Widget;