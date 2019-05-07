import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";
import Main from "./MainPost";
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
				<Main
					className="FullPost"
					title={this.state.loadedPost.title}
					body={this.state.loadedPost.body}
					onClick_={() => this.deletePostHandler()}
				/>
			);
		}
		return post;
	}
}

export default FullPost;
