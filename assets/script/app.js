const BODY = document.getElementById('body_container');
const BACKDROP = document.getElementById('backdrop');
const GRATITUDE = document.getElementById('gratitude').parentElement;
const ACTION_BTN = document.getElementById('action_btn');
const OK_BTN = document.getElementById('ok_btn');
const USER_INPUT = document.getElementById('email_id');
const ERROR_TEXT = document.querySelector('.ErrorText');

const BackDrop = () => {
   BACKDROP.classList.toggle('visible');
   ERROR_TEXT.classList.remove('visible');
};
const StopScroll = () => {
	BODY.classList.toggle('StopScroll');
	document.documentElement.scrollTop = 0;
};
const ModalVisibility = () => {
	GRATITUDE.classList.toggle('visible');
};

const backDropHandler = () => {
	BackDrop();
	StopScroll();
   ModalVisibility();
   clearInput();
};
const emailValidationHandler = () => {
	let getUserInput = USER_INPUT.value;
   const filter = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
   if (!filter.test(getUserInput)) {
      ERROR_TEXT.classList.add('visible');
      return;
   }
   backDropHandler();
};
const actionBtnHandler = () => {
   emailValidationHandler();
};
const okBtnHandler = () => {
	backDropHandler();
};
const clearInput = () => {
   USER_INPUT.value = '';
};

BACKDROP.addEventListener('click', backDropHandler);
ACTION_BTN.addEventListener('click', actionBtnHandler);
OK_BTN.addEventListener('click', okBtnHandler);
