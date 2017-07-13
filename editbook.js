$(appReady);





function appReady() {

  let select = $('.select')
  const promises = [
    getBookById(),
    Materialize.updateTextFields()
  ]
   return Promise.all(promises).then(function(){
     select.material_select();
   })
   select.material_select();
}

function getBookById() {
    const book_id = handleQueryString(window.location.search);
    $('#select').material_select();
    const source = $('#bookcard-template').html();
    const template = Handlebars.compile(source);
    let book;

    $.get(`https://mtb-greads.herokuapp.com/api/v1/books/${book_id}`).then(response => {
      console.log(response);
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


}

function handleQueryString(queryString){
 let output = parseQueryString(queryString);
 return output.id;
}

//parse query strings to create objects of key value pairs
function parseQueryString(queryString){
 let output = {};
 queryString = queryString.substring(1);
 let split = queryString.split('&');
 let split2 = [];
 for (var i = 0; i < split.length; i++) {
   split2.push(split[i].split('='));
   output[split2[i][0]] = split2[i][1];
 }
 return output;
}
