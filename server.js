// Import necessary modules and packages
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const env = require('./config/environment'); // Import environment configuration
const port = process.env.PORT || 8000; // Set the port, use 8000 if no PORT is specified in the environment
const app = express(); // Create an Express application
const db = require(env.db_path); // Connect to the database
const flash = require('connect-flash'); // For flashing messages between requests
const session = require('express-session'); // Session middleware for Express
const mongoStore = require('connect-mongo'); // MongoDB session store for Express sessions
const passport = require('passport'); // Passport for authentication
const passportLocal = require(env.passport_path); // Local authentication strategy
const customMware = require(env.customMware_path); // Custom middleware

// Middleware setup
app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', './views'); // Set the views directory
app.use(expressLayout); // Use EJS layouts
app.use(express.static(env.assets_path)); // Serve static files from the 'assets' directory

// Session setup
app.use(session({
    name: 'placementCell',
    secret: env.secret_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100) // Set the session cookie max age
    },
    store: mongoStore.create({
        mongoUrl: env.mongoose_path,
        ttl: 14 * 24 * 60 * 60 // Set the session store time-to-live
    })
}));

// Passport middleware setup
app.use(passport.initialize());
app.use(passport.session());

// Flash messaging middleware setup
app.use(flash());
app.use(customMware.setFlash);

// Routing setup
app.use('/', require('./routes/index')); // Use the index route

// Start the server
app.listen(port, function (error) {
    if (error) {
        console.log("Error in running Server", error);
    }
    console.log("Server is running on", port);
});
