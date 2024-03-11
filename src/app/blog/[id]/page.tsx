import { ImplementData } from "../../../../compenents/blog";
import { getId } from "../../../../service/getId";


export default function getBlog({
  params: { id },
}: {
  params: { id: string };
}) {
  const blog = getId(id);
  if (!blog) {
    return <div>404 </div>; 
  }
  return (
    <div>
        <ImplementData blog={blog} showContent />
    </div>
  )
}