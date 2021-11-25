let walletData = {
  title: "WALLET",
  description: "Your token balances.",
  data: {
    mithril: 100,
    gold: 1000
  }
};

let profileData = {
  title: "",
  description: "",
  data: ""
};

let tokenData = {
  title: "",
  description: "",
  data: ""
};

function onLoad() {
  walletClicked();
}

function walletClicked() {
  console.log("Wallet clicked.");
  document.getElementById('wallet-data-row').style.display = "inline-block";
  document.getElementById('profile-data-row').style.display = "none";
  document.getElementById('token-data-row').style.display = "none";
}

function profileClicked() {
  console.log("Profile clicked.");
  document.getElementById('wallet-data-row').style.display = "none";
  document.getElementById('profile-data-row').style.display = "block";
  document.getElementById('token-data-row').style.display = "none";
}

function tokenClicked() {
  console.log("Token clicked.");
  document.getElementById('wallet-data-row').style.display = "none";
  document.getElementById('profile-data-row').style.display = "none";
  document.getElementById('token-data-row').style.display = "block";
}
