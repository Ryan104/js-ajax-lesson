
const CAT_URL = 'https://ga-cat-rescue.herokuapp.com/api/cats';

class Cat {
  /* cat class to create new cats! */
  constructor(name, note, image=null){
    this.name = name;
    this.note = note;
    this.image = image;
  }
}

getCats();

// ---- INDEX (get em all) ---- //

function getCats(){
  // GET all the cats from the API and update the page with displayAllCats()
  $.get(CAT_URL).done((data) => { displayAllCats(JSON.parse(data)) });
}

function displayAllCats(catsArr){
  $('#cats').empty();

  // Display all the cats
  catsArr.map((cat) => {
    $('#cats').append(`
      <li cat-id=${cat.id}>
        <img src="${cat.image}">
        <div>
          <div class="list-cat-name">${cat.name}</div>
          <div class="list-cat-note">${cat.note}</div>
        </div>
        <div class="cat-buttons">
          <button class="deleteButton"><i class="fa fa-trash" aria-hidden="true"></i></button>
          <button class="editButton"><i class="fa fa-pencil" aria-hidden="true"></i></button>  
        </div>      
      </li>`);
  });
}

// ---- CREATE (new cat!) ---- //

function postACat(cat){
  $.ajax({
    method: 'POST',
    url: CAT_URL,
    data: JSON.stringify(cat)
  });
}

$('#new-cat').submit((event) => {
  let cat = new Cat(
    $('#cat-name').val(), 
    $('#cat-note').val(),
    (($('#cat-image').val() === "") ? null : $('#cat-image').val())
  );
  postACat(cat);

  getCats();
  event.preventDefault(); // Keep the page from refreshing
});

// ---- DELETE (adopt a cat) ---- //

$('ul').on('click', '.deleteButton', deleteACat);

function deleteACat(){
  console.log($(this).parent().parent().attr('cat-id'));

  $.ajax({
    url: CAT_URL + '/' + $(this).parent().parent().attr('cat-id'),
    method: 'DELETE',
  }).done((response) => { getCats() });
}

