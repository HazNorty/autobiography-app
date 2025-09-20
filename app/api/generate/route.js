import { NextResponse } from 'next/server';

export async function POST(request) {
  // Checkpoint 1: Log that the function has started.
  console.log("--- API route /api/generate has been hit! ---");

  // Securely get the secret API key from the environment file
  const apiKey = process.env.OPENROUTER_API_KEY;

  // Checkpoint 2: Log whether the API key was found.
  // The '!!' turns the value into a true/false boolean.
  console.log("Was the API Key found?", !!apiKey);

  if (!apiKey) {
    console.error("ERROR: API key is missing. Check your .env.local file and restart the server.");
    return NextResponse.json({ error: 'API key is not configured on the server' }, { status: 500 });
  }

  try {
    const { answers } = await request.json();
    console.log("Checkpoint 3: Received answers from the frontend.");

    const formattedAnswers = Object.entries(answers)
      .map(([key, value]) => `Question: ${key.replace(/_/g, ' ')}\nAnswer: ${value}\n`)
      .join('\n---\n');
    
    const systemPrompt = "You are a master biographer. Your task is to take the following questions and answers and weave them into a compelling, well-written, and engaging life story. Write in the first person, as if the subject is telling their own story. Use the provided details to create a rich narrative. Organize the story chronologically and thematically. The tone should be reflective, warm, and engaging. Do not just list the answers; synthesize them into a coherent story."

    const userPrompt = `Here is the source material for the autobiography:\n\n${formattedAnswers}`;

    console.log("Checkpoint 4: Calling the OpenRouter API...");
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "mistralai/mistral-7b-instruct",
        "messages": [
          { "role": "system", "content": systemPrompt },
          { "role": "user", "content": userPrompt }
        ]
      })
    });
    
    console.log("Checkpoint 5: Received response from OpenRouter. Status:", response.status);

    if (!response.ok) {
        const errorData = await response.json();
        console.error("OpenRouter API Error:", errorData);
        return NextResponse.json({ error: 'Failed to get a response from the AI', details: errorData }, { status: response.status });
    }

    const data = await response.json();
    const story = data.choices[0].message.content;

    // Clean the story to remove unwanted model-specific tokens
    const cleanedStory = story.replace(/<s>/g, '').replace(/<\/s>/g, '').trim();

    console.log("Checkpoint 6: Successfully generated story. Sending back to frontend.");
    
    // Send the cleaned story back to the frontend
    return NextResponse.json({ story: cleanedStory });

  } catch (error) {
    console.error("FATAL ERROR in API route:", error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}