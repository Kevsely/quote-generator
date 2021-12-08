//Page Elements
const elmt_quote = document.getElementById("quote")
const elmt_author = document.getElementById("author")
const btn_tweet = document.getElementById("button-twitter")
const btn_newQuote = document.getElementById("button-new_quote")

//Event listener
btn_tweet.addEventListener("click", tweetQuote)
btn_newQuote.addEventListener("click", getQuotes)

//Varibles
const apiUrl = "https://type.fit/api/quotes"
let apiQuotes
let quoteObject

//Fetching Quote API
async function getQuotes() {
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote();        
    } catch (error) {
        console.log("Something went wrong", error)
    }
}

//Selecting a new quote
function newQuote() {
    //Picking a random quote
    let quoteIndex = Math.floor(Math.random() * apiQuotes.length)
    quoteObject = apiQuotes[quoteIndex]

    //Displaying the selected quote
    elmt_quote.innerText = quoteObject.text
    //Adjustment for unknow author
    if(!quoteObject)   elmt_author.innerText = "Unknown"
    else    elmt_author.innerText = quoteObject.author
    //Adjustment for long quote
    if(quoteObject.text.length > 100)
        elmt_quote.classList.add("long-quote")
    else
        elmt_quote.classList.remove("long-quote")
}

//Tweeting a quote 
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quoteObject.text}" - ${quoteObject.author}`
    window.open(tweetUrl, "_blank")
}

getQuotes();