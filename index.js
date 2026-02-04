function createCounter() {
    let count = 0
    let countHistory = []
    let countEl = document.getElementById("count-el")
    let saveEl = document.getElementById("save-el")

    function increment() {
        count += 1
        countEl.innerText = count
    }

    function save() {
        countHistory.push(count)
        saveEl.innerText = `Previous entries: ${countHistory.join(" - ")}`
        count = 0
        countEl.innerText = 0
    }

    return {
        increment,
        save
    }
}



const counter = createCounter()

