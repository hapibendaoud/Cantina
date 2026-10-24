const popup = document.getElementById("popup");
const close_popup = document.getElementById("close_popup");
const cancel_popup = document.getElementById("cancel_popup");
const Edite_popup = document.getElementById("Edite_popup");

const close_Edite = document.getElementById("close_Edite");
const cancel_Edite = document.getElementById("cancel_Edite");


let card_id;
let dish_index = card_id - 1;


const dishes = [
    {
        id: 1,
        name: "Harira",
        price: 20,
        categor: "Main",
        qualityBadge: "Healthy"
    },
    {
        id: 2,
        name: "tajin",
        price: 20,
        categor: "Main",
        qualityBadge: "Healthy"
    },
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

// div
const dish_section =document.getElementById("dish_section");
function addDishes(){
    dish_section.innerHTML = "";
    dishes.forEach(dish => {
        const div_card = document.createElement("div");
        div_card.dataset.id = dish.id;
        div_card.setAttribute("id", "dish_card_section");
        div_card.classList = "dish_card_section h-fit flex flex-col rounded-3xl p-6 bg-gray-700 border border-gray-400";
        div_card.innerHTML =    `<div  class="flex items-center justify-between pb-2.5">
                                <div>
                                    <p class="text-gray-300 font-bold pl-3">${dish.categor}</p>
                                    <h2 class="text-yellow-400 font-extrabold text-5xl">${dish.name}</h2>
                                </div>
                                <p class="text-4xl text-white font-extrabold"><span>${dish.price}</span> DH</p>
                                </div>
                                <p class="w-fit  text-gray-100 mb-2.5 bg-green-600 rounded-2xl px-3 py-1">${dish.qualityBadge}</p>
                                <div class="flex w-full justify-end gap-1.5">
                                    <button id="Edite_btn" class="Edite_btn bg-green-600 rounded-3xl px-5 py-1.5 text-white text-lg font-bold hover:bg-green-500">Edite</button>
                                    <button id="delet_btn" class="bg-red-600 rounded-3xl px-5 py-1.5 text-white text-lg font-bold hover:bg-red-500">Delete</button>
                                </div>`;
        dish_section.append(div_card);
    });
}
addDishes();



// new dish inputs
const dish_name = document.getElementById("dish_name");
const dish_price = document.getElementById("Price");
const quality_Badge = document.getElementById("quality_Badge");
const category = document.getElementById("Category");
// Button
const save_btn_popup = document.getElementById("save_btn_popup");
// save_btn_popup?.addEventListener("click", () => {
    // const nameValue = dish_name.value.trim();
    // const priceValue = dish_price.value.trim();
    // const categoryValue = category.value;
    // const badgeValue = quality_Badge.value;

    // if (nameValue === "" || priceValue === "") {
    //     alert("pleas write Name and price.");
    //     return; 
    // }

    // dishes.push({
    //     id: dishes.length + 1, 
    //     name: nameValue, 
    //     price: priceValue, 
    //     Categor: categoryValue,
    //     qualityBadge: badgeValue
    // });

    // dish_name.value = "";
    // dish_price.value = "";
    // quality_Badge.value = "";
    // category.value = "";
    // addDishes();
    // popup.classList.add("hidden");
// });





// Edite dish


const Edite_btn = document.getElementsByClassName("Edite_btn");
const newDish_btn = document.getElementById("newDish_btn");
const dish_card_section = document.getElementById("dish_card_section");
// Add new dish and edite.
newDish_btn?.addEventListener("click", ()=>{
    popup.classList.remove("hidden");
})
//  close popup

popup.addEventListener("click", (e)=>{
    const close = e.target.closest("#close_popup");
    const cancel = e.target.closest("#cancel_popup");
    const save_dish = e.target.closest("#save_btn_popup")
    if(close){
        popup.classList.add("hidden");
    }
    if(cancel){
        popup.classList.add("hidden");
    }
    if(save_dish){
        const nameValue = dish_name.value.trim();
        const priceValue = dish_price.value.trim();
        const categoryValue = category.value;
        const badgeValue = quality_Badge.value;

        if (nameValue === "" || priceValue === "") {
            alert("pleas write Name and price.");
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
    }
})

const edite_dish_name = document.getElementById("edite_dish_name");
const edite_dish_price = document.getElementById("edite_Price");
const edite_quality_Badge = document.getElementById("edite_qualityBadge");
const edite_category = document.getElementById("edite_Category");
dish_section.addEventListener("click", (event)=>{
    const edite = event.target.closest(".Edite_btn");

    if(edite){
        const card = event.target.closest(".dish_card_section");
        card_id = card.dataset.id;
        Edite_popup.classList.remove("hidden");
        edite_dish_name.value = dishes[card_id-1].name;
        edite_dish_price.value = dishes[card_id-1].price;
        edite_quality_Badge.value = dishes[card_id-1].qualityBadge;
        edite_category.value = dishes[card_id-1].categor;
        // console.log(card.dataset.id);
        // console.log(card_id);
    }

    
    // popup.classList.add("hidden");
    // addDishes();
})

Edite_popup.addEventListener("click", (e)=>{
    const close = e.target.closest("#close_Edite");
    const cancel = e.target.closest("#cancel_Edite");
    const save = e.target.closest("#save_btn_edite");
    if(close){
        Edite_popup.classList.add("hidden");
    }
    if(cancel){
        Edite_popup.classList.add("hidden");
    }
    if(save){
        dishes[card_id-1].name = edite_dish_name.value;
        dishes[card_id-1].categor = edite_category.value;
        dishes[card_id-1].price = edite_dish_price.value;
        dishes[card_id-1].qualityBadge = edite_quality_Badge.value;
        console.log("save work");
        Edite_popup.classList.add("hidden");
        addDishes();
    }
})



// function addToSelect(){
//     const dish_select = document.getElementsByClassName("dish_select");
//     const select = document.createElement("select");
//     select.classList = " w-full text-3xl text-gray-100 italic border-0 focus:outline-none focus:ring-0";
//     dish_select.append(select);
// ;

// }
// addToSelect(); 



