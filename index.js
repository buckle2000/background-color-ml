import * as chroma from 'chroma-js'

let color

window.changeColor = () => {
    color = chroma.random()
    document.body.style.setProperty('--color', color.hex())
}

window.choose = better => {
    fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify([better, color.lab()])
        })
        .then(response => response.text())
        .then(console.log)
        .catch(console.error)
}

requestAnimationFrame(window.changeColor)
requestAnimationFrame(() => {
    document.addEventListener('keypress', ev => {
        switch (ev.key) {
            case 'ArrowLeft':
                choose('black')
                changeColor()
                break;
            case 'ArrowRight':
                choose('white')
                changeColor()
                break;
        }
    })
})