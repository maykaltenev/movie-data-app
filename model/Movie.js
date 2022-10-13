import mongoose, { Mongoose } from "mongoose";
const tomatoSchema = new Mongoose.Schema({
    tomatoes: {
        viewer: {
            rating: { type: String },
            numReviews: { type: Number },
            meter: { type: Number },
        },
        fresh: 5,
        critic: {
            rating: { type: Number },
            numReviews: { type: Number },
            meter: { type: Number },
        },
        rotten: { type: Number },
        lastUpdated: { type: Date },
    }
})
const movieSchema = new mongoose.Schema({
    plot: { type: String },
    genres: [String],
    runtime: { type: Number },
    rated: { type: String },
    cast: [String],
    num_mflix_comments: { type: Number },
    poster: { type: String },
    title: { type: String },
    fullplot: { type: String },
    languages: [String],
    released: { type: Date },
    directors: [String],
    writers: [String],
    awards: {
        wins: { type: Number },
        nominations: { type: Number },
        text: { type: String },
    },
    lastupdated: { type: String },
    imdb: {
        rating: { type: Number },
        votes: { type: Number },
        id: { type: Number }
    },
    countries: [String],
    tomatoes: [tomatoSchema]
});

const Movie = mongoose.model("Movie", UserSchema);

export default Movie;
