const gameboard = document.querySelector('#gameboard')
const infoDispaly = document.querySelector('#info')

const startCells = ["", "", "", "", "", "", "", "", ""]

function createBoard() {
    startCells.forEach((cells, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameboard.append(cellElement)
    })
}

createBoard()

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add('cross')
    e.target.append(goDisplay)

}