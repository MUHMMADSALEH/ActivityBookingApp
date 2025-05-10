const activityRepository = require('../repositories/ActivityRepository');

class ActivityController {
  async listActivities(req, res) {
    try {
      const activities = await activityRepository.findAll();
      res.json(activities);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
}

module.exports = new ActivityController(); 