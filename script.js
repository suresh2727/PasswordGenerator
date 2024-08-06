let range = document.getElementById("rangeSelector");
let selectorvalue = document.getElementById("selectorvalue");
let numbers = document.getElementById("number");
let specialchar = document.getElementById("specialchar");
let upperchar = document.getElementById("uppercase");
let generatebutton = document.getElementById("generatepassword");
let passwordop = document.getElementById("password");

range.addEventListener("input", () => {
  selectorvalue.textContent = range.value;
});

generatebutton.addEventListener("click", () => {
  let length = range.value;
  let number = numbers.checked;
  let specialchar1 = specialchar.checked;
  let uppercase1 = uppercase.checked;
  let password = generatepassword(length, number, specialchar1, uppercase1);
   
    
  passwordop.textContent = password;
});

function generatepassword(length, number, specialchar1, uppercase1) {
  let char1 = "qwertyuiopasdfghjklzxcvbnm";
  if (specialchar1) char1 += "!@#$%^&*()-=_+[]{};/.,<>?";
  if (number) char1 += "0123456789";
  if (uppercase1) char1 += "QWERTYUIOPASDFGHJKLZXCVBNM";
  let password = "";
  for (let i = 0; i < length; i++) {
    let ran = Math.floor(Math.random() * char1.length);
    password += char1[ran];
  }
  console.log(password);
  
  return password;
}
