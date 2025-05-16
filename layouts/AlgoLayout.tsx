// layouts/AlgoLayout.tsx
import Link from "next/link";
import { questions } from "@/data/questions";
import { useRouter } from "next/router";

export default function AlgoLayout({ children }: { children: React.ReactNode }) {
  const { query } = useRouter();

  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r overflow-y-auto p-4 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Thuật toán</h2>
        <ul className="space-y-2">
          {questions.map((q) => (
            <li key={q.id}>
              <Link
                href={`/algo/${q.slug}`}
                className={`block px-3 py-2 rounded ${
                  query.slug === q.slug
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "hover:bg-gray-200"
                }`}
              >
                {q.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
