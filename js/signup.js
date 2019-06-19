const elNewId = document.querySelector('.newId');
const elNewName = document.querySelector('.newName');
const elNewPassword = document.querySelector('.newPassword');
const elConfirmPassword = document.querySelector('.confirmPassword');
const elSignupBtn = document.querySelector('.signup-btn');
const elErrorMessage = document.querySelector('.errorMessage');

const changeBtnColor = () => {
  if(elNewId.value !== "" && elNewName.value !== ""
  && elNewPassword.value !== "" && elConfirmPassword.value !== "") {
    elSignupBtn.style.backgroundColor = "#0099ff";
  } else {
    elSignupBtn.style.backgroundColor = "gray";
  }
};

const confirmPassword = () => {
  if(elNewPassword.value !== elConfirmPassword.value) {
    elErrorMessage.innerHTML = "비밀번호 불일치";
  } else {
    elErrorMessage.innerHTML = "";
  }
};

const checkPasswordLength = () => {
  if(elNewPassword.value.length < 6 || elConfirmPassword.value.length < 6) {
    alert("비밀번호는 6글자 이상으로 설정해야 합니다.");
    event.preventDefault();
    return;
  }
};

elNewId.addEventListener('keyup', changeBtnColor);
elNewName.addEventListener('keyup', changeBtnColor);
elNewPassword.addEventListener('keyup', changeBtnColor);
elConfirmPassword.addEventListener('keyup', changeBtnColor);

elNewPassword.addEventListener('keyup', confirmPassword);
elConfirmPassword.addEventListener('keyup', confirmPassword);

elSignupBtn.addEventListener('click', checkPasswordLength);