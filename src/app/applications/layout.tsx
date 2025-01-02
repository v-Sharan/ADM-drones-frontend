export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-wrap gap-5 m-auto w-[90%] min-h-[54vh] items-center justify-center">
      {children}
    </section>
  );
}
