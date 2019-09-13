import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import BottomBar from "../molecules/Bottom";
import CallToAction from "../molecules/CallToAction";
import Navbar from "../molecules/Navbar";
import SideBar from "../molecules/SideBar";
import ExpiredAds from "../molecules/ads/ExpiredAds";
import ResultMessage from "../molecules/ResultMessage";
import NewAd from "../molecules/ads/NewAd";
import ScheduledAds from "../molecules/ads/ScheduledAds";
import Selection from "../molecules/ads/Selection";
import Summary from "../molecules/ads/Summary";
import background from "../images/background.jpg"

const Main = styled.div`
  // padding-top: 50px;
  background-image: url(${background});
  background-size: 100vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
`;


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, currentUser } = this.props;

    // if (!currentUser) return <Redirect to="/login" />;

    let Container =
      this.props.match.url === "/" ?
        // <Selection history={history} /> 
        <CallToAction />
        :
        <h1 />;

    return (
      <>
        {/* <Navbar history={history} removeUser={this.props.removeUser} /> */}
        <SideBar history={history} removeUser={this.props.removeUser} />

        <Main>
          <Switch>
            <Route
              exact
              path="/new"
              component={props => <NewAd {...props} />}
            />
            <Route
              exact
              path="/scheduled"
              component={props => <ScheduledAds {...props} />}
            />
            <Route
              exact
              path="/expired"
              component={props => <ExpiredAds {...props} />}
            />
            <Route exact path="/result" component={props => <ResultMessage {...props} />} />
            <Route
              exact
              path="/:id"
              component={props => (
                <Summary {...props} orderId={props.match.params.id} />
              )}
            />
          </Switch>

          {Container}

          {currentUser !== null && <BottomBar history={history} />}

        </Main>
      </>
    );
  }
}

export default Homepage;
