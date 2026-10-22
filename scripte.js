const popup = document.getElementById("popup");
const newDish_btn = document.getElementById("newDish_btn");
const close_popup = document.getElementById("close_popup");
const cancel_popup = document.getElementById("cancel_popup");
const Edite_popup = document.getElementById("Edite_popup");
const Edite_btn = document.getElementById("Edite_btn");
const close_Edite = document.getElementById("close_Edite");
const cancel_Edite = document.getElementById("cancel_Edite");

const dishes = [
    {
        id: 1,
        name: "Harira",
        price: 20,
        categor: "Main",
        qualityBadge: "Healthy"
    }
];

// new dish inputs
const dish_name = document.getElementById("Dish_name").value;
const dish_price = document.getElementById("Price").value;
const quality_Badge = document.getElementById("qualityBadge").value;
const category = document.getElementById("Category").value;

// Button
const save_btn = document.getElementById("save_btn");
// div
const dish_section =document.getElementById("dish_section");




// save_btn.addEventListener("submit", ()=>{
//     dishes.push({
//         id: 1,
//         name: dish_name,
//         price: dish_price,
//         Categor: category,
//         qualityBadge: quality_Badge
//     })
//     // dishes.forEach((dish)=>{
//         console.log(dishes);
//     // })
// })


// Add new dish and edite.
newDish_btn.addEventListener("click", ()=>{
    popup.classList.remove("hidden");
})
close_popup.addEventListener("click", ()=>{
    popup.classList.add("hidden");
})
cancel_popup.addEventListener("click", ()=>{
    popup.classList.add("hidden");
})
Edite_btn.addEventListener("click", ()=>{
    Edite_popup.classList.remove("hidden");
})
close_Edite.addEventListener("click", ()=>{
    Edite_popup.classList.add("hidden");
})
cancel_Edite.addEventListener("click", ()=>{
    Edite_popup.classList.add("hidden");
})





