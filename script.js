const scriptURL = "https://script.google.com/macros/s/AKfycbyhBwLFEeoi7qkLt3o2yng11lpHCeMmgjgbd4wdR1lGVxRNeSAg371Ne4uKFtLqYFcNZw/exec";

document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (e) {

    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    try {

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData
      });

      const result = await response.text();

      alert(
        "Thank you for registering for YOGA UNITY MARATHON – 2026.\n\n" +
        "You will receive Email and WhatsApp confirmation shortly."
      );

      form.reset();

    } catch (error) {

  console.error(error);

  alert(
    "Error submitting form.\n\n" +
    error.message
  );

}
