import React from "react";
import LoginForm from "../molecules/LoginForm";
import SignUpForm from "../molecules/SignUpForm";
import { Redirect } from "react-router-dom";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginForm: this.props.match.path === "/login"
    };
  }

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      isLoginForm: !this.state.isLoginForm
    });
  };

  render() {
    const { currentUser } = this.props;
    if (currentUser) return <Redirect to="/" />;
    const { isLoginForm } = this.state;
    let Container =
      isLoginForm ? (
        <LoginForm
          handleToggle={this.handleToggle}
          setUser={this.props.setUser}
          {...this.props}
        />
      ) : (
          <SignUpForm
            handleToggle={this.handleToggle}
            setUser={this.props.setUser}
            {...this.props}
          />
        );

    return <div className="formDis">{Container}</div>;
  }
}

export default FormContainer;
