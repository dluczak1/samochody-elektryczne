const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const img = document.querySelector('.img img');

function toggleElements(){
	//modal.classList.toggle('hide');
	modal.classList.toggle('animate__backInDown');
	modal.classList.toggle('animate__backOutUp');
	openModal.classList.toggle('hide');
}

closeModal.addEventListener('click', toggleElements)

openModal.addEventListener('click', toggleElements)

// for(let i = 0; i < 5; i++){
// 	console.log(`W pętli : ${i}`);
// 	setTimeout(changeSrc(i), 5000)
// }

// function changeSrc(i){
// 	img.src = `ev/${i}.png`;
// 	console.log(img.src);
// }

let k = 0;
const arrSrc = [`ev/0.png`, `ev/1.png`, `ev/2.png`, `ev/3.png`, `ev/4.png`];

const timer = setInterval(() => {
	if(k >= arrSrc.length){
		k = 0;
		return;
	}
	img.classList.remove('animate__backInDown');
	img.src = arrSrc[k];
	img.classList.add('animate__backInDown');
	k++;

}, 3000);


const closeQuiz = document.querySelector('.quiz-1');
const openQuiz = document.querySelector('.quiz-b');
const quiz = document.querySelector('.quiz');

function toggleElems(){
	quiz.classList.toggle('animate__backOutUp');
	quiz.classList.remove('hide');
	if(quiz.classList.contains('animate__backInUp')){
		setTimeout(() => {
			quiz.classList.add('hide');
		}, 500)
	};
	quiz.classList.toggle('animate__backInUp');
	openQuiz.classList.toggle('hide');
}

closeQuiz.addEventListener('click', toggleElems)

openQuiz.addEventListener('click', toggleElems)


const closeInfo = document.querySelector('.inf');
const openInfo = document.querySelector('.info');
const informacje = document.querySelector('.informacje');


function toggleElem(){
	informacje.classList.toggle('animate__backInDown');
	informacje.classList.toggle('animate__backOutUp');
	informacje.classList.remove('hide');
	closeInfo.classList.toggle('hide');
	openInfo.classList.toggle('hide');
}


closeInfo.addEventListener('click', toggleElem)

openInfo.addEventListener('click', toggleElem)

