document.addEventListener('keydown', (event) => {
    let numDisplay = document.getElementById('numDisplay')
    let numCode = document.getElementById('codeDisplay')
    let numKey = document.getElementById('keyDisplay')
    let numWhich = document.getElementById('whichDisplay')

    let keyDown = event.key

    let keyCode = event.code

    let keyWhich = event.which


    numDisplay.textContent = keyDown
    numCode.textContent = keyCode
    numKey.textContent = keyDown
    numWhich.textContent = keyWhich

})