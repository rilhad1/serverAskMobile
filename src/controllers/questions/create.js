const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Question }) => async (req, res, next) => {
  try {
    const userId = req.user.id;
    const question = new Question(_.extend({
      createdBy: userId,
      createdAt: new Date(),
    }, req.body));


    await question.save();
    return sendCreated(res, { question });

  } catch (error) {
    next(error);
  }
};

module.exports = create;
