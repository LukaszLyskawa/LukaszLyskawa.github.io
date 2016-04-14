function scrollInto(target, offset, duration) {
    $('html,body').animate({
        scrollTop: $(target).offset().top + offset
    }, duration);
}