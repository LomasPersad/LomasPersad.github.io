$(document).ready(function () {
    // Generate the Table of Contents
    $(
      ".blog-post h2, .blog-post h3, .blog-post h4, .blog-post h5, .blog-post h6"
    ).each(function (index) {
      var id = "section-" + index;
      $(this).attr("id", id);

      // Append ToC links to the moving Table of Contents
      $("#moving-toc").append(
        '<li class="list-group-item"><a href="#' +
          id +
          '">' +
          $(this).text() +
          "</a></li>"
      );

      // Append ToC links to the main Table of Contents
      $("#table-of-contents").append(
        '<a class="nav-link" href="#' + id + '">' + $(this).text() + "</a>"
      );
    });
  });