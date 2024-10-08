import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';
import cors from `cors`;

// Initialize express application
const app = express();

// Connect Database
connectDatabase();

// Configure Middleware
app.use(express.json({ extended: false }));
app.use(cors({origin: `http://localhost3000`}));

// API endpoints
/**
 * @route GET /
 * @desc Test Endpoint
 */
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

/**
 * @route POST api/users
 * @desc Registered user
 */
app.post("/api/users", 
    [
        check('name', 'Please enter your name')
            .not()
            .isEmpty(),
        check('email', 'Please enter a valid email')
            .isEmail(),
        check('password', 'Please enter a password with 6 or more characters')
            .isLength({ min: 6 })
    ],
    (req, res) => {
        console.log(req.body);
        res.send(req.body);
    }
);

// Connection listener
const port = 5000;

app.listen(port, () => console.log(`Express server running on port ${port}`));