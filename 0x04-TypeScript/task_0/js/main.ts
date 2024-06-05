//interface named Student that accepts the following elements:
//firstName(string), lastName(string), age(number), and location(string)


interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent: Student = {
    firstName: 'Ismael',
    lastName: 'Nyambu',
    age: 20,
    location: 'Mombasa'
}

const secondStudent: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'Nairobi'
}

const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})