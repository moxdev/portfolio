// Smooth scrolling with links
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 2000, 'swing', function () {
            window.location.hash = target;
        });
    });

// Collapse mobile navbar after clicking link
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
// hide the blue border after clicking the hamburger menu
$("a[href^=#]").on("click", function(e) {
  e.preventDefault();
  history.pushState({}, "", this.href);
});