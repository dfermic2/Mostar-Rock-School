<template>
  <div style="background: #222; padding: 5rem">
    <DonationType :donation-type="donationTypes[0]" />
  </div>
</template>
<script setup>
const donationTypes = [
  {
    id: 1,
    title: "Online donation",
    description:
      "Visit our secure online donation platform to contribute easily and securely. Choose a one-time donation or become a monthly supporter, providing sustained support for our programs.",
    btnIcn: "ion:heart",
    btnText: "DONATE NOW!",
  },
  {
    id: 2,
    title: "Corporate Sponsorship",
    description:
      "Explore our corporate sponsorship opportunities and make a lasting impact as a business. Together, we can build stronger communities through the power of music.",
    btnIcn: "",
    btnText: "CONTACT US",
  },
  {
    id: 3,
    title: "In-Kind Donations",
    description:
      "If you have musical instruments, equipment, or other resources that can benefit our programs, consider making an in-kind donation. Your contribution directly supports the growth and development of our students.",
    btnIcn: "",
    btnText: "GET IN TOUCH",
  },
  {
    id: 4,
    title: "Fundraising Events",
    description:
      "Get involved in our fundraising events or organize your own to support the Mostar Rock School. From benefit concerts to charity auctions, there are various ways to rally support and make a meaningful impact.",
    btnIcn: "",
    btnText: "LET'S TALK ABOUT YOUR IDEAS",
  },
];
</script>
