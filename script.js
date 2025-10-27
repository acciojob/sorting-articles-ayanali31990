const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to remove 'A', 'An', 'The' from beginning of band name
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands alphabetically ignoring the articles
const sortedBands = bands.sort((a, b) => {
  if (stripArticle(a) > stripArticle(b)) return 1;
  if (stripArticle(a) < stripArticle(b)) return -1;
  return 0;
});

// Create a UL with the correct ID
const ul = document.createElement('ul');
ul.id = 'bands'; // ✅ matches test case expectation

// Add each sorted band to the list
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

// Append the list to the body
document.body.appendChild(ul);
