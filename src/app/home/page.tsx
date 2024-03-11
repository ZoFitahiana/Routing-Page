import { DataMocks } from "../../../utils/data";
import { ImplementData } from "../../../compenents/blog";
import { Header } from "../../../compenents";
import { Footer } from "../../../compenents";

export default function page() {
  return (
    <div>
        <Header/>
        {DataMocks.map((blog) => <ImplementData key={blog.id} blog={blog} />)}
        <Footer/>
    </div>
  )
  
}