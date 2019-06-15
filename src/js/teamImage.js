const imageContainer = document.querySelector('.image-bg')
const showAllButton = document.querySelector('.show-all-members')
const allTeamMembers = document.querySelectorAll('.team-member')

function addPosition(div, c) {
    div.style.left = c[0] + '%';
    div.style.top = c[1] + '%';
    div.style.width = c[2] - c[0] + '%';
    div.style.height = c[3] - c[1] + '%';
}

function getPosition(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();

    var width = e.target.width
    var height = e.target.height

    var x = e.clientX - rect.left; // x position within the element.
    var y = e.clientY - rect.top;  // y position within the element.

    var xPercent = (x / width) * 100
    var yPercent = (y / height) * 100

    console.log(xPercent, yPercent)
}

function addTag(c, text, clickEvent) {
    const div = document.createElement('div');
    const caption = document.createElement('div');

    div.addEventListener('click', clickEvent);

    /* caption.innerHTML = text
    caption.classList.add('tag-caption')
    div.appendChild(caption) */

    div.classList.add('image-tag')
    addPosition(div, c)
    
    imageContainer.appendChild(div)
}

function filterImages(person) {
    allTeamMembers.forEach(div => {
        if (div.id === person) {
            div.classList.remove('hidden')
            div.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
        } else {
            div.classList.add('hidden')
        }
    })
    showAllButton.classList.remove('hidden')
}

function resetFilter(e) {
    e.preventDefault()
    allTeamMembers.forEach(div => {
        div.classList.remove('hidden')
    })
    showAllButton.classList.add('hidden')
}

imageContainer.addEventListener('click', getPosition);
if (document.getElementById("team") !== null) {
    showAllButton.addEventListener('click', resetFilter)
    addTag([45,49, 52,66], 'Paul', () => { filterImages('paul') })
    addTag([15,27, 21,40], 'Vincent', () => { filterImages('vincent') })
    addTag([70,25, 77,38], 'Johannes', () => { filterImages('johannes') })
    addTag([3,39, 10,52], 'Juli', () => { filterImages('juli') })
    addTag([54,21, 61,35], 'Luise', () => { filterImages('luise') })
    addTag([32,22, 38,32], 'Marc', () => { filterImages('marc') })
    addTag([25,27, 31,39], 'Sandra', () => { filterImages('sandra') })
}
