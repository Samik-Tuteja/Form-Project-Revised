const name = document.querySelector("input#name");
const form = document.querySelector("form");
const email = document.querySelector("input#email");
const select = document.querySelector("select#class");
const section = document.querySelector("select#section");

function filter() {
  if (select.selectedIndex === 0) {
    var array = "Select a Section,".split(",");
    section.disabled = true;
  } else if (
    select.selectedIndex === 1 ||
    select.selectedIndex === 2 ||
    select.selectedIndex === 3
  ) {
    section.disabled = false;
    var array = "Select a Section,A,B,C,D,E,F,G,H,I,J".split(",");
  } else if (select.selectedIndex === 4 || select.selectedIndex === 5) {
    section.disabled = false;
    var array = "Select a Section,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O".split(",");
  } else if (select.selectedIndex === 6 || select.selectedIndex === 7) {
    section.disabled = false;
    var array = "Select a Section,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X".split(
      ","
    );
  }
  section.textContent = null;
  for (var i in array) {
    var option = document.createElement("option");
    option.textContent = array[i];
    section.appendChild(option);
  }
}
function validateForm() {
  if (name.value == "") {
    alert("Name can't be empty");
    return false;
  } else if (email.value == "") {
    alert("Email must not be empty");
    return false;
  } else if (select.selectedIndex === 0) {
    alert("Invalid class");
    document.getElementById("section").disabled = true;
    return false;
  } else if (section.selectedIndex === 0) {
    alert("Invalid section");
    return false;
  }
  return true;
}

form.addEventListener("submit", function myfun(e) {
  e.preventDefault();
  const details = [
    "Hello, " +
      name.value +
      " " +
      "<" +
      email.value +
      "> " +
      "from " +
      select.value +
      " " +
      section.value,
  ];
  if (validateForm() == true) {
    alert(details);
    return;
  }
});
