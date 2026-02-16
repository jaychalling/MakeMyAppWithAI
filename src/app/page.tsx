import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          MakeMyAppWithAI
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Duolingo 스타일 인터랙티브 프로그래밍 학습
        </p>
        <p className="text-slate-400 mb-12 leading-relaxed">
          한 번에 하나씩, 단계별로 배우는<br/>
          웹 개발의 모든 것
        </p>
        
        <Link
          href="/courses"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
        >
          🚀 학습 시작하기
        </Link>
      </div>
    </div>
  );
}