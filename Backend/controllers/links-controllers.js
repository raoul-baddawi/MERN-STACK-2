const asyncHandler = require('express-async-handler');

const Link = require('../models/linkModel');

// this function get the links
// the route is GET/iframe/link
const getLink = asyncHandler(async (req, res) => {
    const links = await Link.find()
    res.status(200).json(links)
})

// this function Create the links
// the route is POST/iframe/link
const setLink = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('plz hot text 3al alile')
    }

    const link = await Link.create({
        text: req.body.text
    })
    res.status(200).json(link)
}
)

// this function Updates the links
// the route is PUT/iframe/link/:id
const updateLink = asyncHandler(async (req, res) => {

    const link =  await Link.findById(req.params.id)

    if(!link) {
        res.status(400)
        throw new Error('link not found');
    }

    const updatedLink = await Link.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
    })
    res.status(200).json(updatedLink)
})

// this function delete link
// the route is DELETE/iframe/link/:id
const deleteLink = asyncHandler(async (req, res) => {
    const link =  await Link.findById(req.params.id)

    if(!link) {
        res.status(400)
        throw new Error('mesh mawjoud aslan la nemhi');
    }

    await link.remove()
    res.status(200).json({id: req.params.id})
})


module.exports = {
    getLink,
    setLink,
    updateLink,
    deleteLink,
}

