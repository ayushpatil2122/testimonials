import ResponsePage from "@/components/responses/ResponsePage";

export default function page({params} : {params : {id : string}}) {
    return <div>
        <ResponsePage spaceName={params.id}/>
    </div>
}