const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs = require("fs");

app.use('/views', express.static('view'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/static', express.static(path.join(__dirname, 'static')));

app.post('/', (req, res) => {
    let name = req.body.name;
    let phone = req.body.phone;
    let Email = req.body.Email;
    let Address = req.body.Address;
    let concern = req.body.concern;

    let outputToWrite = `The name of client is : ${name},
    
     Phone number is : ${phone},

      Email is : ${Email},

    concern is : ${concern}`;






    // Generate a unique filename using a timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `submission-${timestamp}.txt`;
    fs.writeFileSync(filename, outputToWrite);



    // Redirect to a new page after form submission
    res.redirect(`/newpage.html?filename=${filename}`);
});
app.use('/static', express.static(path.join(__dirname, 'static')));

// Set up the route to serve the contact.html page
app.get('/views/contact.html', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/newpage.html', (req, res) => {
    const filename = req.query.filename;
    res.status(200).sendFile(path.join(__dirname, 'views', 'newpage.html'));
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
