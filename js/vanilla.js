(function () {
  // addEventsListener
  var addEventsListener = function (o, t, e) { var n, i = t.split(" "); for (n in i) o.addEventListener(i[n], e) }

  var $body = document.querySelector('html');
  var $firstChild = document.querySelector('#wgn-nav-menu li:first-child a');
  var $lastChild = document.querySelector('#wgn-nav-menu li:last-child a');

  // Nav.
  var $nav = document.querySelector('#wgn-nav-menu');
  var $mobileMenuBtn = document.querySelector('#mobile-menu-btn');

  // Add attributes   
  $mobileMenuBtn.setAttribute('role', 'button');
  $mobileMenuBtn.setAttribute('aria-controls', 'navigation');
  $mobileMenuBtn.setAttribute('aria-expanded', 'false');

  // Basic open menu function
  var openMenu = function () {
    $mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }

  // Basic close menu function
  var closeMenu = function () {
    $mobileMenuBtn.setAttribute('aria-expanded', 'false');
    $mobileMenuBtn.focus();
  }

  // Event: Prevent clicks/taps inside the nav from bubbling.
  addEventsListener($nav, 'click touchend', function (event) {
    event.stopPropagation();
  });

  // Event: Hide nav on body click/tap.
  addEventsListener($body, 'click touchend', function (event) {
    $mobileMenuBtn.classList.remove('menu-opened');
    $nav.classList.remove('wgn-nav-menu-open');
    $mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });

  // Event: Toggle nav on click.
  $mobileMenuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $mobileMenuBtn.classList.toggle('menu-opened');
    $nav.classList.toggle('wgn-nav-menu-open');
    $mobileMenuBtn.getAttribute('aria-expanded') == 'true' ? closeMenu() : openMenu();
  });

  // Event: Hide on ESC.
  window.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
      if ($mobileMenuBtn.getAttribute('aria-expanded') == 'true') {
        $mobileMenuBtn.classList.remove('menu-opened');
        $nav.classList.remove('wgn-nav-menu-open');
        $mobileMenuBtn.getAttribute('aria-expanded') == 'true' ? closeMenu() : openMenu();
      }
    }
  });

  // Tab menu circular

  // At end of navigation block, return focus to navigation menu button
  addEventsListener($mobileMenuBtn, 'keydown', function (e) {
    if (e.keyCode === 9) {
      if (!e.shiftKey) {
        if ($mobileMenuBtn.getAttribute('aria-expanded') == 'true') {
          e.preventDefault();
          document.querySelector('#wgn-nav-menu li:first-child a').focus();
        }
      }
    }
  });

  // At start of navigation block, refocus close button on SHIFT+TAB
  addEventsListener($firstChild, 'keydown', function (e) {
    if (e.keyCode === 9) {
      if (e.shiftKey) {
        if ($mobileMenuBtn.getAttribute('aria-expanded') == 'true') {
          e.preventDefault();
          $mobileMenuBtn.focus();
        }
      }
    }
  });
})();   
