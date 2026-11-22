import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "India Post Audit API is running!"
    });
});

// Services data
const services = [
    {
        id: 1,
        name: "Speed Post",
        description: "Fast and reliable postal delivery."
    },
    {
        id: 2,
        name: "Registered Post",
        description: "Postal service with registration facilities."
    },
    {
        id: 3,
        name: "International Mail",
        description: "Mail delivery services across countries."
    },
    {
        id: 4,
        name: "Parcel Services",
        description: "Domestic parcel delivery services."
    }
];

// Get all services
app.get("/api/services", (req, res) => {
    res.json(services);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
