'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const TOTAL_STEPS = 12;

export default function LearnPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // localStorage에서 진행률 확인
    const savedStep = localStorage.getItem('makemyappwithai_current_step');
    if (savedStep) {
      const step = parseInt(savedStep, 10);
      if (step >= 1 && step <= TOTAL_STEPS) {
        setCurrentStep(step);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // 현재 스텝으로 리다이렉트
      router.push(`/learn/${currentStep}`);
    }
  }, [isLoading, currentStep, router]);

  const progress = ((currentStep - 1) / TOTAL_STEPS) * 100;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-6">학습 진행률</h1>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-700 rounded-full h-3 mb-6">
          <div 
            className="bg-green-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-slate-300 text-lg mb-8">
          {Math.round(progress)}% 완료 (Step {currentStep}/{TOTAL_STEPS})
        </p>
        
        <div className="text-slate-400">잠시 후 현재 스텝으로 이동합니다...</div>
      </div>
    </div>
  );
}