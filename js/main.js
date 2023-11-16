let start = document.querySelector(`#start`)
let game = document.querySelector(`#game`)
let square = document.querySelector(`.square`)
let min = 10;
let max = game.getBoundingClientRect().width / 3;
let size;
let minCol = 100, maxCol = 999999;
let bgColor = `#${parseInt(Math.random() * (maxCol - minCol) + minCol)}`;
let posTop;
let posLeft;
let input = document.querySelector(`#game-time`);
let time = document.querySelector(`#time`);
let $time;
let $timer;
let timeHeader = document.querySelector(`#head`);
let count;
let minus = document.querySelector(`.minus`)
let plus = document.querySelector(`.plus`)
function setTimeGame() {
    $time = parseFloat(input.value)
    time.textContent = $time.toFixed(1)
    //return $time;
}
function timer() {
    let timeFloat = time.textContent -= 0.1;
    time.textContent = timeFloat.toFixed(1)
    if (timeFloat <= 0) {
        clearInterval($timer)
        time.textContent = count;
        timeHeader.textContent = `Ваш результат:`;
        square.style.display = `none`
        start.style.display = `block`;
        game.style.background = `#ccc`;
        input.removeAttribute("disabled")
        minus.style.display = `block`
        plus.style.display = `block`
    }
}
function squareVisible() {
    square.style.width = `0px`;
    square.style.height = `0px`;
    size = parseInt(Math.random() * (max - min) + min);
    bgColor = `#${parseInt(Math.random() * (maxCol - minCol) + minCol)}`;
    posTop = `${parseInt(Math.random() * (game.getBoundingClientRect().width - size) + 1)}px`;
    posLeft = `${parseInt(Math.random() * (game.getBoundingClientRect().height - size) + 1)}px`;
    square.style.display = `block`;
    square.style.top = posTop;
    square.style.left = posLeft;
    square.style.background = bgColor;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.cursor = `pointer`;
}
function clickSquare() {
    square.addEventListener(`click`, () => {
        count++;
        square.style.width = `0px`;
        square.style.height = `0px`;
        console.log(count)
        squareVisible()
    })
}
start.addEventListener(`click`, () => {
    game.style.background = `#fff`;
    start.style.display = `none`;
    timeHeader.textContent = `Час гри:`;
    count = 0;
    squareVisible()
    setTimeGame()
    $timer = setInterval(timer, 100);
    input.setAttribute("disabled", ``)
    minus.style.display = `none`
    plus.style.display = `none`
})
clickSquare()

minus.addEventListener(`click`, () => {
    input.value--
    setTimeGame()
})
plus.addEventListener(`click`, () => {
    input.value++
    setTimeGame()
})