import React, { Component } from 'react'
import {
    CardElement, injectStripe, PaymentRequestButtonElement,
} from 'react-stripe-elements'

class CheckoutForm extends Component {

    state = {
        error: ""
    }

    cardChanged = ({ error }) => {
        if (error) {
            console.log(error);
            this.setState({ error: error.message });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.stripe);
        if (this.props.stripe) {
            this.props.stripe.createToken().then(this.props.onSubmit)
        } else {
            console.log("Stripe hasn't loaded yet!")
        }
    }

    render() {

        const {
            price,
            paymentRequest
        } = this.props;

        return (
            <form action="/charge" method="POST" id="payment-form">
                <label className={`text-indigo-600`}>Debit or Credit card</label>
                <div className={`py-4 px-2 mt-2 border-solid border rounded-sm border-indigo-600 shadow-inner shadow-lg`}>
                    <CardElement onChange={this.cardChanged} />
                </div>
                <div className={`color-red-500`}>
                    {this.state.error}
                </div>
                <hr />
                {
                    !paymentRequest.canMakePayment() ?
                        <PaymentRequestButtonElement paymentRequest={paymentRequest} /> : <div />
                }
                <br />
                <button className={`btn btn-indigo  px-4`} type="submit" onClick={this.handleSubmit}>
                    <span className={`mx-6`}>Pay ${price}</span>
                </button>

            </form>
        )
    }
}

export default injectStripe(CheckoutForm);
