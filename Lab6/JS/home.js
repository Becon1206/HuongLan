function showInfo(id) {
    const infoPopup = document.getElementById('info' + id);
    infoPopup.style.visibility = 'visible';
    infoPopup.style.opacity = '1';
}

function hideInfo(id) {
    const infoPopup = document.getElementById('info' + id);
    infoPopup.style.visibility = 'hidden';
    infoPopup.style.opacity = '0';
}
