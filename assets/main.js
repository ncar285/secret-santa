function fullSet(){

	const presents = {}
	const people = ['nico', 'josh', 'amanda', 'philippe', 'elaine', 'bruce'];
	people.forEach((name) => {
		presents[name] = deterministicDayShuffle(name);
	})

	return presents;

}

document.querySelector('.find-people').addEventListener('click', () => {
    const inputName = document.querySelector('#secretInput').value.trim();

    if(inputName === '') {
        alert('Please enter your name');
        return;
    }

    const name = inputName.toLowerCase();
    const matches = deterministicDayShuffle(name);

	// const fullSetOfPresents = fullSet();
	// console.log("fullSet",fullSetOfPresents)
	
    if (matches) {
        alert(`Your people to gift are: ${matches[0]} and ${matches[1]}`);
    } else {
        alert('Name not found in the participants list.');
    }
});

function deterministicDayShuffle(name) {
    const date = new Date();
	// const date = new Date('1990-10-01');
	const uniqueDayCode = (date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()) * (date.getMonth() + 1 + date.getDate());
	let people = ['nico', 'josh', 'amanda', 'philippe', 'elaine', 'bruce'];
	if (!people.includes(name)) return null;

	const shuffled = [];
	while (people.length > 0){
		const index = (uniqueDayCode + people.length * 13) % people.length;
		shuffled.push(people[index]);
		people = people.filter((v,i) => i !== index);
	}

    const shift = (uniqueDayCode ) % shuffled.length;
    const shiftedPeople = [...shuffled.slice(shift), ...shuffled.slice(0, shift)];
    const index = shiftedPeople.indexOf(name);
    const person1 = shiftedPeople[(index + 1) % (shuffled.length)];
    const person2 = shiftedPeople[(index + 2) % (shuffled.length)];
 
    return [person1, person2];
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