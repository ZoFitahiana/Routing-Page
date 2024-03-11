import { DataMocks } from "../../../utils/data";
import { ImplementData } from "../../../compenents/blog";

export default function page() {
  return (
    <div>
        {DataMocks.map((blog) => <ImplementData key={blog.id} blog={blog} />)}
    </div>
  )
  
}