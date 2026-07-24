import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client on server-side only
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("GEMINI_API_KEY is not defined in environment variables.");
}

// 1. Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// 2. Chat endpoint utilizing Gemini 3.5 Flash
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!ai) {
    // Fallback if API key is not configured yet
    return res.json({
      reply: "नमस्ते! यूनिक मेडिकल एजेन्सी AI सहायक में आपका स्वागत है। (Note: Gemini API Key is not configured in Secrets. This is a simulated fallback response). How can I assist you with medicines, baby care, or surgical products today?"
    });
  }

  try {
    const formattedHistory = (history || []).map((h: { role: string; content: string }) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.content }]
    }));

    // System instructions for our pharmacy assistant
    const systemInstruction = 
      "You are the virtual AI Assistant of 'यूनिक मेडिकल एजेन्सी' (Unique Medical Agency), a premium pharmacy and medical store located at WRWR+WG2, Kespah Road, Bigha, Bahelia, Tekari, Bihar 824236 (Phone: 09821293749). " +
      "Your tone must be highly polite, professional, trustworthy, and caring. You speak fluent English and Hindi (bilingual or Hinglish is preferred to make it approachable for local Bihar customers). " +
      "Under no circumstances should you prescribe prescription-only medicines or provide official medical diagnoses. Always politely advise the user to consult a qualified doctor for serious symptoms. " +
      "Recommend visiting our store or ordering via our integrated WhatsApp form if they need genuine medicines, baby care products, health supplements, surgical items, or daily medical essentials. " +
      "Store timing: 8:00 AM to 9:00 PM (Monday to Sunday). Let users know they can search for medicines on our website and use the WhatsApp order form to upload prescriptions.";

    const contents = [...formattedHistory, { role: "user", parts: [{ text: message }] }];

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Something went wrong. Please try again later.", details: error.message });
  }
});

// 3. Health Tips API endpoint using Gemini
app.get("/api/health-tips", async (req, res) => {
  if (!ai) {
    // Static fallback health tips if API key is not ready
    return res.json({
      tips: [
        {
          id: 1,
          title: "Stay Hydrated",
          content: "Drink at least 8-10 glasses of clean water daily to support digestion, energy, and clear skin. For the summer, add some fresh lemon or mint.",
          category: "Wellness"
        },
        {
          id: 2,
          title: "Regular Health Checks",
          content: "Monitor your blood pressure and blood sugar regularly. We have premium BP monitors and glucometers available at Unique Medical Agency.",
          category: "Prevention"
        },
        {
          id: 3,
          title: "Complete Your Antibiotic Course",
          content: "Never stop taking prescribed antibiotics halfway, even if you feel better. Doing so can cause antibiotic resistance. Always finish the full course.",
          category: "Medication"
        }
      ]
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Generate 3 highly relevant and helpful healthcare or medicine safety tips for a pharmacy website. Output MUST be valid JSON format, list of objects. Each object must have fields: 'id' (number), 'title' (string), 'content' (string), 'category' (string like Medication, Wellness, Nutrition, Prevention). Keep tips concise and extremely useful for general public.",
      config: {
        responseMimeType: "application/json",
        temperature: 0.8,
      }
    });

    const parsedTips = JSON.parse(response.text || "[]");
    res.json({ tips: parsedTips });
  } catch (error) {
    console.error("Health Tips Generation Error:", error);
    res.json({
      tips: [
        {
          id: 1,
          title: "Stay Hydrated",
          content: "Drink at least 8-10 glasses of clean water daily to support digestion, energy, and clear skin. For the summer, add some fresh lemon or mint.",
          category: "Wellness"
        },
        {
          id: 2,
          title: "Regular Health Checks",
          content: "Monitor your blood pressure and blood sugar regularly. We have premium BP monitors and glucometers available at Unique Medical Agency.",
          category: "Prevention"
        },
        {
          id: 3,
          title: "Complete Your Antibiotic Course",
          content: "Never stop taking prescribed antibiotics halfway, even if you feel better. Doing so can cause antibiotic resistance. Always finish the full course.",
          category: "Medication"
        }
      ]
    });
  }
});

// Vite middleware for development vs static asset serving for production
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

setupVite();
