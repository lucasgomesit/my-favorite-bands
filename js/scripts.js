/* Scroll Reveal */
const sr = ScrollReveal({
  distance: '30px',
  duration: 1800,
  reset: false
});


/* Guns */
sr.reveal(`#guns .col-md-3, #guns .col-md-4, #guns .col-md-5, #guns .band-title, #guns .social-media-container`, {
  origin: 'top',
  interval: 200,
  delay: 0.3
  })

/* Pearl Jam */  
sr.reveal(`#pearl-jam .col-md-3`, {
  origin: 'left',
  interval: 300,
  delay: 0.4
})

sr.reveal(`#pearl-jam .col-md-5`, {
  origin: 'right',
  interval: 300,
  delay: 0.4
})

sr.reveal(`#pearl-jam .band-title`, {
  origin: 'top',
  interval: 300,
  delay: 0.4
})

sr.reveal(`#pearl-jam .band-description, #pearl-jam .social-media-container`, {
  origin: 'bottom',
  interval: 300,
  delay: 0.4
})

/* Red Hot */
sr.reveal(`#red-hot .col-md-3, #red-hot .col-md-4, #red-hot .col-md-5, #red-hot .band-title, #red-hot .social-media-container`, {
  origin: 'bottom',
  interval: 300,
  delay: 0.3
  })
