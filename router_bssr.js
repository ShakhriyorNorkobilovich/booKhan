const express = require("express");
const router_bssr = express.Router();
const hotelController = require ("./controllers/hotelController");
const productController = require ("./controllers/productController");
const uploader_product = require ('./utils/upload-multer')("products");
const uploader_members = require ('./utils/upload-multer')("members");
/****************************
*         BSSR EJS          *
*****************************/

router_bssr.get("/", hotelController.home);

router_bssr
.get("/sign-up", hotelController.getSignupMyHotel)
.post("/sign-up", 
uploader_members.single('restaurant_img'), 
hotelController.signupProcess);



router_bssr
.get("/login", hotelController.getLoginMyHotel)
.post("/login", hotelController.loginProcess);

router_bssr.get("/logout", hotelController.logout);
router_bssr.get("/check-me", hotelController.checkSessions);

//productlarga daxldor apilar

router_bssr.get("/products/menu", hotelController.getMyHotelProducts);
router_bssr.post("/products/create", 
    hotelController.validateAuthHotel,
    uploader_product.array("product_images", 5),
    productController.addNewProduct
    );
router_bssr.post("/products/edit/:id",
hotelController.validateAuthHotel, 
productController.updateChosenProduct);

router_bssr.get("/all-hotel", 
hotelController.validateAdmin, 
hotelController.getAllHotels);

router_bssr.post("/all-hotel/edit", 
hotelController.validateAdmin, 
hotelController.updateHotelByAdmin);


module.exports = router_bssr;