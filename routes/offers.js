var express = require('express');
var router = express.Router();
const Offer = require("../controllers/offer");
const Joi = require("joi");

/* GET home page. */
router.get('/', function (req, res, next) {
    Offer.findAll().then(r => {
        res.send(r)
    })
});

router.post("/", function (req, res, next) {
  const { error } = validateOffer(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { name, company, salary, city } = req.body;

  Offer.insertOne({ name, company, salary, city }).then((result) => {
    res.send(result.ops[0]);
  });
});

const validateOffer = (offer) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    company: Joi.string().min(3).max(100).required(),
    salary: Joi.string().min(3).max(100).required(),
    city: Joi.string().min(3).max(100).required(),
  });

  return schema.validate(offer);
};


module.exports = router;