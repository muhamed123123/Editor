var play = document.getElementById("play_Code");
var remove = document.getElementById("remove_Code");
var textarea = document.getElementById("textarea_code");
var codeValue = document.getElementById("code_Value");

play.addEventListener("click",()=>{
    localStorage.setItem("text",textarea.value);
    codeValue.innerHTML = textarea.value;
});
remove.addEventListener("click",()=>{
    localStorage.removeItem("text");
    codeValue.innerHTML = "";
    textarea.value = "";
});

onload = textarea.value = localStorage.getItem("text");
onload = codeValue.innerHTML = localStorage.getItem("text");