import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
};

function Main(props) {
	const { classes } = props;
	// const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={props.className}>
			<CardContent>
				<Typography variant="h5" component="h2">
					{props.title}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{props.title}
				</Typography>
				<Typography component="p">
					{props.body}
					<br />
					{'"a benevolent smile"'}
				</Typography>
				<Button
					variant="outlined"
					color="secondary"
					size="small"
					onClick={props.onClick_}>
					Delete
				</Button>
			</CardContent>
		</Card>
	);
}

Main.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
