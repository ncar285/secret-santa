function fullSet(){

	const presents = {}
	const people = ['nico', 'josh', 'amanda', 'philippe', 'elaine', 'bruce', 'xavier'];
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
    // const date = new Date();
	const date = new Date('1995-15-01');
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

