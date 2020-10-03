import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Controls extends Component {
	state={
		"text" : "einchecken",
	}
	render() {
	  return (
		<Button>
			{this.state.text}
		</Button>
	  );
	}
}

export default Controls;
