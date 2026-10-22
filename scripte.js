const popup = document.getElementById("popup");
const newDish_btn = document.getElementById("newDish_btn");
const close_popup = document.getElementById("close_popup");
const cancel_popup = document.getElementById("cancel_popup");
const Edite_popup = document.getElementById("Edite_popup");
const Edite_btn = document.getElementById("Edite_btn");
const close_Edite = document.getElementById("close_Edite");
const cancel_Edite = document.getElementById("cancel_Edite");

// new dish inputs
const dish_name = document.getElementById("dish_name");
const dish_price = document.getElementById("Price");
const quality_Badge = document.getElementById("qualityBadge");
const category = document.getElementById("Category");

const dishes = [
    {
        id: 1,
        name: "Harira",
        price: 20,
        categor: "Main",
        qualityBadge: "Healthy"
    },
    // {
    //     id: 2,
    //     name: "tajin",
    //     price: 20,
    //     categor: "Main",
    //     qualityBadge: "Healthy"
    // },
    // {
    //     id: 3,
    //     name: "sandwitch",
    //     price: 20,
    //     categor: "Main",
    //     qualityBadge: "spicy"
    // },
    // {
    //     id: 3,
    //     name: "sandwitch",
    //     price: 20,
    //     categor: "Main",
    //     qualityBadge: "spicy"
    // },
    // {
    //     id: 3,
    //     name: "sandwitch",
    //     price: 20,
    //     categor: "Main",
    //     qualityBadge: "spicy"
    // },
];






// Button
const save_btn = document.getElementById("save_btn");
save_btn.addEventListener("click", () => {
    const nameValue = dish_name.value.trim();
    const priceValue = dish_price.value.trim();
    const categoryValue = category.value;
    const badgeValue = quality_Badge.value;

    if (nameValue === "" || priceValue === "") {
        alert("عافاك عمر اسم الطبق والثمن!");
        return; 
    }

    dishes.push({
        id: dishes.length + 1, 
        name: nameValue, 
        price: priceValue, 
        Categor: categoryValue,
        qualityBadge: badgeValue
    });

    dish_name.value = "";
    dish_price.value = "";
    quality_Badge.value = "";
    category.value = "";
    addDishes();
    popup.classList.add("hidden");
});


// Add new dish and edite.
newDish_btn?.addEventListener("click", ()=>{
    popup.classList.remove("hidden");
})
close_popup?.addEventListener("click", ()=>{
    popup.classList.add("hidden");
})
cancel_popup?.addEventListener("click", ()=>{
    popup.classList.add("hidden");
})
Edite_btn?.addEventListener("click", ()=>{
    Edite_popup.classList.remove("hidden");
})
close_Edite?.addEventListener("click", ()=>{
    Edite_popup.classList.add("hidden");
})
cancel_Edite?.addEventListener("click", ()=>{
    Edite_popup.classList.add("hidden");
})



// div
const dish_section =document.getElementById("dish_section");
function addDishes(){
    dish_section.innerHTML = "";
    dishes.forEach(dish => {
        const div_card = document.createElement("div");
        div_card.classList = "h-fit flex flex-col rounded-3xl p-6 bg-gray-700 border border-gray-400";
        div_card.innerHTML = `<div class="flex items-center justify-between pb-2.5">
                            <div>
                                <p class="text-gray-300 font-bold pl-3">${dish.categor}</p>
                                <h2 class="text-yellow-400 font-extrabold text-5xl">${dish.name}</h2>
                            </div>
                            <p class="text-4xl text-white font-extrabold"><span>${dish.price}</span> DH</p>
                            </div>
                            <p class="w-fit  text-gray-100 mb-2.5 bg-green-600 rounded-2xl px-3 py-1">Homemade</p>
                            <div class="flex w-full justify-end gap-1.5">
                                <button id="Edite_btn" class="bg-green-600 rounded-3xl px-5 py-1.5 text-white text-lg font-bold hover:bg-green-500">Edite</button>
                                <button class="bg-red-600 rounded-3xl px-5 py-1.5 text-white text-lg font-bold hover:bg-red-500">Delete</button>
                            </div>`;
        dish_section.append(div_card);
    });
}
addDishes();



function addToSelect(){
    const dish_select = document.getElementsByClassName("dish_select");
    const select = document.createElement("select");
    select.classList = " w-full text-3xl text-gray-100 italic border-0 focus:outline-none focus:ring-0";
    dish_select.append(select);
    const option = document.createElement("option");
    option.classList = "bg-gray-600";
    select.append(option);

}
addToSelect(); 



