import Link from "next/link";
import { questions } from "@/data/questions";

export default function AlgoListPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài toán</h1>
      <ul className="space-y-3">
        {questions.map((q) => (
          <li key={q.id} className="p-4 border rounded-xl hover:bg-gray-100">
            <Link href={`/algo/${q.slug}`}>
              <div>
                <h2 className="text-lg font-semibold">{q.title}</h2>
                <p className="text-gray-600">{q.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
