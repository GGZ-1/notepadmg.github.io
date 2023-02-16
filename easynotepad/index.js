const main = document.querySelector(".main");
const newpaper = document.querySelector("#newbtn");


newpaper.onclick = items = () => {
    const notebook = document.createElement('div');
    notebook.classList.add('notebook');
    notebook.innerHTML = `
    <div class="nav">
      <button class="boldbtn">
        <i class="fa-sharp fa-solid fa-bold"></i>
      </button>
      <button class="deletebtn">
        <i class="fa-solid fa-delete-left"></i>
      </button>
    </div>
    <textarea name="textarea" class="textarea" cols="35" rows="20"></textarea>
  `;
  main.appendChild(notebook);

    const deletebtn = notebook.querySelector('.deletebtn');
    const boldBtn = notebook.querySelector(".boldbtn");
    const textArea = notebook.querySelector(".textarea");

  deletebtn.onclick = () => {
    if(window.confirm("Are you sure about that ?")){
        main.removeChild(notebook);
    }else {
        return
    }
  };



boldBtn.addEventListener("click", function() {
    if (textArea.style.fontWeight === "bold") {
      textArea.style.fontWeight = "normal";
    } else {
      textArea.style.fontWeight = "bold";
    }
});
};

items();