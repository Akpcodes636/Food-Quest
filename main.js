// Selecting items using javascript

const searchBox = document.getElementById("default-search");
const searchBtn = document.getElementById("btn");
const resultBox = document.getElementById("resultBox");
const closeBtn = document.getElementById("close-modal");


const getRecipe = async (term) => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${term}&key=a4300455-4766-47c0-895c-35ff35cdb883`
    );

    const data = await res.json();

    const html = ()=> data.data.recipes.map((state) => {
      return `<p>${state.title}</p>`;
    }).join(''); // Join the array elements into a single string
    
    
    resultBox.innerHTML = html()  // Insert the HTML into resultBox
    console.log(html());
    console.log(data.data.recipes);
    console.log(resultBox)
  } catch (error) {
    console.log(error);
  }
};


searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("This works!");
  getRecipe(searchBox.value);
resultBox.classList.remove("hidden");
  // resultBox.classList.remove("hidden", html);
});


closeBtn.addEventListener('click', ()=> {
  console.log("This is great");
  searchBox.value ="";
  resultBox.classList.add("hidden");
});