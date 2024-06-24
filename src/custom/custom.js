$(document).ready(function () {
   $('.accordion').click(function () {
        // this.classList.toggle("active");
        var panel = $(this).next(".panel");
        if (panel.hasClass('hidden')) {
            panel.removeClass('hidden').addClass('block');
        } else {
            panel.removeClass('block').addClass('hidden');
        }
    })
})