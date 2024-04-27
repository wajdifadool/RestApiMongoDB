const express = require('express');
const router = express.Router();
const Idea = require('../model/Idea');
const ideas = [
  {
    id: 2,
    text: 'dsf',
    tag: 'tevj',
    username: 'S',
    date: 'Asd',
  },
  {
    id: 3,
    text: 'dsf',
    tag: 'tevj',
    username: 'S',
    date: 'Asd',
  },
  {
    id: 4,
    text: 'dsf',
    tag: 'tevj',
    username: 'S',
    date: 'Asd',
  },
];
// Ideas  Route logic goes here

// get all ideas
router.get('/', async (req, res) => {
  try {
    //https://mongoosejs.com/docs/api/model.html#Model.find()
    const ideas = await Idea.find();

    return res.status(200).send({
      success: true,
      data: ideas,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: 'something went worng',
    });
  }
});

// Template
// router.get('/api/ideas/:id', (req, res) => {
//   res.status(200).send({
//     success: true,
//     data: req.params.id,
//   });
// });

// Get single idea
router.get('/:id', async (req, res) => {
  try {
    // https://mongoosejs.com/docs/api/model.html#Model.findById()
    const idea = await Idea.findById(req.params.id);

    return res.status(200).send({
      success: true,
      data: idea,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      error: error,
    });
  }
  // make sure to add return
  //   if (!idea) {
  //     return res.status(404).send({
  //       success: false,
  //       error: 'Resource not found',
  //     });
  //   }
});

// Add an idea
router.post('/', async (req, res) => {
  //construt an idea objcct fro the req obkect
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    // https://mongoosejs.com/docs/api/model.html#Model.prototype.save()
    const saveIdea = await idea.save();
    return res.status(200).send({
      success: true,
      data: saveIdea,
    });
  } catch (error) {
    res.status(200).send({
      success: false,
      message: 'something went worng',
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
    const updaedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      data: updaedIdea,
    });
  } catch (error) {
    // make sure to add return
    return res.status(404).send({
      success: false,
      error: 'Resource not found',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      data: [],
    });
  } catch (error) {
    // make sure to add return
    return res.status(404).send({
      success: false,
      error: 'Resource not found',
    });
    console.log(error);
  }
});

module.exports = router;
