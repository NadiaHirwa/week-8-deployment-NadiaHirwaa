
const User = require('../models/User');

exports.getUserDetails = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ['id', 'email', 'username'],
        });
        res.json(user);
    } catch (error) {
        next(error);
    }
};
