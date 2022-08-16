// --------- API url -------
const url = "https://api.publicapis.org/entries";

// -------- Columns -------- 
const animalsContainer = document.querySelector(".animals-column");
const booksContainer = document.querySelector(".books-column");
const govermentContainer = document.querySelector(".goverment-column");
const othersContainer = document.querySelector(".others-column");

// -------- Titles ----------
const animalsTitle = document.querySelector(".animals");
const booksTitle = document.querySelector(".books");
const govermentTitle = document.querySelector(".goverment");
const othersTitle = document.querySelector(".others");

// -------- Filtering array functions -------
const categoryFilter = (data, category) => data.filter(item => item.Category === category);
const othersFilter = (data) => data.filter(item => (item.Category !== "Animals" && item.Category !== "Books" && item.Category !== "Goverment"));

// -------- Function for rendering data to html elements ------
const renderArray = (data, container) => {
    data.map(item => {

        const info = document.createElement("div");
        info.classList.add("info");

        const title = document.createElement("h3");
        title.textContent = item.API

        const description = document.createElement('p');
        description.textContent = item.Description;

        const span = document.createElement("span");
        span.textContent = "Link: ";
        const a = document.createElement("a");
        a.href = item.Link;
        a.innerText = item.Link;
        const link = document.createElement("div");
        link.append(span, a)

        info.append(title, description, link)
        container.append(info)
    })
}

// ---- Get data from API with fetch------ 
async function getData() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// ------ Rendering ------ 
async function renderFilteredData() {
    let data = await getData();

    let animals = categoryFilter(data.entries, "Animals");
    animalsTitle.addEventListener("click", () => renderArray(animals, animalsContainer));

    let books = categoryFilter(data.entries, "Books")
    booksTitle.addEventListener("click", () => renderArray(books, booksContainer));

    let goverment = categoryFilter(data.entries, "Government")
    govermentTitle.addEventListener("click", () => renderArray(goverment, govermentContainer));

    let others = othersFilter(data.entries);
    othersTitle.addEventListener("click", () => renderArray(others, othersContainer));
}

renderFilteredData();



