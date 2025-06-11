/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);


var $rows = $('#table tr');
$('#search').keyup(debounce(function() {

  var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
    reg = RegExp(val, 'i'),
    text;

  $rows.show().filter(function() {
    text = $(this).text().replace(/\s+/g, ' ');
    return !reg.test(text);
  }).hide();
}, 300));

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function myFunction() {
  var input, filter, table, tr, title,year,first_author,key_words, i,txtvalue2,txtvalue3,txtvalue4,physics,txtvalue5, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    title = tr[i].getElementsByTagName("td")[0];
    first_author = tr[i].getElementsByTagName("td")[1];
    year = tr[i].getElementsByTagName("td")[3];
    key_words = tr[i].getElementsByTagName("td")[4];
    physics = tr[i].getElementsByTagName("td")[5];
    if (title) {
      txtValue = title.textContent || title.innerText;
      txtvalue2 = year.textContent || year.innterText;
      txtvalue3 = first_author.textContent || first_author.innterText;
      txtvalue4 = key_words.textContent || key_words.innterText;
      txtvalue5 = physics.textContent || physics.innterText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else if (txtvalue2.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
			else if (txtvalue3.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
			else if (txtvalue4.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
			else if (txtvalue5.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
			else {
        tr[i].style.display = "none";
      }
    }       
  }
}

