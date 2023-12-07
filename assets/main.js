document.querySelector('.find-people').addEventListener('click', () => {
    const inputName = document.querySelector('#secretInput').value.trim();

    if(inputName === '') {
        alert('Please enter your name');
        return;
    }

    const name = inputName.toLowerCase();

    const matches = deterministicDayShuffle(name);
    if (matches) {
        alert(`Your people to gift are: ${matches[0]} and ${matches[1]}`);
    } else {
        alert('Name not found in the participants list.');
    }
});

function deterministicDayShuffle(name) {
    const date = new Date();
    const uniqueDayCode = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const people = ['nico', 'josh', 'amanda', 'philippe', 'elaine', 'bruce'];

    if (!people.includes(name)) return null;

    // Simple shuffle based on the uniqueDayCode
    for (let i = 0; i < uniqueDayCode % 100; i++) {
        people.sort(() => Math.random() - 0.5);
    }

    const index = people.indexOf(name);
    return [people[(index + 1) % people.length], people[(index + 2) % people.length]];
}



(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);