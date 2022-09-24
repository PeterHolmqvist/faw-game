const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
    name: 'fire',
    emoji: '🔥',
    beats: 'air' ,
    beats: 'lizard'
},
{
    name: 'water',
    emoji: '🌊',
    beats: 'spock', 
    beats: 'fire'
   
},
{
    name: 'air',
    emoji: '💨',
    beats:'water', 
    beats: 'lizard',
},
{
    name: 'lizard',
    emoji: '🦎',
    beats: 'air', 
    beats: 'spock',
},
{
    name: 'spock',
    emoji: '🧛‍♂️',
    beats: 'fire', 
    beats: 'water',
},
]

/** Function that adds an event listener for clicks on each button and make the selection when clicked */
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

/**Function that determines the winner based on the selection */
function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)   
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)

}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
} 

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

/** This funtion checks if the oppponent selection beats your selection by returning the 'beats' value with 'name'
 *  value from the keys of the array obejcts. 
  */
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

/**Function that randomizes the computers choice of the objects from the array by multiplying random number  from 
 * 0<1 with the arrays length.  */
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}