// using input fields, form inputs to change to any color:

// select the button
const colorChangeBtn = document.querySelector('#colorChangeBtn')

// define functions
const changeColor = () => {

    // change bg color based on input text value

    const colorInputText = document.querySelector('#colorInputText').value
    document.body.style.backgroundColor = colorInputText

    // change bg color based on HTML color picker value

    const colorPicker = document.querySelector('#colorPicker').value
    document.body.style.backgroundColor = colorPicker

    // display color picker value in the input field as hex code

    document.querySelector('#colorInputText').value = colorPicker

    // can't use following code as it displays a TypeError
    // colorInputText = colorPicker
    // TypeError "Assignment to constant variable at changeColor, at HTMLButtonElement.onclick"

}

// add click event listener to button
colorChangeBtn.addEventListener('click', changeColor)


// using buttons to change to specific colors:

// select the button elements
const btnBlue = document.querySelector('#blue')
const btnPink = document.querySelector('#pink')
const btnGrey = document.querySelector('#grey')

// add click event listener to individual button elements

btnBlue.addEventListener('click', () => {
    document.body.style.backgroundColor = '#80bfff'
})

btnPink.addEventListener('click', () => {
    document.body.style.backgroundColor = '#ff99bb'
})

btnGrey.addEventListener('click', () => {
    document.body.style.backgroundColor = '#bfbfbf'
})

// random color generator:

//generate a random number
const random = (number) => Math.floor(Math.random() * (number + 1));

// change BG color function
const randomColor = () => {
    var rndmCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndmCol;
}

// add event for button when double clicked
colorChangeBtn.addEventListener('dblclick', randomColor)