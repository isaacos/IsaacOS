const completeContainer = document.getElementById('complete-container')
const header = document.getElementById('header')
const isaacPhoto = document.createElement('IMG')
const description = document.getElementById('description')



isaacPhoto.id = 'photo'
isaacPhoto.src = './src/images/ext.jpeg'
header.insertBefore(isaacPhoto, header.firstChild)
const titleDiv = document.createElement('DIV')
titleDiv.id = 'title-div'
titleDiv.innerHTML += `
  <h1 class="title" id="name">Isaac Oseas</h1>
  <h3 class="title" id="sub-title">Full Stack Developer</h3>
  <h3 class="title" id="sub-title">Very normal person</h3>`
header.insertBefore(titleDiv, header.firstChild)

description.innerHTML += `
    <p>My first experience with tech was in graduate school when I learned about Linux in order to install it on a cheap laptop. This sparked my interest to learn more about technology as a means to help people. Since then I graduated from the Flatiron School becoming a fullstack developer with experience working with JavaScript, Ruby on Rails, React/Redux, HTML5, CSS. My coding philosophy is that functionality and style should be interconnected, and that the best code is written by people who are always learning.</p>`

const projects = document.createElement('DIV')
projects.id = 'projects'
projects.innerHTML += `
<div>
  <div class="project-inner-div">
    <div>
      <h2>Title</h2>
      <p>I would put a longer description here so you can see the description</p>
      <ul>
        <li>first aspect of the thing</li>
        <li>second aspect of the thing</li>
        <li>thirds aspect</li>
      </ul>
    </div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cwxn_hTB6M8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
  </div>
</div>`
header.appendChild(projects)
