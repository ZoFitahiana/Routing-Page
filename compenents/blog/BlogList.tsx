import { DataMocks } from "../../utils/data";
import {ImplementData} from "./ImplementData"

export function BlogList() {
  return (
    <div className="w-[300px] bg-white-600 overflow-y-auto" style={{ height: "calc(100vh - 100px)" }}>
      {DataMocks.map((blog) => (
        <ImplementData key={blog.id} blog={blog} />
      ))}
    </div>
  );
}