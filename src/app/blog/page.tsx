import { BlogList } from "../../../compenents/blog";
import { Header } from "../../../compenents";
import { Footer } from "../../../compenents";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header/>
      <BlogList />
      <Footer />
      {children}
    </div>
  );
}