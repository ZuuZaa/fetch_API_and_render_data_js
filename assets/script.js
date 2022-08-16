const url = "https://api.publicapis.org/entries";
let animals = [];

const categoryFilter = (data, category) => data.filter(item => item.Category === category);
const othersFilter = (data) => data.filter(item => (item.Category !== "Animals" && item.Category !== "Books" && item.Category !== "Goverment" ) );

async function getData() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function getFilteredData() {
    let data = await getData();

    animals = [...categoryFilter(data.entries, "Animals")] 
    console.log("animals", animals)

    let books = categoryFilter(data.entries, "Books")
    console.log("books", books)

    let goverment = categoryFilter(data.entries, "Government")
    console.log("goverment", goverment)

    let others = othersFilter(data.entries);
    console.log("others", others)
}

getFilteredData();












// var animals = [];


// const categoryFilter = (data, category) => data.filter(item => item.Category === category)


// // const dataHandler = () => {
// //     var data = [];
// //     fetch(url)
// //     .then(response => response.json())
// //     .then(data => data.entries.map(item => data.push(item)));
// //     console.log(data)
// // }



// // animals = categoryFilter(data.entries, "Animals")
// // dataHandler();
// console.log(animals)



