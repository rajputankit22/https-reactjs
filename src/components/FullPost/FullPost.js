import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

import "./FullPost.css";
// import Title from "./title";
import { Load, Title } from "./Load";

class FullPost extends Component {
	state = {
		loadedPost: null
	};

	componentDidUpdate() {
		if (this.props.id) {
			if (
				!this.state.loadedPost ||
				(this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
			) {
				axios
					.get("/posts/" + this.props.id)
					.then(response => {
						this.setState({ loadedPost: response.data });
						console.log(this.state.loadedPost);
					})
					.catch(error => {
						console.log("Error");
					});
			}
		}
	}

	deletePostHandler = () => {
		axios.delete("/posts/" + this.props.id).then(response => {
			console.log(response);
		});
	};

	render() {
		let post = <Title />;
		if (this.props.id) {
			post = <Load />;
		}
		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<Button
						variant="outlined"
						color="secondary"
						size="small"
						onClick={() => this.deletePostHandler()}>
						Delete
					</Button>
				</div>
			);
		}
		return post;
	}
}

export default FullPost;
