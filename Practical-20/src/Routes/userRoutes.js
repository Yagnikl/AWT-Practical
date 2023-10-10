var express = require('express');
var router = new express.Router();
const Profile = require("../model/Profile");
const Address = require("../model/Address");
const User = require("../model/User");

router.post("/users", async (req, res) => {
    try {
        const { username, profile, address } = req.body;
        const newUser = new User({ username });
        console.log(profile);
        const newProfile = new Profile(profile);
        console.log(address);
        const newAddress = new Address(address);

        newUser.profile = newProfile;
        newUser.address = newAddress;

        await newUser.save();

        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to create user." });
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = awaitUser.find().populate("profile").populate("address");
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to fetch users." });
    }
});

router.get("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        const user = awaitUser.findById(userId)
            .populate("profile")
            .populate("address");

        if (!user) {
            returnres.status(404).json({ error: "User not found." });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to fetch user." });
    }
});


router.put("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, profile, address } = req.body;

        const user = awaitUser.findById(userId);

        if (!user) {
            returnres.status(404).json({ error: "User not found." });
        }

        user.username = username;
        await user.save();
        if (user.profile) {
            user.profile.fullName = profile.fullName;
            user.profile.age = profile.age;
            await user.profile.save();
        }

        if (user.address) {
            user.address.street = address.street;
            user.address.city = address.city;
            user.address.zipCode = address.zipCode;
            await user.address.save();
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to update user." });
    }
});

module.exports = router;