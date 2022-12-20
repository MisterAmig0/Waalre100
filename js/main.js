const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarItems = document.getelementsByClassName('navbar-items')[0]

toggleButton.addEventListener('click', () =>{
    navbarItems.classlist.toggle('active')
})