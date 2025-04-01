import { mockProjects } from "@/mocks/mockData";

export async function GET() {
    try {
        return new Response(JSON.stringify(mockProjects), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
    }
}
