// script.js
$(document).ready(function() {
    $('.ui.sidebar').sidebar({
        context: $('.pusher'),
        transition: 'push'
    });

    $('#sidebarToggle').click(function() {
        $('.ui.sidebar').sidebar('toggle');
    });
});