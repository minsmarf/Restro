const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

module.exports = {
    getAllRestaurants: (req, res) => {
        Restaurant.find({}, (err, restaurants) => {
            if (err) {
                console.log(err)
                res.json({status: false, message: "Get All Restaurants", data: err})
            } else {
                console.log(restaurants)
                res.json({status: true, message: "Get All Restaurants", data: restaurants})
            }
        })
    },
    getRestaurantById: (req, res) => {
        Restaurant.find({_id: req.params.id}, (err, restaurant) => {
            if (err) {
                console.log(err)
                res.json({status: false, message: "Get Restaurant By Id", data: err})
            } else {
                console.log(restaurant)
                res.json({status: true, message: "Get Restaurant By Id", data: restaurant})
            }
        })
    },
    createRestaurant: (req, res) => {
        console.log ("create Resto - function")
        var restaurant = new Restaurant(req.body);
        console.log('newRest', restaurant);
        restaurant.save((err, restaurant) => {
            if (err) {
                console.log("creating resto - failed",err)
                res.json({status: false, message: "Create Restaurant", data: err})
            } else {
                console.log("creating resto - saved",restaurant)
                res.json({status: true, message: "Create Restaurant", data: restaurant})
            }
        })
    },
    updateRestaurantById: (req, res) => {
        Restaurant.findOne({_id: req.params.id}, (err, restaurantOld) => {
            // console.log('******************test********restaurantOld', restaurantOld);
            restaurantOld.name = req.body.name;
            restaurantOld.cuisine = req.body.cuisine;
            restaurantOld.save((err, restaurantNew) => {
                if (err) {
                    console.log(err)
                    res.json({status: false, message: "Update Restaurant", data: err})
                } else {
                    // console.log('******************test********restaurantNew',restaurantNew)
                    res.json({status: true, message: "Update Restaurant", data: restaurantNew})
                }
            })
        })
    },
    nukeRestaurantById: (req, res) => {
        console.log("req. param_id",req.params.id )
        Restaurant.findByIdAndRemove({_id: req.params.id}, (err) => {
            if (err) {
                console.log(err)
                res.json({status: false, message: "Delete Restaurant", data: err})
            } else {
                console.log("Delete")
                res.json({status: true, message: "Delete Restaurant", data: null})
            }
        })
    },
    updateRestaurantRateById: (req, res) => {
        Restaurant.updateOne({_id: req.params.id},{$set: {'avgRating': req.params.rate}},  (err, restaurantOld) => {
            restaurantOld.name = req.body.name;
            restaurantOld.cuisine = req.body.cuisine;
            if (err) {
                console.log(err)
                res.json({status: false, message: "update Restaurant rate ", data: err})
            } else {
                console.log("update rate", req.params.rate)
                res.json({status: true, message: "update Restaurant", data: null})
            }
            
        })
    }
}