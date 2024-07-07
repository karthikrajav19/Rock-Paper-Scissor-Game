/*
container, userresult, cpuresult, result, optionimage
*/

const container = document.querySelector(".container");
const userresult = document.querySelector("#userresult");
const cpuresult = document.querySelector("#cpuresult");
const result = document.querySelector(".result");
const optionimage = document.querySelectorAll(".optionimage");

optionimage.forEach((image00, index00) => {
    image00.addEventListener("click", (e) => {
        image00.classList.add("active");

        userresult.src = cpuresult.src = "Img/Rock.png"

        optionimage.forEach((image01, index01) => {
            index00 !== index01 && image01.classList.remove("active");
        });

        container.classList.add("initial")
        
        let time = setTimeout(() => {
            container.classList.remove("initial")
            let ImageSrc = e.target.getAttribute("src");
            userresult.src = ImageSrc;
            
            let ranNum = Math.floor(Math.random() * 3)

            let cpuImages = ['Img/Rock.png', 'Img/Paper.png', 'Img/Scissors.png']

            cpuresult.src = cpuImages[ranNum]

            let cpuValue = ["R", "P", "S"][ranNum]
            let userValue = ["R", "P", "S"][index00]


            let output = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PR: "User",
                PP: "Draw",
                PS: "Cpu",
                SR: "Cpu",
                SP: "User",
                SS: "Draw"
            }

            let outputValue = output[userValue + cpuValue]
            

            result.textContent = cpuValue === userValue ? "Match Draw" : `${outputValue} Won!!`
        }, 2500)
    });
});

