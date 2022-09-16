var links = document.querySelectorAll(".links > ul > li")

console.log(links)

for (let i =0 ; i<links.length; i++) {
    links[i].addEventListener('click', () => {

        for (let j=0; j<links.length; j++) {
            if(links[j].className === "hover") {
                links[j].classList.remove("hover")
            }
        }

        links[i].classList.add("hover")
    })
}