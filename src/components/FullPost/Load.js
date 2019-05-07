import React from "react";
import "./FullPost.css";

const Load = () => {
	return (
		<p className="FullPost" style={{ textAlign: "center" }}>
			Loading...........!
		</p>
	);
};

const Title = () => {
	return (
		<p className="FullPost" style={{ textAlign: "center" }}>
			Please select a Post !
		</p>
	);
};

export { Load, Title };
