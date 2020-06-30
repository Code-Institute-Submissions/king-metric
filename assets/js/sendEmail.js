function sendMail(contactForm) {
  emailjs
    .send("gmail", "ms2_project", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      contact_message: contactForm.mainmessage.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );

  document.getElementById("contactForm").reset();

  alert("Thanks you for testing my MS2 Contact Form! 👍🏼 😁");

  return false; // To block from loading a new page
}
