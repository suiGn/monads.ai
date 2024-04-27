import OpenAI from "openai";

class Monad {
    constructor(apiKey, assistantId = null) {
        this.openai = new OpenAI({
            apiKey: apiKey
        });
        this.assistantId = assistantId;  // Store the assistant ID or null if not provided
        console.log("Hello monads!");
        console.log("I am:", this.assistantId);
    }

    // Additional methods utilizing the assistantId can include similar checks
    async listAssistants() {
        const myAssistants = await this.openai.beta.assistants.list({
            order: "desc",
            limit: "20",
        });

        console.log(myAssistants.data);
    }
}

export default Monad;
