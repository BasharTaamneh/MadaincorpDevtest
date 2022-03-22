

const category = document.querySelectorAll("input[name=category]")
category.forEach(btn => {
    btn.addEventListener("change", handler)
})

function handler() {
    let sellected = document.querySelector("input[name=category]:checked").value
    const img = document.querySelectorAll("img")
    img.forEach((elm, key=-1) => {
        let src = `https://api.lorem.space/image/${sellected
            }?w=150&h=220`
        elm.src = src
        elm.id = key += 1
    })
}

function imghandler(id){
    let sellectedimg = document.getElementById(id)
    const imgmodal = document.createElement("div")
    imgmodal.append(sellectedimg)
    console.log(sellectedimg);
}

const imgs = document.querySelectorAll("img")
imgs.forEach(img => {
    img.addEventListener("click", () => imghandler(img.id))
})