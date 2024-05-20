const asyncHandler = require('express-async-handler');

// @Desc Get Goals
// @route GET /api/goals
// @access PRIVATE
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message:'Get goals'});
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
    res.status(201).json({message:`${req.body.text}`});
})

// @Desc Update Goals
// @route PUT /api/goals/:id
// @access PRIVATE
const updateGoal = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json({message:`Updated goal ${id}`});
})


// @Desc Delete Goals
// @route DELETE /api/goals/:id
// @access PRIVATE
const deleteGoal = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json({message:`Delete goal ${id}`});
})

module.exports = {
    getGoals,
    getGoalById,
    createGoal,
    updateGoal,
    deleteGoal,
}