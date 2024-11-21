let paragraphs = document.body.firstElementChild.nextElementSibling.children
const contentBackground = document.body.firstElementChild.nextElementSibling

function applyStyles() {
    const lineSpace = document.getElementById("lineSpacingInput").value || 20
    const fontSize = document.getElementById("fontSizeInput").value || 20
    const fontColor = document.getElementById("fontColorInput").value || "aqua"
    const backgroundColor = document.getElementById("backgroundColorInput").value || "black"

    // Html collectionni to'g'ridan to'g'ri forEach bilan ishlatib bo'midi shuning uchun arrayga o'girvolindi
    paragraphs = [...paragraphs] 

    paragraphs.forEach(p => {
        p.style.lineHeight = `${lineSpace}px`
        p.style.fontSize = `${fontSize}px`
        p.style.color = fontColor
    });

    contentBackground.style.backgroundColor = backgroundColor
}