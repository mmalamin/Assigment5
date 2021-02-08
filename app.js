fetch('https://restcountries.eu/rest/v2/all')
.then (res => res.json())
.then(data => displayContries(data));

const displayContries = countries => {
const ul = document.getElementById('countries');
countries.forEach(country => {
  const countryDiv = document.createElement('div');
  countryDiv.className = 'country';
  const countryInfo = `
  
  <h3 class ="country-name"> ${country.name}</h3>
  <p> ${country.capital} </p>
  `
  countryDiv.innerHTML = countryInfo;
  countriesDiv.appendChild(countryDiv);
  
});









//  const h3 = document.createElement('h3');
//  h3.innerText = country.name;
//  const p = document.createElement('p');
//  p.innerText = country.capital;
//  countryDiv.appendChild(h3);
//  countryDiv.appendChild(p);
//  countriesDiv.appendChild(countryDiv);



//  const li = document.createElement('li');
//    li.innerText = country.name;
//    ul.appendChild (li);
  
}