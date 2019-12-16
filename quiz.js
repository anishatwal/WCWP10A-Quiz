document.getElementById("form1").onsubmit=function() {


  one = parseInt(document.querySelector('input[name = "one"]:checked').value);

  two = parseInt(document.querySelector('input[name = "two"]:checked').value);

  three = parseInt(document.querySelector('input[name = "three"]:checked').value);

  four = parseInt(document.querySelector('input[name = "four"]:checked').value);

  five = parseInt(document.querySelector('input[name = "five"]:checked').value);

  six = parseInt(document.querySelector('input[name = "six"]:checked').value);

  seven = parseInt(document.querySelector('input[name = "seven"]:checked').value);

  total= one + two + three + four + five + six + seven;


  document.getElementById("answer").innerHTML = total;

  if(total < 12) {
    document.getElementById("answer2").innerHTML = "You got Dwight!";
  }

  if(total >=12 && total < 17) {
    document.getElementById("answer2").innerHTML = "You got Creed!";
  }

  if(total >=17) {
    document.getElementById("answer2").innerHTML = "You got Michael!";
  }

  return false; // required to not refresh the page; just leave this here
}// end the submit function
