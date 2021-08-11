/*const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
*/

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi

// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki

// Isspausdinti mokinio varda, jei jis turi pazymi 8

// Isspausdinti mokinio varda, jei jis neturi pazymio 7


const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

let zemiausiasBalas = Math.min(...data[0].marks);
for (var i = 0; i < data.length; i++) {
    let minBalas = Math.min(...data[i].marks);
    if (minBalas <= zemiausiasBalas) {
        zemiausiasBalas = minBalas;
    }
}

for (var i = 0; i < data.length; i++) {
    if (Math.min(...data[i].marks) == zemiausiasBalas) {
        console.log('Mokinys ' + data[i].name);
        console.log('Zemiausias balas ' + zemiausiasBalas);
    }
}

let didziausiasBalas = Math.max(...data[0].marks);
for (var i = 0; i < data.length; i++) {
    let maxBalas = Math.max(...data[i].marks);
    if (maxBalas >= didziausiasBalas) {
        didziausiasBalas = maxBalas;
    }
}

for (var i = 0; i < data.length; i++) {
    if (Math.max(...data[i].marks) == didziausiasBalas) {
        console.log('Mokinys ' + data[i].name);
        console.log('Didziausias balas ' + didziausiasBalas);
    }
}

/*

function findLargestNum(arr) {
    return Math.max(...arr);

}

*/