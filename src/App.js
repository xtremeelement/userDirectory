import React, { useState, useEffect } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { UserList, UserListItem } from "./components/UserList";
import { Container, Row, Col } from "./components/Grid";

function App() {
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    setUserSearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  const loadUsers = () => {
    API.getUsers(userSearch)
      .then(res => setUsers(res.data.results))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="userSearch"
                      value={userSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a User"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            <UserList>
              {users.map(user => {
                return (
                  <UserListItem
                    key={user.id.value}
                    fName={user.name.first}
                    lName={user.name.last}
                    phone={user.cell}
                    email={user.email}
                    thumbnail={user.picture.thumbnail}
                  />
                );
              })}
            </UserList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
