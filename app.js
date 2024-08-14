const express = require('express');
const authRouter = require('./src/routes/authRoute'); // Corrected import
const someMiddleware = require('./src/middleware/middleware'); // Ensure this is a function
require('dotenv').config(); // Load environment variables

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: "Woohoo! REST APIs are working"
    });
});

app.use('/api/v1/auth', authRouter);  // Fixed path

app.use('*',(req,res,next) => {
    res.status(404).json({
        status: 'fail',
        message: " Route not found"
    })
})

app.use(someMiddleware); // Ensure this is a function

const port = process.env.APP_PORT || 3000; // Use environment variable or default to 3000
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});
