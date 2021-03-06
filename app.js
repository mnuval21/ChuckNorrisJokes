async function getJoke(firstName, lastName){

  const res = await axios.get(`https://api.icndb.com/jokes/random`, { params : {firstName, lastName} });
  joke.innerHTML =  res.data.value.joke;
}

const form = document.querySelector("#get-joke");
const firstname = document.querySelector("#first-name");
const lastname = document.querySelector("#last-name");
const joke = document.querySelector("#joke");

form.addEventListener("submit", function(e){
  e.preventDefault();
  getJoke(firstname.value, lastname.value);
  firstname.value='';
  lastname.value='';
})


