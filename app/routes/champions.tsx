import { useEffect } from "react";
import { Outlet } from "remix";

import { transitionIn } from "../utils/transitions";

export default function Champions() {
  useEffect(() => {
    transitionIn();
  }, []);

  return (
    <main className="grid gap-12">
      <Outlet />
    </main>
  );
}
