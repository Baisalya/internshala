
const express = require('express');
const app = express();
app.use(express.json());

// Temporary storage for student data
let students = [];

// POST request to add a new student
app.post('/addstudent', (req, res) => {
    const { id, name, gpa } = req.body;

    // Check if student ID is unique
    if (students.some(student => student.id === id)) {
        return res.status(400).json({ error: 'Student ID must be unique' });
    }

    // Add student to the array
    students.push({ id, name, gpa });
    res.status(201).json({ message: 'Student added successfully' });
});

// Endpoint to retrieve all student data
app.get('/allstudents', (req, res) => {
    let output = '<h1>All student data</h1>';
    students.forEach(student => {
        output += `<div>student id: ${student.id}</div><div>student name: ${student.name}</div><div>gpa: ${student.gpa}</div><br>`;
    });
    res.send(output);
});
// Endpoint to retrieve data of a particular student by ID
app.get('/student/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(student => student.id === studentId);

    if (!student) {
        return res.status(404).send('Student not found');
    }

    res.send(`
        <h1>Student Details</h1>
        <div>Student ID: ${student.id}</div>
        <div>Name: ${student.name}</div>
        <div>GPA: ${student.gpa}</div>
    `);
});
// Endpoint to find the topper among the class
app.get('/topper', (req, res) => {
    if (students.length === 0) {
        return res.status(404).send('No students found');
    }

    let topper = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].gpa > topper.gpa) {
            topper = students[i];
        }
    }

    res.send(`
        <h1>Topper Details</h1>
        <div>Student ID: ${topper.id}</div>
        <div>Name: ${topper.name}</div>
        <div>GPA: ${topper.gpa}</div>
    `);
});



// PORT NO
const port = 5000;
app.listen(port, () => {
    console.log(`Server  http://localhost:${port}`);
});
