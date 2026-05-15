const scriptURL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL_HERE";

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

      alert("Error submitting form.");

      console.error(error);

    }

});
