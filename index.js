let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

console.log( localStorage.clear("myLeads" ) )

console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
      listItems += `
      <li>
          <a href='https://brandonzane.com' target='_blank'>
          ${myLeads[i]}
          </a>
      </li>
      `
  }
  ulEl.innerHTML = listItems
}
