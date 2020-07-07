import React, { Component } from "react";
import API from "../utils/dogImgAPI";
import Container from "./Container";
import SearchResults from "./SearchResults";
import { connect } from "react-redux";
import Alert from "./Alert";

class Search extends Component {
  state = {
    results: [],
    error: ""
  };

 
  componentDidMount() {
 
    API.getDogsOfBreed(this.props.auth.user.icon)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({ results: res.data.message, error: "" });
  
    })
    .catch(err => this.setState({ error: err.message }));
  }


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});




export default connect(
  mapStateToProps,
  { SearchResults }
)(Search);
