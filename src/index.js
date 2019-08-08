const completeContainer = document.getElementById('complete-container')
const header = document.getElementById('header')
const isaacPhoto = document.createElement('IMG')
const description = document.getElementById('description')
const projectsArray = [{title: 'Captionr', description: 'A caption contest application where users can post pictures, leave captions, up or downvote captions.', liPoints: ['As a group of two, formatted a single page Vanilla JS application to allow users to view all pictures and top voted captions.', 'Developed join table between users and captions to allow users to vote on captions.', 'Implemented logic in Javascript that sorts captions by voting score and marks the most upvoted caption.', 'Styled single page application with custom CSS for a unique and easy-to-navigate look.'], video: '<iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/cwxn_hTB6M8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', gitfront: 'https://github.com/isaacos/CaptionrFrontEnd', gitback: 'https://github.com/isaacos/CaptionrBackEnd'},
{title: 'Bgft', description: 'A comic application that allows users to report sightings of Bigfoot with locations and photos.', liPoints:['As a group of two, implemented Leaflet to provide users with an interactive map to post and view sightings.', 'Built model for ease in viewing information and filling out forms.', 'Created full CRUD actions to allow users to make edit or delete comments.', 'Instituted routes that redirect user to login page if they are not signed in.'], video: '<iframe  id="iframe" width="560" height="315" src="https://www.youtube.com/embed/M8bjI8HwzdM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', gitfront: 'https://github.com/estherk15/bgft-frontend', gitback: 'https://github.com/estherk15/bgft-backend'},
{title: 'Auth Eats', description: 'Yelp style restaurant review website that allows more knowledgable users to leave an authoritative review.', liPoints: ['Built search functionality in React components to allow user to search restaurants through the navbar.', 'Generated an API based on requests from Yelp’s API to allow frontend developers to easily access the relevant information.', 'Linked users with a self referential join table to allow users to grant other users permission to leave authentic reviews.', 'Worked with a combination of Materialize and custom CSS for an intuitive and styled user experience.'], video: '<iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/-hGsP7ygPV4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', gitfront: 'https://github.com/isaacos/auth-eats-frontend', gitback: 'https://github.com/isaacos/auth-eats-backend'}
]



isaacPhoto.id = 'photo'
isaacPhoto.src = './src/images/ext.jpeg'
header.insertBefore(isaacPhoto, header.firstChild)
const titleDiv = document.createElement('DIV')
titleDiv.id = 'title-div'
titleDiv.innerHTML += `
  <h1 class="title" id="name">Isaac Oseas</h1>
  <h3 class="title" id="sub-title">Full Stack Developer</h3>
  <h3 class="title" id="sub-title">Very normal person</h3>
  <h3 class="title other" id="sub-title">
    <a href="https://www.linkedin.com/in/isaac-oseas-b8b0b0a4/">LinkedIn</a>
    <a href="https://github.com/isaacos">Github</a>
    <a href="mailto:oseasisaac91@gmail.com">Email</a>
  </h3>`
header.insertBefore(titleDiv, header.firstChild)

description.innerHTML += `
    <p>My first experience with tech was in graduate school when I learned about Linux in order to install it on a cheap laptop. This sparked my interest to learn more about technology as a means to help people. Since then I graduated from the Flatiron School becoming a fullstack developer with experience working with JavaScript, Ruby on Rails, React/Redux, HTML5, CSS. My coding philosophy is that functionality and style should be interconnected, and that the best code is written by people who are always learning.</p>`

const projects = document.createElement('DIV')
projects.id = 'projects'

function liProject(liPoints = []){
  allListItems = ''
  liPoints.forEach(point => {
    allListItems += `<li>${point}</li>`
  })
  return allListItems
}

function projectCardGenerator() {
  projectsArray.forEach(project => {
    projects.innerHTML += `
    <div>
      <div class="project-inner-div">
        <div class="project-description">
        <h2>${project['title']}</h2>
          <div class="links">
            <h5><a href=${project['gitfront']}>frontend</a></h5>
            <h5><a href=${project['gitback']}>backend</a></h5>
          </div>
          <p>${project['description']}</p>
          <ul>
            ${liProject(project['liPoints'])}
          </ul>
        </div>
        <div class="iframe-container">
          ${project['video']}
        </div>
      </div>
    </div>`
  })
}
projectCardGenerator()

header.appendChild(projects)
// header.innerHTML += `
//   <div class="recommendation-div">
//     <form id="recommendation-form">
//       <input type="text" id="recommendation-input" value="">
//       <button type="submit">Submit</button>
//     </form>
//     <ul id="recommendation-list"></ul>
//   </div>`

// const recommendationForm = document.getElementById('recommendation-form')
// const recommendationList = document.getElementById('recommendation-list')
//
// function loadRecommendations(recommendations){
//   recommendations.data.forEach(recommendation => {
//     addRecommendation(recommendation)
//   })
// }
//
// function addRecommendation(recommendation){
//   recommendationList.innerHTML += `<li>${recommendation.text}</li>`
// }
//
// window.addEventListener('load', () => {
//   fetch('http://localhost:4000/api/recommendations')
//   .then(response => response.json())
//   .then(recommendations => loadRecommendations(recommendations))
// })
//
// recommendationForm.addEventListener('submit', () => {
//   event.preventDefault()
//   fetch('http://localhost:4000/api/recommendations', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       text: document.getElementById("recommendation-input").value
//     })
//   })
//   .then(response => response.json())
//   .then(recommendation => addRecommendation(recommendation))
// })
