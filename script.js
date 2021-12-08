const apiUrl = "https://type.fit/api/quotes"
let apiQuotes
let quote

//Selecting a new quote
function newQuote() {
    let quoteIndex = Math.floor(Math.random() * apiQuotes.length)
    return apiQuotes[quoteIndex]
}

//Fetching Quote API
async function getQuotes() {
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        quote = newQuote()
        console.log(quote)
    } catch (error) {
        console.log("Something went wrong", error)
    }
}

//Page Elements


//Event listener
