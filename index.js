$(appReady);

const url = 'http://localhost:3000/api/v1/books/';

function appReady(){
    getBook()
};


function getBook() {
  $('.btn').click(function(){
    const source = $('#bookcard-template').html();
    const template = Handlebars.compile(source);
    let book;
    $.get(url).then(response => {
      renderTemplate(response)
    })
    function renderTemplate(book) {
		book.forEach(book => {
			let context = {
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
