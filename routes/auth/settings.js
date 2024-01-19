const User = require('../../modal/register')


const updateSetting = async (req, res) => {
    try {
        const {
            username,
            goals,
            gender,
            food,
            age,
            activationLevel,
            weight,
            height,
            healthConditionCategory,
            healthCondition
        } = req.body
        const userID = req.params.id

        const updateUser = await User.findByIdAndUpdate(
            userID,
            {
                $set: {
                    username: req.body.username,
                    goals: req.body.goals,
                    food: req.body.food,
                    gender: req.body.gender,
                    age: req.body.age,
                    activationLevel: req.body.activationLevel,
                    weight: req.body.weight,
                    height: req.body.height,
                    healthConditionCategory: req.body.healthConditionCategory,
                    healthCondition: req.body.healthCondition
                },

            },
            {
                new: true
            }
        )

        res.status(200).json({ message: 'Settings updated successfully', userData: updateUser });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports = updateSetting