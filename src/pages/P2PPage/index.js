import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from "./../../components/CheckoutForm";

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class P2PPage extends Component {

    constructor() {
        super();
        this.state = {
            stripe: null
        }
    }

    componentDidMount() {
        if (window.Stripe) {
            this.setState({ stripe: window.Stripe('pk_test_bEa1MzXESTbRKCAgrpCjmHH000IrRQU0TB') });
        } else {
            document.querySelector('#stripe-js').addEventListener('load', () => {
                // Create Stripe instance once Stripe.js loads
                this.setState({ stripe: window.Stripe('pk_test_bEa1MzXESTbRKCAgrpCjmHH000IrRQU0TB') });
            });
        }
    }

    onCheckoutFormSubmit(result) {
        console.log("result is ")
        console.log(result);
        fetch("/charge", {
            method: "POST",
            body: JSON.stringify(result),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(result => console.log(result))
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        if (!this.state.stripe) {
            return (<div />);
        }

        const paymentRequest = this.state.stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Demo payment request',
                amount: 25,
            },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        return (
            <div className={`my-24`}>
                <div className={`p-6 bg-white rounded-lg shadow-lg`}>
                    <p className={`text-2xl`}> {`Weplay Pro`} </p>
                    <p className={`text-2xl`}> {`20$`} </p>
                    <br />
                    <StripeProvider stripe={this.state.stripe} className={`pt-16`}>
                        <Elements>
                            <CheckoutForm
                                price="25"
                                paymentRequest={paymentRequest}
                                onSubmit={this.onCheckoutFormSubmit} />
                        </Elements>
                    </StripeProvider>
                </div>
            </div>
        )
    }
}
