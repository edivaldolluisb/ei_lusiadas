/* Read more and read less*/

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("Spmore");
    var btnText = document.getElementById("rmSp");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }