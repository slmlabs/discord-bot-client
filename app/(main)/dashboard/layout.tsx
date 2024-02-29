export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>My navbar</nav>
      <>{children}</>
    </>
  );
}
