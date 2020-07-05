import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setName, setNumber } from '../redux/actions/userActions'

class UserComponent extends Component {
  constructor() {
    super();

    this.state = {
      fistName: "",
      lastName: "",
      isEdit: false,
    };
  }

  __inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  __formSubmit = () => {
    let { firstName, lastName } = this.state;
    this.props.setName({ firstName, lastName });
    this.__toggleEdit();
  };

  __toggleEdit = () => {
    let { firstName, lastName } = this.props.user;
    this.setState({
      firstName,
      lastName,
      isEdit: this.state.isEdit ? false : true,
    });
  };

  render() {
    let { user } = this.props;
    return (
      <div>
        <div>
          Number: {user.number}{" "}
          <Button
            onClick={() => {
              this.props.setNumber();
            }}
            size="sm"
            color="primary"
          >
            +
          </Button>
        </div>
        <p>
          Name: {user.firstName} {user.lastName}{" "}
          <button className="btn" onClick={this.__toggleEdit}>
            <FontAwesomeIcon icon={["fas", "edit"]} />
          </button>
        </p>
        <p>
          Name from API: {user.first_name} {user.last_name}{" "}
        </p>
        {this.state.isEdit && (
          <div className="row">
            <div className="col-sm-3">
              <input
                defaultValue={this.state.firstName}
                onChange={this.__inputHandler}
                style={{ marginBottom: 10 }}
                placeholder="First Name"
                name="firstName"
                className="form-control"
              />
            </div>
            <div className="col-sm-3">
              <input
                defaultValue={this.state.lastName}
                onChange={this.__inputHandler}
                style={{ marginBottom: 10 }}
                placeholder="Last Name"
                name="lastName"
                className="form-control"
              />
            </div>
            <div className="col-sm-3">
              <button
                onClick={this.__formSubmit}
                style={{ width: "100%" }}
                className="btn btn-info"
              >
                Update
              </button>
            </div>
          </div>
        )}
        This is a user component
      </div>
    );
  }
}

export default connect((store) => {
    return {
      user: store.user,
    };
  }, {setName,setNumber})(UserComponent);
