import { useRouter } from "next/router";
import { questions } from "@/data/questions";
import CodeEditor from "../components/CodeEditor";
import AlgoLayout from "@/layouts/AlgoLayout";

export default function AlgoDetailPage() {
  const { query } = useRouter();
  const question = questions.find((q) => q.slug === query.slug);

  if (!question) return <div className="p-4">Đang tải...</div>;

  return (
   <AlgoLayout>
      <h1 className="text-2xl font-bold">{question.title}</h1>
      <p className="text-gray-600 mt-1 mb-4">{question.description}</p>
      <CodeEditor key={question.slug} defaultCode={question.starterCode} />
    </AlgoLayout>
  );
}

