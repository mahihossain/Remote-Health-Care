const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User, Doctor, registerValidation, loginValidation, docRegisterValidation } = require('../models/user')

router.get('/getdoctor/:id', async (req, res)=> {
    const docId = req.params.id
    const doc = await Doctor.find({_id:docId})
    res.send(doc)
})

router.get('/getdoctors', async (req, res)=> {
    const doc = await Doctor.find()
    res.send(doc)
})

router.get('/getusers', async (req, res)=> {
    const user = await User.find()
    res.send(user)
})

router.post('/register/patient', async (req, res) => {
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const check = await User.findOne({ email: req.body.email })
    if(check) return res.status(400).send('Email already registrated')

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
        type: 'patient',
        contactList: []  
    })
    user = await user.save()

    res.send(user)
})

router.post('/register/doctor', async (req, res) => {
    const {error} = docRegisterValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const check = await Doctor.findOne({ email: req.body.email })
    if(check) return res.status(400).send('Email already registrated')
    
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

    let doc = new Doctor({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
        practiceNumber: req.body.practiceNumber,
        idCardNr: req.body.idCardNr,
        type: 'doctor',
        approved: false,
        contactList: [],
        profilePic: '',
        degree: '',
        departament: '',
        profileInfo: [],
        raters: 0,
        rating: 0
    })
    doc = await doc.save()

    res.send(doc)
})

router.post('/login/patient', async (req, res) => {
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email: req.body.email })
    if(!user) return res.status(400).send('Email or password is incorrect')

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Email or password is incorrect')

    const token = jwt.sign({_id: user._id, name: user.name, email: user.email, type: user.type, contactList: user.contactList}, process.env.TOKEN_SECRET)
    res.header('authToken', token).send('logged in')
})

router.post('/login/doctor', async (req, res)=> {
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    console.log(Doctor)
    const doc = await Doctor.findOne({ email: req.body.email })
    
    if(!doc) return res.status(400).send('Email or password is incorrect')

    const validPass = await bcrypt.compare(req.body.password, doc.password)
    if(!validPass) return res.status(400).send('Email or password is incorrect')

    if(! doc.approved ) return res.status(400).send('Your account was not approved yet!')

    const token = jwt.sign({_id: doc._id, name: doc.name, email: doc.email, type: doc.type,contactList: doc.contactList}, process.env.TOKEN_SECRET)
    res.header('authToken', token).send(doc)

})

router.post('/getinfo', async (req, res)=> {
    const token = req.body.token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    res.send(decoded)
})

// UPDATE DOC INFO

router.put('/rate/:id', async (req, res)=> {
    let doc = await Doctor.findOne({_id: req.params.id})
    const raters = doc.raters+1
    const rating = doc.rating + req.body.rating

    doc = await Doctor.findOneAndUpdate({_id: req.params.id},{ rating: rating, raters: raters}, {new:true})

    res.send(doc)
})

router.put('/add-degree/:id', async (req, res)=> {
    const doc = await Doctor.findOneAndUpdate({ _id: req.params.id }, { degree: req.body.degree }, { new: true })

    res.send(doc)
})

router.put('/add-dep/:id', async (req, res) => {
    const doc = await Doctor.findOneAndUpdate({ _id: req.params.id }, { departament: req.body.departament }, { new: true })

    res.send(doc)
})

router.put('/add-info/:id', async (req, res)=> {
    const doc = await Doctor.findByIdAndUpdate({ _id: req.params.id }, {$push: {profileInfo: req.body.info}}, {new: true})

    res.send(doc)
})

module.exports = router