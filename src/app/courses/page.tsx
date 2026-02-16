'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COURSES, LEVEL_INFO } from '@/data/courses';

interface CourseProgress {
  [courseId: number]: {
    currentStep: number;
    completed: boolean;
  };
}

export default function CoursesPage() {
  const [progress, setProgress] = useState<CourseProgress>({});
  const [unlockedCourses, setUnlockedCourses] = useState<Set<number>>(new Set([1])); // 1강은 항상 해금

  useEffect(() => {
    // localStorage에서 진행률 불러오기
    const savedProgress = localStorage.getItem('makemyapp_course_progress');
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress);
      setProgress(parsedProgress);
      
      // 해금된 강의 계산
      const unlocked = new Set([1]);
      for (let i = 1; i <= COURSES.length; i++) {
        if (parsedProgress[i]?.completed) {
          unlocked.add(i + 1); // 다음 강의 해금
        }
      }
      setUnlockedCourses(unlocked);
    }
  }, []);

  const getProgressPercentage = (courseId: number) => {
    const courseProgress = progress[courseId];
    const course = COURSES.find(c => c.id === courseId);
    if (!courseProgress || !course) return 0;
    
    if (courseProgress.completed) return 100;
    
    return Math.round((courseProgress.currentStep / course.steps.length) * 100);
  };

  const isLocked = (courseId: number) => {
    return !unlockedCourses.has(courseId);
  };

  const groupedCourses = {
    beginner: COURSES.filter(c => c.level === 'beginner'),
    basic: COURSES.filter(c => c.level === 'basic'),
    intermediate: COURSES.filter(c => c.level === 'intermediate'),
    advanced: COURSES.filter(c => c.level === 'advanced'),
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            MakeMyAppWithAI 커리큘럼
          </h1>
          <p className="text-slate-300 text-lg">
            코딩 제로에서 실전 앱까지 — AI와 함께하는 단계별 학습
          </p>
        </div>

        {/* Progress Summary */}
        <div className="bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">전체 진행률</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(groupedCourses).map(([level, courses]) => {
              const completed = courses.filter(c => progress[c.id]?.completed).length;
              const total = courses.length;
              const levelInfo = LEVEL_INFO[level as keyof typeof LEVEL_INFO];
              
              return (
                <div key={level} className="text-center">
                  <div className="text-2xl mb-1">{levelInfo.emoji}</div>
                  <div className="text-sm text-slate-400">{levelInfo.label}</div>
                  <div className="text-lg font-bold">
                    {completed}/{total}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Course Levels */}
        {Object.entries(groupedCourses).map(([level, courses]) => {
          const levelInfo = LEVEL_INFO[level as keyof typeof LEVEL_INFO];
          
          return (
            <div key={level} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3">{levelInfo.emoji}</div>
                <div>
                  <h2 className={`text-2xl font-bold ${levelInfo.color}`}>
                    {levelInfo.label} 레벨
                  </h2>
                  <p className="text-slate-400">
                    {level === 'beginner' && '도구 준비 + 기초 이해'}
                    {level === 'basic' && '첫 앱 + 배포 + 외부 연동'}
                    {level === 'intermediate' && 'AI 활용 + 복잡한 앱'}
                    {level === 'advanced' && '실전 서비스 수준'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map((course) => {
                  const progressPercent = getProgressPercentage(course.id);
                  const locked = isLocked(course.id);
                  
                  return (
                    <div
                      key={course.id}
                      className={`bg-slate-800 rounded-lg p-6 transition-all duration-300 ${
                        locked 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-slate-700 cursor-pointer'
                      }`}
                    >
                      {locked ? (
                        <div className="h-full flex flex-col">
                          <div className="text-center mb-4">
                            <div className="text-4xl mb-2 opacity-50">🔒</div>
                            <div className="text-2xl mb-1 opacity-50">{course.emoji}</div>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-400 mb-2 text-center">
                            {course.id}강. {course.title}
                          </h3>
                          <p className="text-sm text-slate-500 text-center mb-4">
                            이전 강의를 완료해야 해금됩니다
                          </p>
                          <div className="mt-auto text-center">
                            <div className="text-sm text-slate-500">
                              {course.estimatedTime} • {course.steps.length}스텝
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link href={`/learn/${course.id}/1`} className="block h-full">
                          <div className="text-center mb-4">
                            <div className="text-4xl mb-2">{course.emoji}</div>
                            <div className={`text-xs px-2 py-1 rounded-full inline-block ${levelInfo.color} bg-opacity-20`}>
                              {levelInfo.label}
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-white mb-2 text-center">
                            {course.id}강. {course.title}
                          </h3>
                          
                          <p className="text-sm text-slate-300 text-center mb-4 line-clamp-2">
                            {course.description}
                          </p>
                          
                          {/* Progress Bar */}
                          {progressPercent > 0 && (
                            <div className="mb-4">
                              <div className="flex justify-between text-xs text-slate-400 mb-1">
                                <span>진행률</span>
                                <span>{progressPercent}%</span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-2">
                                <div 
                                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${progressPercent}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex justify-between text-xs text-slate-400 mt-auto">
                            <span>{course.estimatedTime}</span>
                            <span>{course.steps.length}스텝</span>
                          </div>
                          
                          {progress[course.id]?.completed && (
                            <div className="text-center mt-2">
                              <span className="text-green-400 text-sm font-semibold">
                                ✅ 완료
                              </span>
                            </div>
                          )}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-slate-400 mb-4">
            총 16강 • 190+ 스텝 • 약 13시간
          </p>
          <div className="text-sm text-slate-500">
            순차적으로 학습하며 각 강의를 완료하면 다음 강의가 해금됩니다
          </div>
        </div>
      </div>
    </div>
  );
}