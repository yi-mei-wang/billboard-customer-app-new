import React from "react";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { DOMAIN_URL } from "../../constants";
import AdContainer from "./AdContainer";
// import Summary from "./Summary";

class ExpiredAds extends React.Component {
  state = {
    orders: []
  };

  componentDidMount() {
    let token = localStorage.getItem("jwt");
    axios
      .get(`${DOMAIN_URL}/api/v1/orders/show?q=-1`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log(response);
        this.setState({
          orders: response.data
        });
      })
      .catch(errors => {
        console.log(errors);
      });
  }

  render() {
    const { orders } = this.state;

    const summaryTable = orders.map((order, index) => (
      <>
        <tr key={index}>
          <td>
            <Link to={`/${order.order_id}`}> {order.order_id} </Link>
          </td>
          <td>
            <Moment format="YYYY/MM/DD">{order.start_time}</Moment>
          </td>
        </tr>
      </>
    ));

    const adChild =
      <>
        <h2 className={"pt-4 m-0"}>PAST ADs</h2>
        <span
          className={"underline mb-2"}
          style={{
            backgroundColor: "#ffbf00",
            width: "200px",
            height: "10px",
            display: "inline-block"
          }}
        />
        {orders.length ?
          <Table className={"mt-3"}>
            <tbody>
              <tr>
                <th>Id</th> <th>Date</th>
              </tr>
              {summaryTable}
            </tbody>
          </Table>
          :
          <div>
            Nothing is here. <Link to="/new">Schedule an ad now!</Link>
          </div>}
      </>;

    return (
      <AdContainer child={adChild} />
    );
  }
}
export default ExpiredAds;
