export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-[70%] max-sm:w-[90%] max-md:w-[80%]">
      {children}
    </section>
  );
}
