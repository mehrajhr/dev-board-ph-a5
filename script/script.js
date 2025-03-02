// set date
const setDate = document.getElementById('set-date');
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setDate.innerHTML = `${now.toLocaleDateString(undefined, options)}`
// completed button task
document.getElementById('btn-complete-1').addEventListener('click', function(event){
    setAttributeFundtion('btn-complete-1');
    addActivityById('card-title-1');
    dueTask('due-task');
    incrementNumber('increment-number');
})
document.getElementById('btn-complete-2').addEventListener('click', function(event){
    setAttributeFundtion('btn-complete-2');
    addActivityById('card-title-2');
    dueTask('due-task');
    incrementNumber('increment-number');
})
document.getElementById('btn-complete-3').addEventListener('click', function(event){
    setAttributeFundtion('btn-complete-3');
    addActivityById('card-title-3');
    dueTask('due-task');
    incrementNumber('increment-number');
})
document.getElementById('btn-complete-4').addEventListener('click', function(event){
    setAttributeFundtion('btn-complete-4');
    addActivityById('card-title-4');
    dueTask('due-task');
    incrementNumber('increment-number');
})
document.getElementById('btn-complete-5').addEventListener('click', function(event){
    setAttributeFundtion('btn-complete-5');
    addActivityById('card-title-5');
    dueTask('due-task');
    incrementNumber('increment-number');
})
document.getElementById('btn-complete-6').addEventListener('click', function(event){
    setAttributeFundtion('btn-complete-6');
    addActivityById('card-title-6');
    dueTask('due-task');
    incrementNumber('increment-number');
})

// clear history button task
document.getElementById('clear-history').addEventListener('click',function(){
    const div = document.getElementById('activity-add');
    div.innerHTML = ``;
})

// background color
document.getElementById('bg-color').addEventListener('click', function(event){
    const bgColors = ['#ff5733' , "#d8d699" , '#8f8392' , '#615755' , '#bf0f39' , '#44798b', '#19f15e', '#84c858' , '#c21608', '#2bedde'];
    const randomBgColor = Math.floor(Math.random() * bgColors.length);
    document.body.style.backgroundColor = bgColors[randomBgColor];
    console.log("background color");
})
