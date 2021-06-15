document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector("#character-form")
  const submitBox = document.querySelector("input#search")
  const divContainer = document.querySelector("div#character-container")
  const characterList = document.querySelector("ul#character-list")
  const quoteList = document.querySelector("ul#quotes-list")
  const quoteSearchBox = document.querySelector("#quote-search")
  const quoteSearchBtn = document.querySelector("#quote-search-button")

  submitBtn.addEventListener("submit", (event) => {
    event.preventDefault()

    const value = submitBtn.querySelector("#search").value
    const searchInput = submitBox.value

    fetch(`https://www.breakingbadapi.com/api/characters?name=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const characterName = document.createElement("li")
          characterName.innerHTML = `Name: ${item.name}`
          const nickName = document.createElement("li")
          nickName.innerHTML = `Nickname: ${item.nickname}`
          const characterActor = document.createElement("li")
          characterActor.innerHTML = `Portrayed by: ${item.portrayed}`
          const characterPhoto = document.createElement("img")
          characterPhoto.src = item.img
          characterPhoto.height = 300
          characterPhoto.length = 200
          characterList.append(characterPhoto, characterName, nickName, characterActor)
          submitBox.value = ""
        })
      })
  })
  quoteSearchBtn.addEventListener("click", (event) => {
    event.preventDefault()
    //   const quoteInputValue = quoteSearchBox.querySelector("#quote-search").value
    const quoteBoxInput = quoteSearchBox.value
    console.log(quoteBoxInput)

    fetch(`https://www.breakingbadapi.com/api/quote?author=${quoteBoxInput}`)
      .then(response => response.json())
      .then(data => {
        debugger
        // data.forEach(item => {
        const actualQuote = document.createElement("li")
        actualQuote.innerHTML = `Character: ${data[0].author}`
        const quoteAuthor = document.createElement("li")
        quoteAuthor.innerHTML = `Quote: ${data[0].quote}`
        quoteList.append(actualQuote, quoteAuthor)
        quoteSearchBox.value = ""
        // })
      })
  })
})