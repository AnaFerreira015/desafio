var admin = require("firebase-admin");

var serviceAccount = require("./chave.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://api-handtalk.firebaseio.com/"
});

module.exports = admin.database().ref();
