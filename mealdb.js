function searchFood() {
  let searchMeal = document.getElementById("mealSearch").value;
  fetch("https://www.themealdb.com//api/json/v1/1/search.php?s=" + searchMeal)
    .then((res) => res.json())
    .then((data) => displayFood(data.meals));
}

function displayFood(foods) {
  let mealBox = document.getElementById("displayMeal");
  mealBox.innerHTML = "";
  for (let food of foods) {
    let foodBox = document.createElement("div");
    foodBox.classList.add("col");
    let foodContainer = `<div class="card" onclick="cardClick(${food.idMeal})">
              <img src="${food.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 250)}</p>
              </div>
            </div>`;
    foodBox.innerHTML = foodContainer;
    mealBox.appendChild(foodBox);
  }
}

function cardClick(mealID) {
  fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID)
    .then((res) => res.json())
    .then((data) => mealDetails(data.meals[0]));
}

function mealDetails(food) {
  let mealBox = document.getElementById("mealDetails");
  mealBox.style.display = "flex";
  mealBox.innerHTML = "";
  let foodBox = document.createElement("div");
  foodBox.classList.add("col");
  let foodContainer = `<div class="card" onclick="cardClick(${food.idMeal})">
              <img style="width: 800px" src="${food.strMealThumb}" class="card-img-top mx-auto" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions}</p>
              </div>
            </div>`;
  foodBox.innerHTML = foodContainer;
  mealBox.appendChild(foodBox);
}
