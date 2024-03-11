import { DataMock,DataMocks } from "../utils/data";

export function getId(id: DataMock["id"]) {
  return DataMocks.find((blog) => blog.id == id);
}