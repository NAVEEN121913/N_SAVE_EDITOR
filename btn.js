const ht = document.getElementById('ht')
const cs = document.getElementById('cs')
const jas = document.getElementById('jas')

const html = () => {
    if (ht.style.display === "block") {
        htmls.disabled
    } else if (ht.style.display === "none") {
        ht.style.display = "block"
        cs.style.display = "none"
        jas.style.display = "none"
    }
}
const css = () => {
    if (cs.style.display === "block") {
        csss.disabled
    } else if (cs.style.display === "none") {
        ht.style.display = "none"
        cs.style.display = "block"
        jas.style.display = "none"
    }
}
const js = () => {
    if (jas.style.display === "block") {
        jss.disabled
    } else if (jas.style.display === "none") {
        ht.style.display = "none"
        cs.style.display = "none"
        jas.style.display = "block"
    }
}