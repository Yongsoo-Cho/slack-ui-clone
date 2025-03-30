import Sidebar from "@/components/ui/Sidebar";

export default function WithSideBarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid sm:grid-cols-[1fr_17fr] grid-cols-[1fr] w-full h-[96vh] bg-[var(--darkpurple)]">
      <aside className="hidden sm:block bg-[var(--darkpurple)]">
        <Sidebar />
      </aside>
      {children}
    </main>
  );
}