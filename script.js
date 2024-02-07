const img = document.querySelector('.img_five')
const btns = document.querySelectorAll('button')

const images = {
    titan: "img/iphone-15-pro-naturaltitanium.jfif",
    blue: "img/iphone-15-pro-bluetitanium.jfif",
    white: "img/iphone-15-pro-whitetitanium.jfif",
    black: "img/iphone-15-pro-blacktitanium.jfif",
}

btns.forEach(btn => {
    btn.onclick = () => {
        let color = btn.innerText
        img.setAttribute('src', images[color])
    }
})



let open_btn = document.querySelector('[data-open]')
let close_btn = document.querySelector('[data-close]')
let dialog = document.querySelector('dialog')


open_btn.onclick = () => {
    dialog.showModal()
}
close_btn.onclick = () => {
    dialog.close()
}



const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('active')
    }
})