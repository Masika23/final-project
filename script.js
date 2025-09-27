// Show today's special offer
function showOffer() {
  alert("🎉 Special Offer: Buy 2 Cupcakes, Get 1 Free!");
}

// Form validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you for contacting us, we'll get back to you soon!");

});

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;

  const summary = `
    <h3>Order Summary</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Product:</strong> ${product}</p>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Status:</strong> Order received ✅</p>
  `;

  document.getElementById("orderSummary").innerHTML = summary;
});
