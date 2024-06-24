const a = 2;
const b = 3;
const input_box_name = document.getElementById("ipb");
const input_box_roll = document.getElementById("sch");
const input_box_branch = document.getElementById("brc"); 
const input_box_city = document.getElementById("city"); 
const users = document.querySelector(".users");
const btn = document.querySelector(".btn");
function getName() {
    let x = input_box_name.value;
    let y = input_box_roll.value;
    let z = input_box_branch.value; 
    let w = input_box_city.value; 
    document.getElementById("ipb").value = "";
    document.getElementById("sch").value = "";
    document.getElementById("brc").value = ""; 
    document.getElementById("city").value = ""; 

    if (x === "" || y === "" || z === "" || w === "") {
        alert("Textbox can't be submitted empty");
        return;
    }

    const user = `<div class="user">
    <p class="username">${x}</p>
    <p class="sch_num">${y}</p>
        <p class="branch">${z}</p>
        <p class="city">${w}</p> 
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </div>`;
    
    users.insertAdjacentHTML("beforeend", user);
}

function deleteUser() {
    this.parentNode.remove();
}

function editUser() {
    let targetElement = this.parentNode;
    document.getElementById("ipb").value = targetElement.querySelector(".username").innerText;
    document.getElementById("sch").value = targetElement.querySelector(".sch_num").innerText;
    document.getElementById("brc").value = targetElement.querySelector(".branch").innerText; 
    document.getElementById("city").value = targetElement.querySelector(".city").innerText;
    targetElement.remove();
}

btn.addEventListener("click", getName);
users.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        deleteUser.call(event.target);
    }
    if (event.target.classList.contains("edit")) {
        editUser.call(event.target);
    }
});
