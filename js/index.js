document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector("#character-form")
  const submitBox = document.querySelector("input#search")
  const divContainer = document.querySelector("div#character-container")
  const characterList = document.querySelector("ul#character-list")
  const quoteList = document.querySelector("ul#quotes-list")

  submitBtn.addEventListener("submit", (event) => {
    event.preventDefault()

    const value = submitBtn.querySelector("#search").value

    const searchInput = submitBox.value

    fetch(`https://www.breakingbadapi.com/api/characters?name=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const characterName = document.createElement("li")
          characterName.innerHTML = item.name
          const nickName = document.createElement("li")
          nickName.innerHTML = item.nickname
          const characterJob = document.createElement("li")
          characterJob.innerHTML = item.occupation
          const characterPhoto = document.createElement("img")
          characterPhoto.src = item.img
          characterPhoto.height = 200
          characterPhoto.length = 100
          characterList.append(characterPhoto, characterName, nickName, characterJob)
        debugger
        })
      })
  })
})