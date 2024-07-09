import { db } from "@/db";
import { notFound } from "next/navigation";
import EditSnippetForm from "@/components/editSnippetForm";

interface editSnippetPageProps {
    params: {
        id: string
    }
}

export default async function EditSnippetPage (props: editSnippetPageProps) {
    const id= parseInt(props.params.id);

    const snippet = await db.snippet.findFirst({
        where: {
            id
        }
    })

    if(!snippet) {
        return notFound();
    }
    
    return(
        <EditSnippetForm snippet={snippet}/>
    )
}