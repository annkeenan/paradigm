/* main.js */

$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});

$(document).ready(function() {
    $('#pagination').DataTable();
} );