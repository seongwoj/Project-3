import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Users() {
  // Setting our component's initial state
  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadUsers()
  }, [])

  // Loads all users and sets them to users
  function loadUsers() {
    API.getUsers()
      .then(res => 
        setUsers(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a user from the database with a given id, then reloads users from the db
  function deleteUser(id) {
    API.deleteUser(id)
      .then(res => loadUsers())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveUser method to save the user data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      API.saveUser({
        email: formObject.email,
        password: formObject.password

      })
        .then(res => loadUsers())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(formObject.email && formObject.password)}
                onClick={handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Users</h1>
            </Jumbotron>
            {users.length ? (
              <List>
                {users.map(user => (
                  <ListItem key={user._id}>
                    <Link to={"/users/" + user._id}>
                      <strong>
                        {user.email} by {user.password}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteUser(user._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Users;
