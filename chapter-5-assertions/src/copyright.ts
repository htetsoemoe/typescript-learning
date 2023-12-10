// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// using assertion
let year = document.getElementById("year") as HTMLSpanElement
let thisYear: string = new Date().getFullYear().toString()
console.log(thisYear, year);
year.setAttribute("datetime", thisYear)
year.textContent = thisYear