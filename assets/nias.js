(function($) {
    'use strict';

    jQuery(document).ready(function($) {

        $(document).on('click', '.course-section-title-elementory.cursor-pointer', function(event) {
            event.preventDefault();
            $(this).parent().toggleClass('active');
            $(this).next('.panel-group').slideToggle(300);
        });

        $(document).on('click', '.notif-row', function(event) {
            event.preventDefault();
            $(this).parent().toggleClass('active');
            $(this).next('.notif-content').slideToggle(300);
        });

    });
})(jQuery);
(function($) {
    'use strict';

    jQuery(document).ready(function($) {

        $(document).on('click', 'h5.course-section-title.cursor-pointer', function(event) {
            event.preventDefault();
            $(this).parent().toggleClass('active');
            $(this).next('.panel-group').slideToggle(300);
        });

    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
  var headings = document.querySelectorAll(".course-panel-heading");

  headings.forEach(function(heading) {
    heading.addEventListener("click", function() {
      var content = this.nextElementSibling;
      var innerContent = content.querySelector(".panel-content-inner");
      var contentHeight = innerContent.offsetHeight;
      content.style.maxHeight = content.classList.contains("active") ? "0" : contentHeight + "px";
      content.classList.toggle("active");
    });
  });
});