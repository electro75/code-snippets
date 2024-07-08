import { notFound } from "next/navigation";
import { db } from "@/db";

interface snippetViewPageProps {
    params: {
        id: string
    }
}

export default async function SnippetViewPage(props: snippetViewPageProps) {

    console.log(props);
    const snippet = await db.snippet.findFirst({
        where: {id: parseInt(props.params.id)}
    });

    if(!snippet) {
        return notFound();
    }

    return <div>View Snippet {snippet.title}</div>
}