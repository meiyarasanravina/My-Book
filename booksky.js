const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const show = document.querySelector(".plus-button");
  const container = document.querySelector('.book-container');
    show.addEventListener("click", () => {
    overlay.style.display = "block";
    popup.style.display = "block";
    });

const close1 = document.querySelector(".close");
        close1.addEventListener("click", (event) => {
            event.preventDefault();
            popup.style.display = "none";
            overlay.style.display = "none";
        });

        const mainContainer = document.getElementById('container');
       
        function add(){
            const bookTitle =document.querySelector('.book-title');
            const bookAuthor = document.querySelector('.book-author');
            const textArea = document.querySelector('.textarea');  
            const div = document.createElement('div');
            div.setAttribute("class","book-container-css");
            div.innerHTML = ` <h2 class="book-title-css">${bookTitle.value}</h2>
                <h3 class="book-author-css">${bookAuthor.value}</h3>
                <p >${textArea.value}</p>
                 <button onclick="remove(event)" class="delete-button">Delete</button>`   
            mainContainer.append(div);
            overlay.style.display ="none";
            popup.style.display = "none";
            bookTitle.value="";
            bookAuthor.value="";
            textArea.value="";
        }
      function remove(event){
         event.target.parentElement.remove();
      } 