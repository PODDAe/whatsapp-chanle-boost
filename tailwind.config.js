/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyberBg: "#0a0f1f",
        cyberSurface: "#0f1629",
        neonPink: "#ff2fd3",
        neonCyan: "#00e5ff",
        neonYellow: "#ffe359",
        neonGreen: "#47ff9c",
        slateGlow: "#7aa3ff"
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"]
      },
      boxShadow: {
        neon: "0 0 10px rgba(0,229,255,0.6), 0 0 30px rgba(255,47,211,0.4)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(122,163,255,0.18) 1px, transparent 1px)"
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
        scan: "scan 6s linear infinite",
        pulseNeon: "pulseNeon 4s ease-in-out infinite"
      },
      keyframes: {
        glow: {
          "0%,100%": { filter: "drop-shadow(0 0 1px #00e5ff)" },
          "50%": { filter: "drop-shadow(0 0 8px #ff2fd3)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: 0.05 },
          "50%": { opacity: 0.15 },
          "100%": { transform: "translateY(100%)", opacity: 0.05 }
        },
        pulseNeon: {
          "0%,100%": { boxShadow: "0 0 8px #00e5ff, 0 0 16px #ff2fd3" },
          "50%": { boxShadow: "0 0 16px #ff2fd3, 0 0 32px #00e5ff" }
        }
      }
    }
  },
  plugins: []
};
