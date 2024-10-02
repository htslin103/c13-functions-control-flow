
// function nameForAge(age) {
//     if (typeof age === 'string') {
//         age = age.trim(); // Trim any spaces if it's a string
//     }

//     age = Number(age);  // Convert the input to a number
//     if (isNaN(age)) return 'Invalid input';  // Handle non-numeric input
//     if (age < 0) return 'Whhhhattt?';
//     if (age < 2) return 'baby';
//     if (age >= 2 && age <= 12) return 'child';
//     if (age >= 13 && age < 20) return 'teen';
//     if (age >= 20 && age < 30) return 'twenty something';
//     if (age >= 30 && age < 40) return 'thirty something';
//     if (age >= 40) return 'almost grown up';
//     return 'Ageless';
// }

// addTextToPage('Age-name-o-matic!')
// addInputToPage('Age', 7)
// addButtonToPage('Get name for age', () => {
//     const age = getInputAsNumber('Age')
//     const ageName = nameForAge(age)
//     addTextToPage('Name for age ' + age + ' is ' + ageName)
// })
