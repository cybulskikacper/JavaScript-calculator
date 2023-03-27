const currentNumber = document.querySelector('.current-number')
const previousNumber = document.querySelector('.previous-number p')
const mathSign = document.querySelector('.math-sign')

const numbersButton = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')
const clearButton = document.querySelector('.clear')
const calculatorHistory = document.querySelector('.history')

const historyBtn = document.querySelector('.history-btn')

let result = ''

function displayNumbers() {
	if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return
	if (this.textContent === '.' && currentNumber.innerHTML === '') return
	currentNumber.innerHTML += this.textContent
}

function operate() {
	if (currentNumber.innerHTML === '' && this.textContent === '-') {
		currentNumber.innerHTML = '-'
	} else if (currentNumber.innerHTML === '') {
		return
	}

	// tu zapisany jest if

	previousNumber.innerHTML = currentNumber.innerHTML
	mathSign.innerHTML = this.textContent
	currentNumber.innerHTML = ''
}

function showResult() {}

function clearScreen() {}

function clearHistory() {}

numbersButton.forEach(button => {
	button.addEventListener('click', displayNumbers)
})

operatorButton.forEach(button => {
	button.addEventListener('click', operate)
})

equalsButton.addEventListener('click', showResult)

clearButton.addEventListener('click', clearScreen)

historyBtn.addEventListener('click', clearHistory)
