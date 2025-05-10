const User = require('../models/User');
const bcrypt = require('bcryptjs');

class UserRepository {
  async create(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = new User({
      ...userData,
      password: hashedPassword
    });
    return user.save();
  }

  async findByEmail(email) {
    return User.findOne({ email });
  }

  async findById(id) {
    return User.findById(id);
  }
}

module.exports = new UserRepository(); 