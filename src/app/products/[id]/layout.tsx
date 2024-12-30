export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex my-5 justify-center">{children}</section>;
}
