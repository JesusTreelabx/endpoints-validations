const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/auth/sign-in', (req, res) => {
    console.log(req.body);
    const email = req.body["e-mail"]
    const password = req.body.password

    res.json({
        message: 'succes sign in',
        "e-mail": email,
        password: password

    })
    
});


app.post('/auth/sign-up', (req, res) => {
    console.log(req.body);
    // const name = req.body.name
    // const lastname = req.body.lastname
    // const birthday = req.body.birthday
    // const email = req.body.email
    // const password = req.body.password
    // const address = req.body.address
    // const phonenumber = req.body.phonenumber

    const {name, lastname, birthday, email, password, address, phonenumber} = req.body;

    res.json({
        message: 'register success'
    })
});


app.post('/auth/sign-out', (req, res) => {
    console.log(req.body);
    const signout = req.body.signout

    res.json({
        message: 'You have successfully logged out!'
    })
});


app.post('/auth/reset-password', (req, res) => {
    // console.log(req.body);

    const {email, confirmEmail, newPassword, confirmNewPassword} = req.body;
    console.log(`your email: ${email} password was updated successfully`);
    
    
    

    res.json({
        message: `your email: ${email} password was update successfully`
    })
});






app.listen(port, () => {
    console.log(`app listening ${port}`);
});
