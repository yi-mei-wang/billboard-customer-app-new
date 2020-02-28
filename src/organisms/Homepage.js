import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import BottomBar from "../molecules/Bottom";
import Headings from "../molecules/Headings";
import HowDoesItWork from "../molecules/HowDoesItWork";
// import Navbar from "../molecules/Navbar";
import SideBar from "../molecules/SideBar";
import ExpiredAds from "../molecules/ads/ExpiredAds";
import ResultMessage from "../molecules/ResultMessage";
import NewAd from "../molecules/ads/NewAd";
import ScheduledAds from "../molecules/ads/ScheduledAds";
// import Selection from "../molecules/ads/Selection";
import Summary from "../molecules/ads/Summary";
import background from "../images/background.jpg"

const Main = styled.div`
background-color: #002366;
min-height: 100vh;
`;
// padding-bottom: 125px;

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-size: 100vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  `;

class Homepage extends React.Component {

  render() {
    const { history, currentUser } = this.props;

    if (!currentUser) return <Redirect to="/login" />;

    let Container =
      this.props.match.url === "/" &&
      // <Selection history={history} /> 
      <>
        <Headings />
        <HowDoesItWork history={history} />
      </>


    return (
      <>
        {/* <Navbar history={history} removeUser={this.props.removeUser} /> */}
        <SideBar history={history} removeUser={this.props.removeUser} />
        {/* <BackgroundImage /> */}
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
