const express = require("express");
const router = express.Router();



router.get("/", function (req, res) {
  res.send("home sahifasidasiz");
});

router.get("/menu", function (req, res) {
  res.send("menu sahifasidasiz");
});

router.get("/community", function (req, res) {
  res.send("jamiyat sahifasidasiz");
});



/********************
 *     REST API     *
 ********************/

// // member related routers
// router.post("/signup", memberController.signup);
// router.post("/login", memberController.login);
// router.get("/logout", memberController.logout);
// router.get("/check-me", memberController.checkMyAuthentication);
// router.get(
//   "/member/:id",
//   memberController.retrieveAuthMember,
//   memberController.getChosenMember
// );

// router.post(
//   "/member-liken", 
// memberController.retrieveAuthMember, 
// memberController.likeMemberChosen
// );

// router.post(
//   "/member/update", 
//   memberController.retrieveAuthMember, 
//   uploader_member.single('mb_image'), 
//   memberController.updateMember
// );



// // Product related routers

// router.post(
//   "/products",
//   memberController.retrieveAuthMember,
//   productController.getAllProducts
// );

// router.get(
//     "/products/:id",
//     memberController.retrieveAuthMember,
//     productController.getChosenProduct
//   );

// // Restaurant related routers

// router.get(
//   "/restaurants",
//   memberController.retrieveAuthMember,
//   restaurantController.getRestaurants
// );

// router.get(
//   "/restaurants/:id",
//   memberController.retrieveAuthMember,
//   restaurantController.getChosenRestaurant
// );


// // Restaurant related routers
// router.post(
//   "/orders/create",
//   memberController.retrieveAuthMember,
//   orderController.createOrder
// );

// router.get(
//   "/orders",
//   memberController.retrieveAuthMember,
//   orderController.getMyOrders
// );

// router.post(
//   "/orders/edit",
//   memberController.retrieveAuthMember,
//   orderController.editChosenOrder
// );

// // Community related routers

// router.post(
//   "/community/image",
//   uploader_community.single("community_image"),
//   communityController.imageInsertion
// );

// router.post(
//   "/community/create",
//   memberController.retrieveAuthMember,
//   communityController.createArticle
// );

// router.get(
//   "/community/articles",
//   memberController.retrieveAuthMember,
//   communityController.getMemberArticles
// );

// router.get(
//   "/community/target",
//   memberController.retrieveAuthMember,
//   communityController.getArticles
// );

// router.get(
//   "/community/single-article/:art_id",
//   memberController.retrieveAuthMember,
//   communityController.getChosenArticle
// );

// // Following related routers

// router.post(
//   "/follow/subscribe",
//   memberController.retrieveAuthMember,
//   followController.subscribe
// );

// router.post(
//   "/follow/unsubscribe",
//   memberController.retrieveAuthMember,
//   followController.unsubscribe
// );


// router.get("/follow/followings", 
// followController.getMemberFollowings
// );


// router.get(
//   "/follow/followers",
//   memberController.retrieveAuthMember,
//   followController.getMemberFollowers
// );






  

module.exports = router;