import { DataMock } from "../../utils/data";
import Image from "next/image";
import Link from "next/link";
type itemProps = {
  blog: DataMock;
  showImage?: boolean;
  showContent?: boolean;
};

export function ImplementData({ blog, showContent, showImage }: itemProps) {
    return (
      <Link href={`blog/${blog.id}`}>
        <div className="w-full mx-auto p-5 max-w-[800px] bg-gray-200 my-2 rounded-lg shadow-md">
          <p className="text-center font-bold text-xl mb-2">{blog.title}</p>
          {showContent && (
            <div>
              <p className="text-center text-gray-700">{blog.content}</p>
              <Link href={`blog/${blog.id}/image`} className="block text-center mt-2 text-blue-500 hover:underline font-bold">
                Voir l'image
              </Link>
            </div>
          )}
          {showImage && (
            <div className="mt-4">
              <Image src={blog.img} alt="bllogImage" height={400} width={500} className="rounded-lg" />
            </div>
          )}
        </div>
      </Link>
    );
  }
  