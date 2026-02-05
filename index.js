function createCounter() {
    let count = 0
    let countHistory = []

    const countEl = document.getElementById("count-el")
    const saveEl = document.getElementById("save-el")
    const incBtn = document.getElementById("increment-btn")
    const saveBtn = document.getElementById("save-btn")

    incBtn.addEventListener("click", increment)
    saveBtn.addEventListener("click", save)

    function increment() {
        count += 1
        countEl.textContent = count
    }


    /*function increment(e) {
        console.log("click detail:", e.detail, "time:", e.timeStamp)
        count += 1
        countEl.textContent = count
    }*/


    function save() {
        countHistory.push(count)
        saveEl.textContent = `Previous entries: ${countHistory.join(" - ")}`
        count = 0
        countEl.textContent = 0
    }
}



const counter = createCounter()
