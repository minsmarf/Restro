const restaurants = require('../controllers/restaurants')
const reviews = require('../controllers/reviews')
const path = require('path')


module.exports = function(app) {

    // Restaurants ROUTES
    app.get('/api/restaurants/all', (req, res) => {
        restaurants.getAllRestaurants(req, res)
    })
    app.get('/api/restaurants/:id', (req, res) => {
        restaurants.getRestaurantById(req, res)
    })
    app.post('/api/restaurants/new', (req, res) => {
        restaurants.createRestaurant(req, res)
    })
    app.put('/api/restaurants/update/:id', (req, res) => {
        restaurants.updateRestaurantById(req, res)
    })
    app.delete('/api/restaurants/delete/:id', (req, res) => {
        restaurants.nukeRestaurantById(req, res)
    })
    // /api/restaurants/updaterate/
    app.put('/api/restaurants/updaterate/:id/:rate', (req, res) => {
        console.log('test rate');
        
        restaurants.updateRestaurantRateById(req, res)
    })

    // review ROUTES
    app.get('/api/reviews/all', (req, res) => {
        reviews.getAllReviews(req, res)
    })
    app.get('/api/reviews/:id', (req, res) => {
        reviews.getReviewByResto(req, res)
    })
    app.post('/api/reviews/new/:id', (req, res) => {
        reviews.createReview(req, res)
    })
    app.put('/api/reviews/update/:restaurantId/:reviewId', (req, res) => {
        reviews.updateReviewById(req, res)
    })
    app.delete('/api/reviews/delete/:restaurantId/:reviewId', (req, res) => {
        reviews.nukeReviewById(req, res)
    })

    app.all("*", (req, res, next) => {
        console.log(__dirname + "../../../public/dist/public/index.html")
        res.sendFile(path.resolve(__dirname + "../../../public/dist/public/index.html"))
    });
}