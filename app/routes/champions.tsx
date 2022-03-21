import { Outlet } from "remix";

export default function Champions() {
  return (
    <main className="grid gap-12">
      <Outlet />
    </main>
  );
}
