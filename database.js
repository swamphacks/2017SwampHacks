$(function() {
  var config = {
    apiKey: "AIzaSyCKrjgs7TMiPDl-nqaqnBTAhigNrNszQPk",
    authDomain: "swamphacks-a6338.firebaseapp.com",
    databaseURL: "https://swamphacks-a6338.firebaseio.com",
    storageBucket: "swamphacks-a6338.appspot.com",
    messagingSenderId: "949283718048"
  };
  firebase.initializeApp(config);
  $('.email-form').on('submit', event => {
    event.preventDefault();
    var email = $("#email").val();
    firebase.database().ref('subscribed-users').push({
      email
    }).then(() =>{
      $('.submitted').text( "Thanks for subscribing!" ).show().fadeOut( 3000 );
    }).then(() => {
      //make the button change colors
      $('#subscribe').css('color', '#4d94ff');
    });
  });
});
