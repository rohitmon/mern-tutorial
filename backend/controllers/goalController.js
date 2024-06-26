const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @Desc Get Goals
// @route GET /api/goals
// @access PRIVATE
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json({goals});
})


// @Desc Get Goal
// @route GET /api/goals/:id
// @access PRIVATE
const getGoalById = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json({message: `Fetched goals for ${id}`});
})


// @Desc Create Goals
// @route POST /api/goals
// @access PRIVATE
const createGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please provide a text');
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(201).json({goal});
})

// @Desc Update Goals
// @route PUT /api/goals/:id
// @access PRIVATE
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({updatedGoal});
})


// @Desc Delete Goals
// @route DELETE /api/goals/:id
// @access PRIVATE
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    await Goal.remove()

    res.status(200).json({message: req.params.id});
})

module.exports = {
    getGoals,
    getGoalById,
    createGoal,
    updateGoal,
    deleteGoal,
}