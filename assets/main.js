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
        don't buy the same gift as ${coGifters[0]} for ${matches[0]}\n
        don't buy the same gift as ${coGifters[1]} for ${matches[1]}\n
        `);
    } else {
        alert('Name not found in the participants list.');
    }
});

function deterministicDayShuffle(name) {
    // actual date:
    date = new Date('2001-01-15');

    // developement date:
    // date = new Date('2011-02-12');

	const uniqueDayCode = (date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()) * (date.getMonth() + 1 + date.getDate());
	let people = ['nico', 'josh', 'amanda', 'philippe', 'elaine', 'bruce', 'xavier'];
	if (!people.includes(name)) return null;

	const shuffled = [];
	while (people.length > 0){
		const index = (uniqueDayCode + people.length * 13) % people.length;
		shuffled.push(people[index]);
		people = people.filter((v,i) => i !== index);
	}


    const indexOfPerson = shuffled.indexOf(name)

    let sorted = [];
    if (indexOfPerson === 0){
        sorted = [shuffled[shuffled.length - 1], ...shuffled.slice(0,shuffled.length - 1)];
    } else if (indexOfPerson === 1){
        sorted = shuffled;
    } else {
        sorted = [...shuffled.slice(indexOfPerson - 1), ...shuffled.slice(0, indexOfPerson - 1)]
    }

    const matches = [sorted[2], sorted[3]];
    const coGifters = [sorted[0], sorted[2]];
 
    return [matches, coGifters];
}

