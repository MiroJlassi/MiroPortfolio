function _copyemail (){
  var copyText = document.getElementById("email").innerHTML;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("EMAIL COPIED");
  });
}

function _copydiscord (){
  var copyText = document.getElementById("discordd").innerHTML;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("DISCORD COPIED");
  });
}
