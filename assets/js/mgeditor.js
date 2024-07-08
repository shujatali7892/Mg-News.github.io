$(document).ready(function() {
    $('.datetab').click(function() {
        $('.datetab').toggleClass('show-change hide-change');
        $('.datetab i').toggleClass('fa-chevron-down fa-chevron-right');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdown-menu .dropdown').forEach(function (dropdown) {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});