'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { STEPS, TOTAL_STEPS } from '@/data/steps';

export default function StepPage() {
  const params = useParams();
  const router = useRouter();
  const stepId = parseInt(params.step as string, 10);
  
  const [showHints, setShowHints] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const step = STEPS.find(s => s.id === stepId);
  
  useEffect(() => {
    if (!step || stepId < 1 || stepId > TOTAL_STEPS) {
      router.push('/learn/1');
      return;
    }
  }, [step, stepId, router]);

  if (!step) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">로딩 중...</div>
      </div>
    );
  }

  const progress = (stepId / TOTAL_STEPS) * 100;

  const handleComplete = () => {
    // localStorage에 진행률 저장
    localStorage.setItem('makemyappwithai_current_step', (stepId + 1).toString());
    
    if (stepId < TOTAL_STEPS) {
      router.push(`/learn/${stepId + 1}`);
    } else {
      // 완료!
      setIsCompleted(true);
    }
  };

  const handleNeedHelp = () => {
    alert('도움이 필요하시면 힌트를 확인해보세요! 또는 커뮤니티에 질문해주세요.');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">진행률</span>
            <span className="text-sm text-slate-400">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div 
              className="bg-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Step Header */}
        <div className="text-center mb-12">
          <div className="text-slate-400 text-lg mb-2">
            Step {stepId} of {TOTAL_STEPS}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {step.title}
          </h1>
          <div className="w-full border-t border-slate-700"></div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-4">
              📚 설명
            </h2>
            <div className="text-slate-300 leading-relaxed whitespace-pre-line">
              {step.description}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              🎯 미션
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-slate-200 whitespace-pre-line mb-4">
                {step.mission}
              </div>
              
              {step.code && (
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                  <pre className="text-green-300">{step.code}</pre>
                </div>
              )}
              
              {step.expectedResult && (
                <div className="mt-4 text-sm text-slate-400">
                  <strong>예상 결과:</strong>
                  <div className="bg-slate-900 p-2 mt-2 rounded font-mono text-yellow-300">
                    {step.expectedResult}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hints */}
          <div>
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center text-xl font-semibold text-yellow-400 mb-4 hover:text-yellow-300 transition-colors"
            >
              💡 힌트 {showHints ? '(숨기기)' : '(보기)'}
            </button>
            
            {showHints && (
              <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg">
                <ul className="space-y-2 text-slate-300">
                  {step.hints.map((hint, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      {hint}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex gap-4 justify-center">
          <button
            onClick={handleComplete}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center gap-2"
          >
            ✅ 완료했어요
          </button>
          
          <button
            onClick={handleNeedHelp}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center gap-2"
          >
            ❓ 도움 필요
          </button>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          {stepId > 1 && (
            <button
              onClick={() => router.push(`/learn/${stepId - 1}`)}
              className="text-slate-400 hover:text-slate-300 transition-colors"
            >
              ← 이전 단계
            </button>
          )}
          
          {stepId < TOTAL_STEPS && (
            <button
              onClick={() => router.push(`/learn/${stepId + 1}`)}
              className="text-slate-400 hover:text-slate-300 transition-colors ml-auto"
            >
              다음 단계 →
            </button>
          )}
        </div>

        <div className="border-t border-slate-700 mt-12"></div>
      </div>

      {/* Completion Modal */}
      {isCompleted && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="bg-slate-800 p-8 rounded-lg max-w-md mx-4 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-4">축하합니다!</h2>
            <p className="text-slate-300 mb-6">
              모든 과정을 완료했습니다!<br/>
              이제 여러분은 웹 개발의 기초를 마스터했어요.
            </p>
            <button
              onClick={() => router.push('/')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              처음으로 돌아가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}