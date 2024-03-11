import { BlogList } from "../../../compenents/blog";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BlogList />
      {children}
    </div>
  );
}