import React, {Component} from 'react';

import Hoc from '../../../hoc/Hoc/Hoc';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        );
      });
    return (
      <Hoc>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Total Price(Rs): <strong>{this.props.price}</strong></p>
        <p>Continue to Checkout?</p>
        <Button
          clicked={this.props.purchaseCanceled}
          btnType="Danger">
          CANCEL
        </Button>
        <Button
          clicked={this.props.purcheaseContinued}
          btnType="Success">
          CONTINUE
        </Button>
      </Hoc>
    );
  }
}

export default OrderSummary;