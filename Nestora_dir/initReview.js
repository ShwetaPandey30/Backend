const mongoose = require("mongoose");

const Listing = require("./models/listing");
const Review = require("./models/review");

const MONGO_URL = "mongodb://127.0.0.1:27017/nestora";

async function main() {
    await mongoose.connect(MONGO_URL);
}

async function createFakeReviews() {
    const listings = await Listing.find({});

    const fakeReviews = [
        {
            rating: 5,
            comment: "Amazing place! The rooms were clean and the host was very friendly."
        },
        {
            rating: 4,
            comment: "Really enjoyed my stay. The location was perfect."
        },
        {
            rating: 5,
            comment: "Highly recommended. Would definitely visit again!"
        }
    ];

    for (let listing of listings) {

        // Optional: Remove old review references
        listing.reviews = [];

        for (let data of fakeReviews) {
            const review = new Review(data);

            await review.save();

            listing.reviews.push(review._id);
        }

        await listing.save();
    }

    console.log("✅ Fake reviews added to all listings!");
}

main()
    .then(async () => {
        console.log("✅ Connected to DB");

        await createFakeReviews();

        await mongoose.connection.close();

        console.log("✅ Database connection closed");
    })
    .catch((err) => {
        console.log(err);
    });