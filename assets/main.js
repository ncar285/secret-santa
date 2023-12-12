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
    const [matches, coGifters] = deterministicDayShuffle(name);


    if (matches) {
        alert(`Your people to gift are: ${matches[0]} and ${matches[1]}\n
        don't but the same gift as ${coGifters[0]} for ${matches[0]}\n
        don't but the same gift as ${coGifters[1]} for ${matches[1]}\n`);
    } else {
        alert('Name not found in the participants list.');
    }
});

function deterministicDayShuffle(name) {
    date = new Date('2001-01-15')
	const uniqueDayCode = (date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()) * (date.getMonth() + 1 + date.getDate());
	let people = ['nico', 'josh', 'amanda', 'philippe', 'elaine', 'bruce', 'xavier'];
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


    const coGifter1Index = (shiftedPeople.indexOf(person1) - 2 + shuffled.length) % shuffled.length;
    const coGifter2Index = (shiftedPeople.indexOf(person1) - 1 + shuffled.length) % shuffled.length;
    const coGifter1 = shiftedPeople[coGifter1Index];
    const coGifter2 = shiftedPeople[coGifter2Index];

    const matches = [person1, person2];
    const coGifters = [coGifter1, coGifter2];
 
    return [matches, coGifters];
}

