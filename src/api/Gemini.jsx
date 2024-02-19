import { GoogleGenerativeAI } from "@google/generative-ai";
// Access your API key as an environment variable (see "Set up your API key" above)


const key =
    import.meta.env.VITE_GOOGLE_GEMINI_API_KEY

const genAI = new GoogleGenerativeAI(key);


export const dataInfo = {
    featuresInfo: async function(features) {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = `you are a analyst and  which analyse the data.  a client came to you and give following features of dataframe s:${features}.you have to use html for styling heading and highlighting the features.in response,you have to create a paragraph in p tag which gives the small analysis of domain of data ,around 100 words, after that you have to create in div which contains the info about each feature,highlight the features, after that create a new  p tag and write about which features are important for data frame frame make sure that it contains proper heading .after that create a final p tag which contains suggestion for cleint to increase his business in 100 words make sure that this p tag conatins proper heading about the suggestion.make proper margin between all p tags.make sure that the div has #030712 color;dont include # or * in response`
            console.log(prompt);
            const result = await model.generateContent(prompt);
            const response = await result.response;
            console.log(response);
            return response

        } catch (e) {
            console.log(e);
            return e
        }

    }
}