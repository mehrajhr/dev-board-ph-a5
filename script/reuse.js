function getInnertextById(id){
    const text = document.getElementById(id).innerText;
    return text;
}
function setInnertextById(id , text){
    document.getElementById(id).innerText = text;
}
function setAttributeFundtion(id){
    document.getElementById(id).setAttribute('disabled', true);
}
function addActivityById(id){
    const title = getInnertextById(id);
    const div = document.getElementById('activity-add');
    var now = new Date();
    var dateTime = now.toLocaleTimeString();
    div.innerHTML += `
    <div class="bg-slate-100 p-3 rounded-xl">
        <p class="text-xl text-gray-600">You have Complete The Task ${title} at ${dateTime}</p>
    </div>
    `
}
function dueTask(id){
    let dueTaskDecrement = getInnertextById(id);
    dueTaskDecrement = Number(dueTaskDecrement) - 1;
    setInnertextById(id , dueTaskDecrement);
}
function incrementNumber(id){
    let number = getInnertextById(id);
    number = Number(number) + 1;
    setInnertextById(id , number);
}

function taskComplete(count){
    if(count === 6){
        alert("congrats!!! You have completed all the current task")
    }

}