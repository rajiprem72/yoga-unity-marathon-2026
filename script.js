document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for registering for YOGA UNITY MARATHON – 2026.\n\nYou will now be redirected to Razorpay Payment Gateway.");

    var options = {

        "key": "YOUR_RAZORPAY_KEY",

        "amount": 59900,

        "currency": "INR",

        "name": "Global School of Yoga",

        "description": "YOGA UNITY MARATHON – 2026 Registration",

        "handler": function (response){

            alert(
                "Payment Successful!\n\n" +
                "Thank you for registering.\n\n" +

                "Event Name: YOGA UNITY MARATHON – 2026\n" +

                "Date: Sunday, 28th June 2026\n" +

                "5K Run: 6:00 AM\n" +

                "3K Walkathon: 6:30 AM\n" +

                "Venue: Decathlon Nolambur to Ambattur Telephone Exchange\n\n" +

                "Benefits:\nCertificate\nMedal\nRefreshment\nT-Shirt\nTrophy for Winners"
            );

            // EMAIL + WHATSAPP API Integration can be added here

            console.log(response);

        },

        "theme": {
            "color": "#ff5722"
        }

    };

    var rzp1 = new Razorpay(options);

    rzp1.open();

});
