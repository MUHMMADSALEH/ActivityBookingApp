require('dotenv').config();
const mongoose = require('mongoose');
const Activity = require('../models/Activity');

const activities = [
  {
    title: 'Yoga Class',
    description: 'A relaxing yoga session for all levels.',
    location: 'Community Center',
    dateTime: new Date(Date.now() + 86400000)
  },
  {
    title: 'Cooking Workshop',
    description: 'Learn to cook delicious meals.',
    location: 'Kitchen Studio',
    dateTime: new Date(Date.now() + 2 * 86400000)
  },
  {
    title: 'Art Painting',
    description: 'Express yourself with colors and brushes.',
    location: 'Art Room',
    dateTime: new Date(Date.now() + 3 * 86400000)
  },
  {
    title: 'Hiking Trip',
    description: 'Explore the local trails with a group.',
    location: 'Mountain Park',
    dateTime: new Date(Date.now() + 4 * 86400000)
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await Activity.deleteMany();
    await Activity.insertMany(activities);
    console.log('Activities seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 