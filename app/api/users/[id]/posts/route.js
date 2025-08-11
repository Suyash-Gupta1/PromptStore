import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, context) => {
    try {
        // ✅ Unwrap params (works whether it's a promise or a plain object)
        const { id } = await context.params;

        // ✅ Connect to DB
        await connectToDB();

        // ✅ Fetch prompts for this creator
        const prompts = await Prompt.find({ creator: id }).populate("creator");

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("Error fetching prompts:", error);
        return new Response("Failed to fetch prompts created by user", { status: 500 });
    }
};
