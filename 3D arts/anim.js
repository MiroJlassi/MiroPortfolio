var i = 0;

var t = ["../3D arts/imgss/500.png",
  "../3D arts/imgss/400.png",
  "../3D arts/imgss/300.png",
  "../3D arts/imgss/200.png",
  "../3D arts/imgss/200.png"];

function AutoChangeImage()
{
  document.getElementById("japimg").src = t[i];
  i++;

  if (i == 6)
  {
    i = 0;
  }

  setTimeout(function () {
    AutoChangeImage();
  }, 2000);
}

AutoChangeImage();
