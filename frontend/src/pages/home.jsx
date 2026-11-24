import React from "react";
import "./home.css";

import banner from "../assets/images/main.jfif";
import ControversyCard from "../components/ControversyCard";
import Header from "../components/header";

function Home() {
    const stories = [
        {
            image: "/images/story1.jfif",
            category: "ENTERTAINMENT",
            title: "The Internet Has Questions",
            description: "Unpacking the controversy and everything that followed.",
            date: "24 NOV 2026"
        },
        {
            image: "/images/story2.jfif",
            category: "POP CULTURE",
            title: "A Story That Took Over Social Media",
            description: "Looking at the events, reactions and timeline.",
            date: "23 NOV 2026"
        },
        {
            image: "/images/story3.jpg",
            category: "CELEBRITY",
            title: "What Really Happened?",
            description: "Separating speculation from reported facts.",
            date: "22 NOV 2026"
        }
    ];

    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <div
                className="hero"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="overlay">
                    <h1>SPILL</h1>
                </div>
            </div>

            {/* LATEST STORIES */}
            <section className="stories-section">
                <h1>THE LATEST SPILL</h1>

                <div className="stories-grid">
                    {stories.map((story, index) => (
                        <ControversyCard
                            key={index}
                            {...story}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;