const Definer = require("../lib/mistake");
const Member = require("../models/Member");
const Product = require("../models/Product");
const assert = require("assert");
const Hotel = require("../models/Hotel");
// const { response } = require("express");



let hotelController = module.exports;

hotelController.getHotels = async (req, res) =>{
    try{
        console.log("GET: cont/getHotels");
        const data = req.query,
            hotel = new Hotel(),
            result = await hotel.getAllHotelsData(req.member, data);
        res.json({state: "success", data: result});


    }   catch(err) {
        console.log(`ERROR, cont/getHotels, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
};




hotelController.getChosenHotel = async (req, res) => {
    try {

        console.log("GET: cont/getChosenHotel");
        const id = req.params.id, 
            hotel = new Hotel(),
            result = await hotel.getChosenHotelData(req.member, id);

    


        res.json({state: "success", data: result});
    }   catch (err) {
        console.log(`ERROR, cont/getChosenHotel, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
}








/******************************************************
 *            BSSR RELATED METHODS                    *
 ******************************************************/

hotelController.home = (req, res) => {
    try {
        console.log("GET: cont/home");
        res.render('home-page');
    }catch (err) {
        console.log(`ERROR, cont/home, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
};




hotelController.getSignupMyHotel = async (req, res) => {
    try{
        console.log("GET: cont/getSignupMyHotel");
        res.render('signup');
    } catch(err) {
        console.log(`ERROR, cont/getSignupMyHotel, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
}


hotelController.signupProcess = async (req, res) => {
    try{
        console.log("POST: cont/signupProcess");
        assert (req.file, Definer.general_err3);


        let new_member = req.body;
        new_member.mb_type = 'HOTEL';
        new_member.mb_image = req.file.path;

        const member = new Member();
        const result = await member.signupData(new_member);
        assert (result, Definer.general_err1);


        req.session.member = result;
        res.redirect('/ho/products/menu');
    }   catch(err) {
        console.log(`ERROR, cont/signupProcess, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
};

hotelController.getLoginMyHotel = async (req, res) => {
    try{
        console.log("GET: cont/getLoginMyHotel");
        res.render('login-page');
    } catch(err) {
        console.log(`ERROR, cont/getLoginMyHotel, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
}

hotelController.getMyHotelProducts = async (req, res) => {
    try{
        console.log("GET: cont/getMyHotelProducts");
        const product = new Product();
        const data = await product.getAllProductsDataHotel(res.locals.member);
        res.render("hotel-menu", {hotel_data: data});
      
    } catch(err) {
        console.log(`ERROR, cont/getMyHotelProducts, ${err.message}`);
        res.redirect('/resto');
    }
}



hotelController.loginProcess = async (req, res) => {
    try{
        console.log("POST: cont/loginProcess");
        const data = req.body;
        member = new Member(), 
        result = await member.loginData(data);

        req.session.member = result;
        req.session.save(function() {
            result.mb_type === 'ADMIN' 
            ? res.redirect("/ho/all-hotel") 
            : res.redirect('/ho/products/menu');
        });


        
    }   catch(err) {
        console.log(`ERROR, cont/loginProcess, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
};

hotelController.logout = (req, res) => {
    try{
        console.log("GET cont/logout");
        req.session.destroy(function(){
            res.redirect("/ho");
    });
    }catch (err) {
        console.log(`ERROR, cont/logout, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
};

hotelController.validateAuthHotel = (req, res, next) => {
    if(req.session?.member?.mb_type === "HOTEL") {
        req.member = req.session.member;
        next();
    }else res.json({
        state: "fail", 
        message: "only authenticated members with hotel type"
    });
};

hotelController.checkSessions = (req, res) => {
    if(req.session?.member){
        res.json({state: 'success', data: req.session.member})
    } else{
        res.json({state: 'fail', message: "You are not authenticated"});
    }
};

hotelController.validateAdmin = (req, res, next) => {
    if(req.session?.member?.mb_type === "ADMIN") {
        req.member = req.session.member;
        next();
    }else {
        const html = 
            `<script> 
                alert('Admin page: Permission denied');
                window.location.replace('/resto');
            </script>`;
        res.end(html);
    }
};

hotelController.getAllHotels = async (req,res) => {
    try{
        console.log("GET cont/getAllHotels");

        const hotel = new Hotel();
        const hotels_data = await hotel.getAllHotelsData();
        res.render('all-hotel', {hotels_data: hotels_data});

    } catch (err) {
        console.log(`ERROR, cont/getAllHotels, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
};

hotelController.updateHotelByAdmin = async (req, res) => {
    try{
        console.log("GET cont/updateHotelByAdmin");
        const hotel = new Hotel();
        const result = await hotel.updateHotelByAdminData(req.body);
        await res.json({state: "success", data: result });

    } catch (err) {
        console.log(`ERROR, cont/updateHotelByAdmin, ${err.message}`);
        res.json({state: 'fail', message: err.message});
    }
}

