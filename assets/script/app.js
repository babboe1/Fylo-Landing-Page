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

const actionBtnHandler = () => {
   emailValidationHandler();
};
const okBtnHandler = () => {
	backDropHandler();
};
const clearInput = () => {
   USER_INPUT.value = '';
};


