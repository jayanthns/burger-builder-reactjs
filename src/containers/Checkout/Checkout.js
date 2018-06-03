import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    if(this.props.ings) {
      let purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
      return (
        <div>
          { purchasedRedirect }
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCanceled={this.checkoutCanceledHandler}
            checkoutContinued={this.checkoutContinuedHandler} />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}/>
        </div>
      );
    }
    else {
      return <Redirect to="/"/>;
    }
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilderReducer.ingredients,
    purchased: state.orderReducer.purchased
  }
};

export default connect(mapStateToProps)(Checkout);