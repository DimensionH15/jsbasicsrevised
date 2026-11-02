const box = document.getElementById("textarea1");

function editoroption1() {
    box.style.fontWeight = box.style.fontWeight === "bold" ? "normal" : "bold";
}
function editoroption2() {
    box.style.fontStyle = box.style.fontStyle === "italic" ? "normal" : "italic";
}
function editoroption3() { box.style.textAlign = "left"; }
function editoroption4() { box.style.textAlign = "center"; }
function editoroption5() { box.style.textAlign = "right"; }

function editoroption6() { box.value = box.value.toUpperCase(); }
function editoroption7() { box.value = box.value.toLowerCase(); }
function editoroption8() {
    let text = box.value.toLowerCase();   
    let words = text.split(" ");          
    let result = "";                      

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word.charAt(0).toUpperCase();  
        let restOfWord = word.slice(1);                 
        result = result + firstLetter + restOfWord + " "; 
    }

    box.value = result.trim();            
}
function editoroption9() {
    box.style.fontWeight = "normal";
    box.style.fontStyle = "normal";
    box.style.textAlign = "left";
    box.value = "";
}
function updateCount() {
    let text = box.value;                       
    let characters = text.length;               
    let words = 0;                              

    if (text.trim() !== "") {                  
        let wordList = text.trim().split(" ");  
        words = wordList.length;                
    }

    document.getElementById("count").textContent =
        words + " words, " + characters + " characters";   
}

box.addEventListener("input", updateCount);     