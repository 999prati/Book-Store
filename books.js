dataServer();

function dataServer() {


    var fetchConfig = fetch(src = "https://api.myjson.com/bins/1h3vb3", {
            method: "GET",
            headers: new Headers({

            })
        })
        .then(function (response) {
            if (response.ok)
                return response.json()
        })

        .then(function (json) {
            data = json;
            books = data.books;

            console.log(books);
            changeText(books);
            
            var searchbar = document.getElementById("myInput");
            searchbar.addEventListener('keyup', function (e) {

                myFunction();
            })
        })
        .catch(function (error) {
            console.log(error);
        })

}


function bookDisplay() {
    for (var i = 0; i < books.length; i++) {
        var myImage = new Image;
        myImage.src = books[i].portada;
        document.getElementById("myImg").appendChild(myImage);
    }
}

function changeText(books) {
    var allbooks = document.getElementById('allbooks');
    allbooks.innerHTML = '';


    for (var i = 0; i < books.length; i++) {

        var fliperContainer = document.createElement('div');

        fliperContainer.classList.add('flip-container');
        fliperContainer.setAttribute('ontouchstart', 'this.classList.toggle("hover");');

        var flipper = document.createElement('div');
        flipper.classList.add('flipper');
        var front = document.createElement('div');
        front.classList.add('front');
        var back = document.createElement('div');
        back.classList.add('back');



        var img = new Image;
        img.src = books[i].portada;

        var title = document.createElement('p');
        title.innerHTML = books[i].titulo;

        var description = document.createElement('p');
        description.innerHTML = books[i].descripcion;

        var anchor = document.createElement('a');
        var button = document.createElement("button");
        button.innerHTML = "read more";
        button.setAttribute('href', books[i].detalle);
        button.setAttribute('data-fancybox', 'gallery');

        anchor.append(button);
        front.appendChild(img);
        back.append(title);
        back.append(description);
        back.appendChild(button);

        flipper.appendChild(front);
        flipper.appendChild(back);
        fliperContainer.appendChild(flipper);
        allbooks.appendChild(fliperContainer);

    }
}

function myFunction() {
    var input, filter, ul;
    var filteredBooks = [];
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    for (var i = 0; i < books.length; i++) {
        ul = books[i].titulo;
        if (ul.toUpperCase().indexOf(filter) > -1) {
            filteredBooks.push(books[i])
        }
    }
    changeText(filteredBooks);
}
