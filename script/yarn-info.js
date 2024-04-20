document.addEventListener('DOMContentLoaded', function () {
    let toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
                this.textContent = 'Read More';
            } else {
                content.style.display = 'block';
                this.textContent = 'Read Less';
            }
        });
    });
});
