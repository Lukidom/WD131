const carButton = document.getElementById('car-button');
const martialartButton = document.getElementById('martialart-button');
const gunguyButton = document.getElementById('gunguy-button');

// Add event listeners to the buttons
carButton.addEventListener('click', () => {
    // Create a new window with the paragraph of information
    const carInfoWindow = window.open('', 'Car Defense', 'width=400,height=200');
    carInfoWindow.document.write('<p>Car defense information goes here...</p>');
});

martialartButton.addEventListener('click', () => {
    const martialartInfoWindow = window.open('', 'Martial Arts', 'width=400,height=200');
    martialartInfoWindow.document.write('<p>Martial arts information goes here...</p>');
});

gunguyButton.addEventListener('click', () => {
    const gunguyInfoWindow = window.open('', 'Firearms', 'width=400,height=200');
    gunguyInfoWindow.document.write('<p>Firearms information goes here...</p>');
});



// Get the image elements
const images = document.querySelectorAll('main img');

// Add an event listener to each image
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Open a new window with the image URL
    window.open(image.src, '_blank', 'width=800,height=600');
  });
});