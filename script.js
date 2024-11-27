function navigate(sectionId) {
    // ყველა სექციის დაფარვა
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
    // შესაბამისი სექციის ჩვენება
    document.getElementById(sectionId).classList.add('active');
}

function goBack() {
    // დაბრუნება შესავალ სექციაზე
    navigate('intro');
}
