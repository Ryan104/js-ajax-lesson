  // Get all cats and spit out the JSON collection in the console
  const CAT_URL = 'https://ga-cat-rescue.herokuapp.com/api/cats';


  function getCats(){
    let catsArr;
    $.get(CAT_URL)
      .done(function(data){
        displayAllCats(JSON.parse(data));
      });
  }

  function displayAllCats(catsArr){
    $('#cats').empty();
    catsArr.map((cat) => {
      $('#cats').append(`<li>${cat.name} - ${cat.note}</li>`);
    });
  }

  class Cat {
    constructor(name, note){
      this.name = name;
      this.note = note;
    }
  }

  function postACat(cat){
    $.ajax({
      method: 'POST',
      url: CAT_URL,
      data: JSON.stringify(cat)
    });
  }

  $('#new-cat').submit((event) => {
    let cat = new Cat($('#cat-name').val(), $('#cat-note').val());
    console.log(cat); 
    postACat(cat);
    getCats();
    event.preventDefault(); // Keep the page from refreshing
  });

getCats();


  

  // Now, get a single cat and spit out the JSON in the console
  // $.get('https://ga-cat-rescue.herokuapp.com/api/cats/22')
  //   .done((data) => {
  //     console.log(data);
  //   });


  // Use the more generic $.ajax to do the same request
  // $.ajax({
  //   method: 'GET',
  //   url: 'https://ga-cat-rescue.herokuapp.com/api/cats/22'
  // }).done((data) => (console.log('ajax: ' + data)));
  

  // Modify that cat by changing its name
  // the property `type:` is an alias for method.
  // By default, your `type` is GET, but we need to use
  // a different one here...remember which one?


  // Add a new cat to the list with name and note
  var cat = {
    // name here

    //note here

  };

  // Now make the AJAX request. What verb adds new data
  // to our endpoint?

  // Remember JSON is serialized, so you will need to
  // "stringify" your cat object...Google to the rescue!

