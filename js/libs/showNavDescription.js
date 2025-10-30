class Links {
  constructor(href) {
    this.href = href;
  }
  get removeHashTag() {
    return this.href.replace('#', '');
  }
}
class CapFirstLetters {
  constructor(name) {
    this.name = name;
  }
  get capitaliseFirstLetter() {
    return this.name.toLowerCase().replace(/^\w/, letter => letter.toUpperCase());
  }
}

const showNavDescription = showSpeed => {
  const $anchor = $('ul.navbar-nav a.nav-link');
  const $descriptor = $('#nav-description');
  $anchor.mouseenter(function () {
    // Get href from the target anchor tag and remove hashtag
    const link = new Links($(this).attr('href')).removeHashTag;
    // then capitalise the first letter
    const navDescription = new CapFirstLetters(link);
    // add it as text and desplay it
    $descriptor.text(navDescription.capitaliseFirstLetter);
    $descriptor.show(showSpeed);
  })
  $anchor.mouseleave(function () {
    // hide it
    $descriptor.hide();
  })
};

// display button description on hover
window.showNavDescription = showNavDescription;

