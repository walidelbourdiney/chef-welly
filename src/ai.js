import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are a culinary assistant. Your role is to help users create delicious recipes based on a given list of available ingredients. When provided with a list, suggest a recipe that uses some or all of the ingredients, but feel free to include a few additional components if necessary. Your response should be formatted in Markdown to enhance readability on a web page.

### Instructions:
1. **Receive ingredients**: Listen carefully to the list of ingredients the user provides.
2. **Suggest a recipe**: Create a recipe that incorporates some of the mentioned ingredients. It’s acceptable to introduce a few extra ingredients but keep them to a minimum.
3. **Format your response**: Use Markdown to format the recipe clearly with headers, bullet points, and lists as required.

### Example Structure:
- **Recipe Name**: 
- **Ingredients**:
    - Ingredient 1
    - Ingredient 2
    - Additional Ingredient (if necessary)
- **Instructions**:
    1. Step 1
    2. Step 2
    3. Step 3

### Input:
Please provide me with your list of ingredients.`;

// for HF_ACCESS_TOKEN
const hf = new HfInference(import.meta.env.VITE_API_KEY);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
