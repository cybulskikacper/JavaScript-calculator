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

function showResult() {
	if (currentNumber.innerHTML === '' || previousNumber.innerHTML === '') return
	let a = currentNumber.innerHTML
	let b = previousNumber.innerHTML
	let operator = mathSign.innerHTML

	switch (operator) {
		case '+':
			result = a + b
			break
		case '-':
			result = a - b
			break
		case 'x':
			result = a * b
			break
		case ':':
			result = a / b
			break
		case '2^':
			result = a / b
			break
	}

	addToHistory()
	historyBtn.classList.add('active')
	currentNumber.innerHTML = result
	previousNumber.innerHTML = ''
	mathSign.innerHTML = ''
}
function division() {
	if (currentNumber.innerHTML !== '' && previousNumber.innerHTML === '') {
	}
}

function addToHistory() {
	const newHistoryItem = document.createElement('li')
	newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`
	newHistoryItem.classList.add('history-item')
	calculatorHistory.append(newHistoryItem)
}

function clearScreen() {
	currentNumber.innerHTML = ''
	previousNumber.innerHTML = ''
	mathSign.innerHTML = ''
	result = ''
}

function clearHistory() {
	calculatorHistory.textContent = ''
	if (calculatorHistory.textContent === '') {
		historyBtn.classList.remove('active')
	}
	currentNumber.innerHTML = ''
}

numbersButton.forEach(button => {
	button.addEventListener('click', displayNumbers)
})

operatorButton.forEach(button => {
	button.addEventListener('click', operate)
})

equalsButton.addEventListener('click', showResult)

clearButton.addEventListener('click', clearScreen)

historyBtn.addEventListener('click', clearHistory)
