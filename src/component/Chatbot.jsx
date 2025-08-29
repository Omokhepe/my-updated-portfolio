import { useState } from "react";
import { client } from "@gradio/client";

export default function Chatbot() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        try {
            setLoading(true);
            // const app = await client("https://omohkhepe/career_conversation.hf.space/");
            const app = await client("https://omohkhepe-career-conversation.hf.space/");
            // const app = await client("https://huggingface.co/spaces/omohkhepe/");
            console.log(app.view_api)

            const result = await app.predict("/predict", {
                question: question, // match input key from backend
            });

            setAnswer(result.data[0]); // adjust based on output structure
        } catch (error) {
            console.log('there', error)
            setAnswer("⚠️ Something went wrong. Please try again.");
        } finally {
            console.log('here')
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-2">Ask Me Anything</h2>

            <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about my experience, projects, or skills..."
                className="w-full p-2 border rounded mb-2"
            />

            <button
                onClick={askAI}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                {loading ? "Thinking..." : "Ask"}
            </button>

            {answer && (
                <div className="mt-4 p-2 border rounded bg-gray-50">
                    <strong>AI:</strong> {answer}
                </div>
            )}
        </div>
    );
}

