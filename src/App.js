import React, {Component} from 'react';
import './App.css';
import Controls from './components/Controls.js';
import SiteHeader from './components/SiteHeader.js';
import Widget from './components/Widget.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormRow from '@material-ui/core/Grid';

const state = {
		 
	};
	export default function App() {
	  return (
		<div
		>
			<CssBaseline/>
			<Container
			 disableGutters={true}
			>
				<SiteHeader/>
				
				<Grid 
				container
				spacing = {2}
				direction ="row" 
				justify="center" 
				alignContent="center"
				>
					<Grid
					item
					sm = {6}
					>
						<Grid 
						container
						spacing = {2}
						direction ="column" 
						justify="center" 
						alignContent="center"
						>
							<Grid
							item
							sm = {6}
							>
								<Widget/>
								<Widget/>
							</Grid>
						</Grid>
					</Grid>
					<Grid
					item
					sm = {6}
					>
						<Grid
						container
						spacing = {2}
						direction ="row" 
						justify="center" 
						alignContent="center"
						>
							<h2>Excel List</h2>
						</Grid>
					</Grid>
				</Grid>
	   	 	</Container>
		</div>
	  );
}
