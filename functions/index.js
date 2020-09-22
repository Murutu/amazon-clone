const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HT3mLFi3mWinrXB1lpfW9Y1o2W7Qtg3PlO6via0T2hv1gCDIER5gLFggXab4h24gcA7b79oEkOz7eBuHoceRrUK00NI5Dbp3Q"
);


// App config
const app = express();

// Middlewares console.log('THE SECRET >>>', clientSecret)
app.use(cors({ origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request,response) => {
    const total = request.query.total;

    console.log('payment recieved', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

// Listen commands
exports.api = functions.https.onRequest(app)

// http://localhost:5001/challenge-82441/us-central1/api

