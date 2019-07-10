import express from "express";
import stripe from "stripe";

let router = express.Router();
const stripe_instance = stripe('sk_test_LCwlgZu3SBDKwfIHkZo9kw2x00SjMcYvQ2');

router.post("/", (req, res) => {

    const {
        token
    } = req.body;

    (async () => {
        console.log("sending the payment request!")
        await stripe_instance.charges.create({
            amount: 2500,
            currency: 'usd',
            description: 'Example charge',
            source: token.id,
            statement_descriptor: 'Custom descriptor',
        });
    })().then(res => {
        console.log("result: \n" + res)
    }).catch(err => {
        console.log(err)
    });
})

export default router;