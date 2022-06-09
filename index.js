function copyToClipboard() {
  var copyText = document.getElementById("mail").innerHTML;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    alert("Copied to clipboard");
  });
}
