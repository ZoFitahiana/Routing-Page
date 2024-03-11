import { DataMock,DataMocks } from "../utils/data";

export function useGetId(id: DataMock["id"]) {
  return DataMocks.find((blog) => blog.id == id);
}