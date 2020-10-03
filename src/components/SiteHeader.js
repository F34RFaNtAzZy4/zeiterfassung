import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';


class SiteHeader extends Component {
	state = {
		"header_title" : "360ty zeiterfassung",
	}
	render() {
	  return (
		    <div>
				<Grid container={true} direction ="column" spacing = {0} justify="center" alignContent="center">
					<Grid item = {true} sm = "auto">
						<h1>{this.state.header_title}</h1>
					</Grid>
				</Grid>
		    </div>
	  );
	}
}

export default SiteHeader;
