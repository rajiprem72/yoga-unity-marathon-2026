console.log("script.js loaded");
const scriptURL = "https://script.google.com/macros/s/AKfycbyhBwLFEeoi7qkLt3o2yng11lpHCeMmgjgbd4wdR1lGVxRNeSAg371Ne4uKFtLqYFcNZw/exec";

// Read referral code from URL
const urlParams = new URLSearchParams(window.location.search);
const referralCode = urlParams.get("ref") || "";

document
.getElementById("registrationForm")
.addEventListener("submit", async function (e) {

```
e.preventDefault();

const form = e.target;

const formData = new FormData(form);

// Add referral code to submitted data
formData.append("referralCode", referralCode);

console.log("Referral Code:", referralCode);

try {

  await fetch(scriptURL, {

    method: "POST",

    mode: "no-cors",

    body: formData

  });

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

});
