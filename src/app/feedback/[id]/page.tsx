import FeedbackPage from "@/components/feedback/FeedbackPage";

export default function page({params} : {params : {id : string}}) {
  return <div>
    <FeedbackPage id={params.id}/>
  </div>;
}  
