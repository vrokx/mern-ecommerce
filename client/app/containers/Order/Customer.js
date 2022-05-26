/*
 *
 * Customer
 *
 */

import React from "react";

import { connect, useDispatch, useSelector } from "react-redux";

import actions from "../../actions";
import { ROLE_ADMIN } from "../../constants";
import SubPage from "../../components/Manager/SubPage";
import OrderList from "../../components/Manager/OrderList";
import OrderSearch from "../../components/Manager/OrderSearch";
import NotFound from "../../components/Common/NotFound";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import { fetchOrders } from "./actions";

function Customer(props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetchOrders()(dispatch);
  }, []);

  const orders = useSelector((state) => state.order.orders);
  const { history, user, isLoading, searchOrders } = props;
  return (
    <div className="order-dashboard">
      <SubPage
        title="Customer Orders"
        actionTitle="My Orders"
        handleAction={() =>
          user.role === ROLE_ADMIN && history.push("/dashboard/orders")
        }
      >
        <OrderSearch onSearchSubmit={searchOrders} />
        {isLoading ? (
          <LoadingIndicator inline />
        ) : orders.length > 0 ? (
          <OrderList orders={orders} />
        ) : (
          <NotFound message="No orders found." />
        )}
      </SubPage>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
    orders: state.order.searchedOrders,
    isLoading: state.order.isLoading,
    isOrderAddOpen: state.order.isOrderAddOpen,
  };
};

export default connect(mapStateToProps, actions)(Customer);
