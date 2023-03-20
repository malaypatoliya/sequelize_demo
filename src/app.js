const express = require("express");
const { Op } = require("sequelize");
require("dotenv").config();
const db = require("../src/db/models/index");
const { sendSuccess, sendError, sendErrorPageNotFound } = require("./helper/message");
const Product = db.products;

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try{
        const result = await Product.findAll();
        console.log(res.statusCode);
        sendSuccess(res, result);
    }catch(error){
        sendError(res, error);
    }
    
});


app.post("/", async (req, res) => {
    try {
        const {
            title,
            amount,
            discount_type,
            discount_amount,
            avatar_image,
            images,
            short_description,
            description
        } = req.body;
        const result = await Product.create({
            title,
            amount,
            discount_type,
            discount_amount,
            avatar_image,
            images,
            short_description,
            description
        });
        sendSuccess(res, result);
    } catch (error) {
        sendError(res, error);
    }
});

app.delete("/", async (req, res) => {
    try{
        const id = req.header("id");
        const result = await Product.destroy({ where: { id } });
        sendSuccess(res, result);
    }catch(error){
        sendError(res, error);
    }    
});

app.put("/", async (req, res) => {
    try {
        const id = req.header("id");
        const {
            title,
            amount,
            discount_type,
            discount_amount,
            avatar_image,
            images,
            short_description,
            description,
        } = req.body;
        const result = await Product.update(
            {
                title,
                amount,
                discount_type,
                discount_amount,
                avatar_image,
                images,
                short_description,
                description,
            },
            { where: { id: id } }
        );
        sendSuccess(res, result);
    } catch (error) {
        sendError(res, error);
    }
});

app.use("*", (req, res) => {
    sendErrorPageNotFound(res, "Page Not found");
});

app.listen(process.env.PORT, () => {
    console.log(
        `Server started. Listening on http://localhost:${process.env.PORT}`
    );
});
