const savingFile = document.getElementById('savingFile')
const total = document.getElementById('total')
const saves = document.getElementById('saves')
const csssaves = document.getElementById('csssaves')
const jssaves = document.getElementById('jssaves')

function html_save() {
    if (savingFile.style.display === "none") {
        csssaves.style.display = "none"
        saves.style.display = "block"
        savingFile.style.display = "block"
        jssaves.style.display = "none"
    }
}

function css_save() {
    if (savingFile.style.display === "none") {
        saves.style.display = "none"
        jssaves.style.display = "none"
        csssaves.style.display = "block"
        savingFile.style.display = "block"

    }
}

function js_save() {
    if (savingFile.style.display === "none") {
        csssaves.style.display = "none"
        saves.style.display = "none"
        savingFile.style.display = "block"
        jssaves.style.display = "block"
    }
}

const back = document.getElementById('back')
back.addEventListener('click', () => {
    if (savingFile.style.display === "block") {
        total.style.display = "block"
        savingFile.style.display = "none"
    }
})