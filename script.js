// Дата, Математика, Регулярними Виразами

const currentDate = new Date()
console.log(currentDate)

// насправді дата та час зберігаются в компьютері в вигляді timestamp
// дата та час в форматі мілісекунд починаючи з початку 1970 року

// const start = new Date("2024-05-16")
// console.log(start.getFullYear(), start.getMonth())


const start = new Date()

for(let i = 0 ; i < 6546656; i++) {
    let x = i + Math.random()  // 0 - 1
}
const end = new Date()
console.log(`Цикл працював ${end - start} мілісекунд` )

function updateTimer () {
    const dateEnd = new Date("2024-12-31")
    const currentDate = new Date()

    const t = dateEnd - currentDate //65464646546546546456

    const day = Math.floor(t / 86400000) 
    const hour = Math.floor( (t - (day*86400000)) / 3600000)
    const min = Math.floor( (t - (day*86400000 + hour * 3600000 )) / 60000)
    const sec = Math.floor(
      (t - (day * 86400000 + hour * 3600000 + min * 60000)) / 1000
    )
    const cells = document.querySelectorAll('.cell__data')

    cells[0].textContent = day
    cells[1].textContent = hour
    cells[2].textContent = min
    cells[3].textContent = sec
}

setInterval(updateTimer, 1000)

// математика

const x1 = Math.random()
const y = Math.floor(3/4)
const x = Math.round(3/4)
console.log(Math.floor(Math.random() * 5) + 1 ) // 1-5 
console.log(x1, y, x)
console.log(3/4)
console.log(Math.pow(2,3))
console.log(2 ** 3)
console.log(Math.sqrt(9))

// регулярні вирази 
// слугують для пошуку та заміни елементів в рядках(строках)

const line = "Hello, my name is Mykola" //Mykola

// console.log(line.includes('Mykola'))

// паттерн / флаги

const regExp  = new RegExp('Mykola')
const regExp2 = /Mykola/
// search, replace, test, match
console.log(line.match(regExp))

console.log(line.replace(regExp, '*'))

// класс символів 

//   /w - words
//   /d - digits


const regExp3 = /M/g


const inputEl = document.querySelector('#format')
const tooltip = document.querySelector(".format__tooltip")

inputEl.addEventListener('input', (e)=> {
    const regExp = new RegExp('^[A,B,C][0-9]$')
    if(regExp.test(e.target.value)) {
        tooltip.style.display = 'none'
        e.target.style.backgroundColor = 'green'
    } else {
        tooltip.style.display = "flex"
        e.target.style.backgroundColor = "red"
    }

})