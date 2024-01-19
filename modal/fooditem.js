const { Schema, model } = require("mongoose");


const foodItem = new Schema({
    gainWeight: {
        sunday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        monday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        tuesday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        wednesday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        thursday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        friday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        saturday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },

    },
    loseWeight: {
        sunday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        monday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        tuesday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        wednesday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        thursday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        friday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        saturday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },

    },
    maintainWeight: {
        sunday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        monday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        tuesday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        wednesday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        thursday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        friday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },
        saturday: { breakfast: [String], lunch: [String], snack: [String], dinner: [String] },

    },
});

module.exports = model("mealSchema", foodItem)