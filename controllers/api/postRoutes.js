const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', withAuth ,async (req, res) => {
    try {

        const commentData = await Post.create({ ...req.body, user_id: req.session.user_id });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("wow")
    } catch (err) {
        res.status(400).json(err)
    }

})

router.put('/:id', withAuth,async (req, res) => {
    try {
        await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("excellent work boys")
    } catch (err) {
        res.status(400).json(err)
    }

})

module.exports = router;