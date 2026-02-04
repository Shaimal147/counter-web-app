function createCounter() {
    let count = 0

    return function increment() {
        count += 1
        document.getElementById("count-el").innerText = count
        console.log("Count incremented by one")
    }
}

const increment = createCounter()

