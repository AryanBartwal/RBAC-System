const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('../models/User');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected for seeding'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Test users to be created
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'admin123',
        role: 'ADMIN'
    },
    {
        name: 'Regular User',
        email: 'user@example.com',
        password: 'user123',
        role: 'USER'
    }
];

// Function to seed users
const seedUsers = async () => {
    try {
        // Clear existing users
        await User.deleteMany({});
        console.log('Deleted existing users');

        // Create new users
        for (const user of users) {
            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(user.password, salt);

            // Create user with hashed password
            await User.create({
                name: user.name,
                email: user.email,
                password: hashedPassword,
                role: user.role
            });
            
            console.log(`Created user: ${user.email} with role ${user.role}`);
        }

        console.log('Users seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding users:', error);
        process.exit(1);
    }
};

// Run the seed function
seedUsers();
