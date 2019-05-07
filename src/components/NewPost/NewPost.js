import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max"
  };

  postDataHandler() {
    const data = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    };
    axios
      .post("/posts", data)
      .then(response => {
        console.log("Data Posted");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
          <option value="Manu">Zaitech</option>
          <option value="Manu">Ankit</option>
        </select>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => this.postDataHandler()}
        >
          Add Post
        </Button>
      </div>
    );
  }
}

export default NewPost;
