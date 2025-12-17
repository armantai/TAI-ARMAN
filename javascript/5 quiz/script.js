let question = document.getElementById("question")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let pre = document.getElementById("pre")
let next = document.getElementById("next")
let skip = document.getElementById("skip")
let count = 0


let quiz = [
    {
        question: "What is your name",
        a: "Arman",
        b: "Amit",
        c: "Ravi",
        d: "Suresh"
        
    },
    {
        question: "What is your age",
        a: "15",
        b: "16",
        c: "17",
        d: "18"
    }
]

function show() {
    question.innerText = quiz[count].question
    a.innerText = quiz[count].a
    b.innerText = quiz[count].b
    c.innerText = quiz[count].c
    d.innerText = quiz[count].d
}
show()




next.addEventListener("click", () => {
    if(count<quiz.length-1){
        count++
        show()
    }
})


skip.addEventListener("click", () => {
    if (count < quiz.length - 1) {
        count++
        show()
    }
})

pre.addEventListener("click", () => {
    if (count > 0) {
        count--
        show()
    }
})




