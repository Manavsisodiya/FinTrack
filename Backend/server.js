// In routes/callback.js or directly in your main file
app.post('/setu-callback', (req, res) => {
  const payload = req.body;
  console.log("🔔 Received callback from Setu:", payload);

  // You can store or process the payload here
  res.status(200).send("Callback received");
});
app.use(express.json());
