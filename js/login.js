const elLoginBtn = document.querySelector('.login-btn');
const elInputId = document.querySelector('.enterId');
const elInputPassword = document.querySelector('.enterPassword');

const changeBtnColor = () => {
  if(elInputId.value !== "" && elInputPassword.value !== "") {
    elLoginBtn.style.backgroundColor = "#0099ff";
  } else {
    elLoginBtn.style.backgroundColor = "gray";
  }
};

elInputId.addEventListener('keyup', changeBtnColor);
elInputPassword.addEventListener('keyup', changeBtnColor);