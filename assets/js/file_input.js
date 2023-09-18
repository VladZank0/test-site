(function(){
    document.querySelector("#file-input").onchange = function(){
        document.querySelector("#file-name").textContent = this.files[0].name;
    }
}())