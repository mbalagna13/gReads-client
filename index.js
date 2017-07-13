$(appReady);

const url = 'http://localhost:3000/api/v1/books/';

let BASE_URL;

(function getBaseURL() {
  if (window.location.hostname == "localhost") {
    BASE_URL = `http://localhost:3000/api/v1/books/`
  } else {
    BASE_URL = `https://mtb-greads.herokuapp.com/api/v1/books/`;
  }
})();

function appReady(){
    getBook();
    editBook();
    $('select').material_select();

  };


function getBook() {
  $('.book_button').click(function(){
    const source = $('#bookcard-template').html();
    const template = Handlebars.compile(source);
    let book;
    $.get(BASE_URL).then(response => {
      console.log(response);
      renderTemplate(response)
    })
    function renderTemplate(book) {
		book.forEach(book => {
			let context = {
        id: book.id,
				title: book.book_title,
				genre: book.book_genre,
        description: book.book_description,
        cover: book.book_cover_url
			}
			let html = template(context);
			$('.books').append(html);
		});
	   }

  })
}

function editBook() {
  $('.editbutton').on('click', function() {
    // let id = $(this).data('id');
    console.log("something");
    // console.log(id);
    // window.location.href=`./editBook.html?id=${id}`
    // window.location=
  })
}
