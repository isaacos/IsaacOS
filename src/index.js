const completeContainer = document.getElementById('complete-container')
const header = document.getElementById('header')
const isaacPhoto = document.createElement('IMG')
const description = document.getElementById('description')
const projectsArray = [
  {
    title: 'Captionr',
    description: 'A caption contest application where users can post pictures, leave captions, and up or downvote captions.',
    liPoints:[
        'As a group of two, formatted a single page Vanilla JS application to display all pictures and top voted captions.',
        'Developed join table between users and captions to allow users to vote on captions.',
        'Implemented logic in JavaScript that sorts captions by voting score and marks the most upvoted caption.',
        'Styled single page application with custom CSS for a unique and easy-to-navigate look.'
    ],
    video: '<iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/cwxn_hTB6M8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    gitfront: 'https://github.com/isaacos/CaptionrFrontEnd',
    gitback: 'https://github.com/isaacos/CaptionrBackEnd'
  },
  {
    title: 'Bgft',
     description: 'A comic application that allows users to report sightings of Bigfoot with locations and photos.',
     liPoints:[
       'As a group of two, implemented React-Leaflet to provide users with an interactive map to post and view sightings.',
       'Built model for ease in viewing information and filling out forms.',
       'Created full CRUD actions to allow users to make, edit, or delete comments.',
       'Instituted routes that redirect user to login page if they are not signed in.'
      ],
      video: '<iframe  id="iframe" width="560" height="315" src="https://www.youtube.com/embed/M8bjI8HwzdM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      gitfront: 'https://github.com/estherk15/bgft-frontend',
      gitback: 'https://github.com/estherk15/bgft-backend'
    },
    {
      title: 'Auth Eats',
      description: 'Yelp style restaurant review website that allows more knowledgable users to leave an authoritative review.',
      liPoints:[
        'Modified code in order to optimize queries to the database using Active Record.',
        'Constructed multicomponent React/Redux application.',
        'Populated a custom database with restaurant information using data from Yelp’s API.',
        'Incorporated privileges within a schema that allows users to modify permissions of other users.'
      ],
      video: '<iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/-hGsP7ygPV4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      gitfront: 'https://github.com/isaacos/auth-eats-frontend',
      gitback: 'https://github.com/isaacos/auth-eats-backend'
    }
].reverse()



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
    <a href="https://medium.com/@oseasisaac91">Blog</a>
    <a href="mailto:oseasisaac91@gmail.com">Email</a>
  </h3>`
header.insertBefore(titleDiv, header.firstChild)

description.innerHTML += `
    <p>My first experience with tech was in graduate school when I learned about Linux in order to install it on a cheap laptop. I immediately fell in love with programming because of its potential to connect people and make their lives easier.  Since then I graduated from the Flatiron School  becoming a fullstack developer with experience working with JavaScript, Ruby on Rails, React/Redux, HTML5, CSS. My coding philosophy is that functionality and style should be interconnected, and that the best code is written by people who are always learning.</p>`


const projects = document.createElement('DIV')
projects.id = 'projects'

const projectsTopBorder = document.createElement('DIV')
projectsTopBorder.id = 'projects-top-border'

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
header.appendChild(projectsTopBorder)
projectsAndLeft =  document.createElement('DIV')
projectsAndLeft.id = 'projects-and-left'
projectsLeftBorder = document.createElement('DIV')
projectsLeftBorder.id = 'projects-left-border'
header.appendChild(projectsAndLeft)
projectsAndLeft.appendChild(projectsLeftBorder)
projectsAndLeft.appendChild(projects)

window.addEventListener('scroll', function(e){
  const y = window.scrollY;

  console.log(projects.offsetHeight)
  if(y > 200){
      projectsTopBorder.style.width = "calc(100% - 35px)"
      setTimeout(() => {
        projectsLeftBorder.style.height = projects.offsetHeight + "px"
      }, 1000)

  }
})
