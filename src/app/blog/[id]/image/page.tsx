import { ImplementData } from "../../../../../compenents/blog";
import { getId } from "../../../../../service/getId";

export default function getImage({
  params: { id },
}: {
  params: { id: string };
}) {
  const blog = getId(id);
  if (!blog) {
    return <div className="text-center text-red-500 text-2xl font-bold mt-8">404 - Blog non trouvé</div>; 
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <ImplementData blog={blog} showImage />
    </div>
  );
}
