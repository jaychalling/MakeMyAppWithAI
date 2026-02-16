'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { COURSES, getCourseById, getStepByCourseAndStep, getTotalSteps, LEVEL_INFO } from '@/data/courses';

interface CourseProgress {
  [courseId: number]: {
    currentStep: number;
    completed: boolean;
  };
}

export default function StepPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.courseId as string, 10);
  const stepId = parseInt(params.step as string, 10);
  
  const [showHints, setShowHints] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState<CourseProgress>({});
  
  const course = getCourseById(courseId);
  const step = getStepByCourseAndStep(courseId, stepId);
  const totalSteps = getTotalSteps(courseId);
  
  useEffect(() => {
    // 유효성 검사
    if (!course || !step || stepId < 1 || stepId > totalSteps) {
      router.push('/courses');
      return;
    }

    // 진행률 불러오기
    const savedProgress = localStorage.getItem('makemyapp_course_progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, [course, step, stepId, totalSteps, router]);

  if (!course || !step) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">로딩 중...</div>
      </div>
    );
  }

  const stepProgress = (stepId / totalSteps) * 100;
  const levelInfo = LEVEL_INFO[course.level];

  const handleComplete = () => {
    // localStorage에 진행률 저장
    const currentProgress = { ...progress };
    
    if (stepId < totalSteps) {
      // 다음 스텝으로
      currentProgress[courseId] = {
        currentStep: stepId + 1,
        completed: false
      };
      localStorage.setItem('makemyapp_course_progress', JSON.stringify(currentProgress));
      router.push(`/learn/${courseId}/${stepId + 1}`);
    } else {
      // 강의 완료
      currentProgress[courseId] = {
        currentStep: stepId,
        completed: true
      };
      localStorage.setItem('makemyapp_course_progress', JSON.stringify(currentProgress));
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (stepId > 1) {
      router.push(`/learn/${courseId}/${stepId - 1}`);
    }
  };

  const handleNext = () => {
    if (stepId < totalSteps) {
      router.push(`/learn/${courseId}/${stepId + 1}`);
    }
  };

  const handleBackToCourses = () => {
    router.push('/courses');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={handleBackToCourses}
            className="flex items-center text-slate-400 hover:text-slate-300 transition-colors mb-4"
          >
            ← 강의 목록으로 돌아가기
          </button>
          
          {/* Course Info */}
          <div className="bg-slate-800 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{course.emoji}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-white">
                      {courseId}강. {course.title}
                    </h1>
                    <span className={`text-xs px-2 py-1 rounded-full ${levelInfo.color} bg-opacity-20`}>
                      {levelInfo.emoji} {levelInfo.label}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{course.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">Step {stepId} / {totalSteps}</div>
                <div className="text-sm text-slate-400">{course.estimatedTime}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">진행률</span>
            <span className="text-sm text-slate-400">{Math.round(stepProgress)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div 
              className="bg-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${stepProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Step Header */}
        <div className="text-center mb-12">
          <div className="text-slate-400 text-lg mb-2">
            Step {stepId} of {totalSteps}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {step.title}
          </h1>
          <div className="w-full border-t border-slate-700"></div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Concept */}
          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              📚 개념 설명
            </h2>
            <div className="text-slate-300 leading-relaxed whitespace-pre-line bg-slate-800/50 p-6 rounded-lg">
              {step.concept}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              🎯 미션
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-slate-200 whitespace-pre-line mb-4">
                {step.mission}
              </div>
              
              {step.code && (
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre className="text-green-300 overflow-x-auto">{step.code}</pre>
                </div>
              )}
            </div>
          </div>

          {/* Hints */}
          {step.hint && (
            <div>
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center text-xl font-semibold text-yellow-400 mb-4 hover:text-yellow-300 transition-colors"
              >
                💡 힌트 {showHints ? '(숨기기)' : '(보기)'}
              </button>
              
              {showHints && (
                <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg">
                  <div className="text-slate-300">
                    {step.hint}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex gap-4 justify-center">
          <button
            onClick={handleComplete}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center gap-2"
          >
            ✅ {stepId === totalSteps ? '강의 완료!' : '완료했어요'}
          </button>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          {stepId > 1 ? (
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
            >
              ← 이전 스텝
            </button>
          ) : (
            <div></div>
          )}
          
          {stepId < totalSteps && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
            >
              다음 스텝 →
            </button>
          )}
        </div>

        <div className="border-t border-slate-700 mt-12"></div>
      </div>

      {/* Completion Modal */}
      {isCompleted && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-8 rounded-lg max-w-md mx-4 text-center">
            <div className="text-6xl mb-4">{course.emoji}</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              🎉 {courseId}강 완료!
            </h2>
            <p className="text-slate-300 mb-6">
              <strong>{course.title}</strong> 강의를 완료했습니다!<br/>
              {courseId < COURSES.length ? '다음 강의가 해금되었어요.' : '모든 강의를 완료했습니다!'}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => router.push('/courses')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex-1"
              >
                강의 목록
              </button>
              {courseId < COURSES.length && (
                <button
                  onClick={() => router.push(`/learn/${courseId + 1}/1`)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex-1"
                >
                  다음 강의
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}