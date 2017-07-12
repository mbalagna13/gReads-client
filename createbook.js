$(appReady);

// let BASE_URL;
//
// (function getBaseURL() {
//   if (window.location.hostname == "localhost") {
//     BASE_URL = `http://localhost:3000/api/v1/books/`
//   } else {
//     BASE_URL = `https://mtb-greads.herokuapp.com/api/v1/books/`;
//   }
// })();


function appReady(){
  submitBookForm();
};


function submitBookForm(){
  $('#createBooks').on('click', function() {
    $('form').submit(function(event) {
      alert('we clicked it');
      event.preventDefault();
      let book_title = $('.title').val();
      let book_genre = $('.genre').val();
      let book_description = $('.description').val();
      let book_cover_url = $('.cover_image_url').val();
      let eventObject = {
        'book_title': book_title,
        'book_genre': book_genre,
        'book_description': book_description,
        'book_cover_url': book_cover_url
      };
      console.log(eventObject);
      $.post('http://localhost:3000/api/v1/books/createBooks', eventObject).then(res => {
        console.log(res);
      })
    })
  })



}
