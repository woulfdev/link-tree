window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('popup-container').addEventListener('click', (event) => {
        document.getElementById('popup-container').style.display = 'none'
    })
})

function openLink(link) {
    window.open(link, '_blank');
}

function openPopUp() {
    document.getElementById('popup-container').style.display = 'block'
}