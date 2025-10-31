// --- Universal Form Submitter ---
async function handleFormSubmit(formId, endpoint) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    try {
      // Replace localhost:4000 with your backend URL when deployed
      const res = await fetch("http://localhost:4000" + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.message || "✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      alert("❌ Something went wrong. Please try again later.");
      console.error(error);
    }
  });
}
handleFormSubmit("visaForm", "/visa");
// Attach all your forms
handleFormSubmit("contactForm", "/contact");
handleFormSubmit("visaForm", "/visa");
handleFormSubmit("eventForm", "/event");
handleFormSubmit("ticketForm", "/ticket");
handleFormSubmit("umrahForm", "/umrah");
// JavaScript to enable left/right buttons
document.querySelector('.left-arrow').addEventListener('click', function() {
  // Enable the action for left arrow
});

document.querySelector('.right-arrow').addEventListener('click', function() {
  // Enable the action for right arrow
});
