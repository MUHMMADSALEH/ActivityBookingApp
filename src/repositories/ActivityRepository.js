const Activity = require('../models/Activity');

class ActivityRepository {
  async findAll() {
    return Activity.find().sort({ dateTime: 1 });
  }

  async findById(id) {
    return Activity.findById(id);
  }
}

module.exports = new ActivityRepository(); 