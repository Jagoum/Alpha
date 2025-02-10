const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function createPaymentSession(req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ 
        price_data: { currency: "usd", product_data: { name: "Subscription" }, unit_amount: 5000 }, 
        quantity: 1 
      }],
      mode: "payment",
      success_url: "http://localhost:3000/dashboard",
      cancel_url: "http://localhost:3000/",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createPaymentSession };
