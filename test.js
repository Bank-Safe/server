const axios = require("axios");

const url =
  "https://api.monerium.dev/auth?&client_id=a08bfa22-e6d6-11ed-891c-2ea11c960b3f&code_challenge=9Y__uhKapn7GO_ElcaQpd8C3hdOyqTzAU4VXyR2iEV0";
const username = "monerium@guerrillamail.com";
const password = "Passw0rd!";

axios
  .get(url, {
    auth: {
      username: username,
      password: password,
    },
  })
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
