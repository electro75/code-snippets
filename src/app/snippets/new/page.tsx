export default function createSnippetPage () {
    return (
    <form>
        <h3 className="font-bold m-3" >Create A Snippet!</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4" >
                <label htmlFor="title" className="w-12">
                    Title
                </label>
                <input name="title" type="text" className="border rounded p-2 w-full" id="title"/>
            </div>
            <div className="flex gap-4" >
                <label htmlFor="Code" className="w-12">
                    Code
                </label>
                <textarea name="code" id="code" className="border rounded p-2 w-full" ></textarea>
            </div>

            <button type="submit" className="rounded p-2 bg-blue-200">Create!</button>
        </div>
    </form>)
}