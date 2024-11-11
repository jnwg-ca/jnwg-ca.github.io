function checkName() {
  let name = document.getElementById("name").value;
  if (!name || name.length === 0) {
    alert("Please fill out your name!");
    return false;
  }
}
function checkAge() {
  let age = document.getElementById("age").value;
  let p = document.getElementById('age_error');

  if (isNaN(age) || age < 0)
    p.innerHTML = "Invalid age!";
  else
    p.innerHTML = "Age ok.";

  return false;
}
