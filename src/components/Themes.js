import React, {Component} from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

class Widget extends Component {
	state = {
		"theme" : theme,
	}
	useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    }, 
  },
  checked: {},
}));
CustomCheckbox() {
  const classes = useStyles();
}
theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});
	render() {
	  return (
			<ThemeProvider/>
	  );
	}
}

export default Widget;