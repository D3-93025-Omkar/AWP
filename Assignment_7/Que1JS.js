
  function isAlphabetOnly(input) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(input);
  }

  const name = document.getElementById("name");
  const birth = document.getElementById("birthD");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const genders = document.querySelectorAll("input[name='gender']");
  const photo = document.getElementById("file");
  const selectCourse = document.getElementById("course");
  const skills = document.querySelectorAll("input[name='skills']");

  const eName = document.getElementById("vName");
  const eEmail = document.getElementById("vEmail");
  const eBirth = document.getElementById("vBirth");
  const ePass = document.getElementById("vPass");
  const eGender = document.getElementById("vGender");
  const ePhoto = document.getElementById("vPhoto");
  const eCourse = document.getElementById("vCourse");
  const eSkill = document.getElementById("vSkill");

  function validatePass(p) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(p);
  }

  function validateDate(d) {
    if (!d) return false;
    const birthDate = new Date(d);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let bMonth = birthDate.getMonth();
    let cMonth = today.getMonth()


    if ((cMonth < bMonth)){
      age--
    }
    
    if (cMonth == bMonth){
      if (today.getDate() < birthDate.getDate() && --age < 18) return false
    }
    
    return age >= 18;
  }

function afterSubmit() {
  let isValid = true;


  if (!isAlphabetOnly(name.value)) {
    eName.innerText = "Only Alphabets Allowed";
    eName.style.color = "red";
    isValid = false;
  } else eName.innerText = "";


  if (!validateDate(birth.value)) {
    eBirth.innerText = "Age must be at least 18 years old.";
    eBirth.style.color = "red";
    isValid = false;
  } else eBirth.innerText = "";

 
  if (!validatePass(pass.value)) {
    ePass.innerText = "Password must be 8–15 chars, with upper, lower, digit & special char.";
    ePass.style.color = "red";
    isValid = false;
  } else ePass.innerText = "";

 
  if (selectCourse.value === "") {
    eCourse.innerText = "Please select a course.";
    eCourse.style.color = "red";
    isValid = false;
  } else eCourse.innerText = "";


  let skillSelected = false;
  skills.forEach((s) => {
    if (s.checked) skillSelected = true;
  });

  if (!skillSelected) {
    eSkill.innerText = "Please select at least one skill.";
    eSkill.style.color = "red";
    isValid = false;
  } else eSkill.innerText = "";

  return isValid;
}


