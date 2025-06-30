import React from "react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function Project() {
    return (
        <div style={container}>
            {projects.map(([emoji, title, desc, hueA, hueB], i) => (
                <Card
                    i={i}
                    emoji={emoji}
                    title={title}
                    desc={desc}
                    hueA={hueA}
                    hueB={hueB}
                    key={title}
                />
            ))}
        </div>
    );
}

interface CardProps {
    emoji: string;
    title: string;
    desc: string;
    hueA: number;
    hueB: number;
    i: number;
}

function Card({ emoji, title, desc, hueA, hueB, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    const links: Record<string, { code: string; live: string }> = {
        DhunifyX: {
            code: "https://github.com/yourusername/dhunifyx",
            live: "https://dhunifyx.vercel.app",
        },
        VideoTube: {
            code: "https://github.com/yourusername/videotube",
            live: "https://videotube.vercel.app",
        },
        MitraChat: {
            code: "https://github.com/yourusername/mitrachat",
            live: "https://mitrachat.vercel.app",
        },
    };

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={newCard} variants={cardVariants} className="card">
                <div style={imageWrapper}>
                    <div style={coverCircle}>{emoji}</div>
                </div>
                <div style={textWrapper}>
                    <h3 style={titleStyle}>{title}</h3>
                    <p style={subtitle}>{desc}</p>
                    <div style={buttonGroup}>
                        <a
                            href={links[title]?.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={buttonStyle}
                        >
                            View Code
                        </a>
                        <a
                            href={links[title]?.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...buttonStyle, backgroundColor: "#28a745" }}
                        >
                            Live
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

/**
 * ==============   Styles   ================
 */
const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
};

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
};

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const newCard: React.CSSProperties = {
    width: 300,
    height: 430,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#ffffffcc",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    padding: 20,
    transformOrigin: "10% 60%",
};

const imageWrapper: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
};

const coverCircle: React.CSSProperties = {
    width: 120,
    height: 120,
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 64,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const textWrapper: React.CSSProperties = {
    textAlign: "center",
    color: "#222",
};

const titleStyle: React.CSSProperties = {
    fontSize: 24,
    margin: "10px 0 8px 0",
};

const subtitle: React.CSSProperties = {
    fontSize: 14,
    opacity: 0.75,
    lineHeight: "1.4em",
};

const buttonGroup: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: 16,
};

const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    transition: "transform 0.2s ease",
};

/**
 * ==============   Variants   ================
 */
const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

/**
 * ==============   Utility   ================
 */
const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Project Data   ================
 */
const projects: [string, string, string, number, number][] = [
    ["🎵", "DhunifyX", "A modern music streaming app with mood-based song categorization.", 280, 330],
    ["📺", "VideoTube", "A YouTube-like video sharing platform with React & Firebase.", 10, 40],
    ["💬", "MitraChat", "A real-time chat application built with Socket.io and Node.js.", 120, 180],
];
