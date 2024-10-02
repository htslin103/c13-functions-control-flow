function addInputToPage(label, startingValue) {
    const body = document.getElementsByTagName('body')[0]
    const newDiv = document.createElement('div')
    const newTextField = document.createElement('input')
    newTextField.setAttribute('id', label)
    newTextField.setAttribute('value', startingValue)
    newDiv.append(label)
    newDiv.append(newTextField)
    body.append(newDiv)
}

function addButtonToPage(label, functionToCall) {
    const body = document.getElementsByTagName('body')[0]
    const newButton = document.createElement('button')
    newButton.append(label)
    newButton.addEventListener('click', functionToCall)
    body.append(newButton)
}

function getInput(label) {
    return document.getElementById(label).value
}

function getInputAsNumber(label) {
    return Number.parseFloat(getInput(label))
}

function getInputAsBoolean(label) {
    return getInput(label).toLowerCase() === 'true'
}

function addTextToPage(text,isBold) {
    let body ="";
    let newParagraph ="";
    let lineBreak = document.createElement("br");
    
    body = document.getElementsByTagName('body')[0]
    if(isBold)
    {
        newParagraph = document.createElement('strong')
    }
    else{
        newParagraph = document.createElement('p')
    }
    newParagraph.append(lineBreak)
    newParagraph.append(text)
    body.append(newParagraph)

}

function clearPage() {
    const body = document.getElementsByTagName('body')[0]
    body.replaceChildren('')
}
