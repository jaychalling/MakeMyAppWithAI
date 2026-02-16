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
  const [unlockedCourses, setUnlockedCourses] = useState<Set<number>>(new Set([1, 101, 102, 103, 104])); // 1강 + 사이드 퀘스트

  useEffect(() => {
    const savedProgress = localStorage.getItem('makemyapp_course_progress');
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress);
      setProgress(parsedProgress);
      
      const unlocked = new Set([1, 101, 102, 103, 104]);
      for (let i = 1; i <= 12; i++) {
        if (parsedProgress[i]?.completed) {
          unlocked.add(i + 1);
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
    level1: COURSES.filter(c => c.level === 'level1'),
    level2: COURSES.filter(c => c.level === 'level2'),
    level3: COURSES.filter(c => c.level === 'level3'),
    level4: COURSES.filter(c => c.level === 'level4'),
    side: COURSES.filter(c => c.level === 'side'),
  };

  const levelDescriptions = {
    level1: '5분 만에 첫 마법을 경험해요!',
    level2: '진짜 쓸 수 있는 앱을 만들어요',
    level3: 'AI API로 강력한 앱을 만들어요',
    level4: '실제 서비스를 런칭해요!',
    side: '필요할 때 참고하세요',
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🚀 MakeMyAppWithAI
          </h1>
          <p className="text-slate-300 text-lg">
            코딩 제로에서 내 서비스까지 — AI와 함께 7일 완성
          </p>
        </div>

        {/* Progress Summary */}
        <div className="bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">🎮 나의 여정</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                  <div className="text-xs text-slate-500">{levelInfo.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Courses */}
        {Object.entries(groupedCourses).filter(([level]) => level !== 'side').map(([level, courses]) => {
          const levelInfo = LEVEL_INFO[level as keyof typeof LEVEL_INFO];
          
          return (
            <div key={level} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3">{levelInfo.emoji}</div>
                <div>
                  <h2 className={`text-2xl font-bold ${levelInfo.color}`}>
                    {levelInfo.label}
                  </h2>
                  <p className="text-slate-400">
                    {levelDescriptions[level as keyof typeof levelDescriptions]}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => {
                  const progressPercent = getProgressPercentage(course.id);
                  const locked = isLocked(course.id);
                  
                  return (
                    <div
                      key={course.id}
                      className={`bg-slate-800 rounded-lg p-6 transition-all duration-300 ${
                        locked 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-slate-700 hover:scale-105 cursor-pointer'
                      }`}
                    >
                      {locked ? (
                        <div className="h-full flex flex-col">
                          <div className="text-center mb-4">
                            <div className="text-4xl mb-2 opacity-50">🔒</div>
                            <div className="text-2xl mb-1 opacity-50">{course.emoji}</div>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-400 mb-2 text-center">
                            {course.title}
                          </h3>
                          <p className="text-sm text-slate-500 text-center mb-4">
                            이전 강의를 완료하면 해금!
                          </p>
                        </div>
                      ) : (
                        <Link href={`/learn/${course.id}/1`} className="block h-full">
                          <div className="text-center mb-4">
                            <div className="text-4xl mb-2">{course.emoji}</div>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-white mb-2 text-center">
                            {course.title}
                          </h3>
                          
                          <p className="text-sm text-slate-300 text-center mb-4 line-clamp-2">
                            {course.description}
                          </p>
                          
                          {/* 🎁 결과물 */}
                          <div className="bg-slate-700/50 rounded-lg p-2 mb-4 text-center">
                            <span className="text-xs text-slate-400">🎁 결과: </span>
                            <span className="text-xs text-green-400">{course.reward}</span>
                          </div>
                          
                          {/* Progress Bar */}
                          {progressPercent > 0 && (
                            <div className="mb-4">
                              <div className="flex justify-between text-xs text-slate-400 mb-1">
                                <span>진행률</span>
                                <span>{progressPercent}%</span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-2">
                                <div 
                                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${progressPercent}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex justify-between text-xs text-slate-400 mt-auto">
                            <span>⏱️ {course.estimatedTime}</span>
                            <span>📝 {course.steps.length}스텝</span>
                          </div>
                          
                          {progress[course.id]?.completed && (
                            <div className="text-center mt-3">
                              <span className="text-green-400 text-sm font-semibold">
                                ✅ 완료!
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

        {/* Side Quests */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="text-3xl mr-3">📚</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-400">
                사이드 퀘스트
              </h2>
              <p className="text-slate-500">
                필요할 때 참고하세요 — 언제든 접근 가능!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {groupedCourses.side.map((course) => (
              <Link 
                key={course.id}
                href={`/learn/${course.id}/1`}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-700 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{course.emoji}</div>
                  <div>
                    <h3 className="font-semibold text-white">{course.title}</h3>
                    <p className="text-xs text-slate-400">{course.estimatedTime} • {course.steps.length}스텝</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-slate-400 mb-2">
            🎯 메인 코스 12강 + 사이드 퀘스트 4개
          </p>
          <p className="text-sm text-slate-500">
            7일이면 나만의 서비스를 런칭할 수 있어요!
          </p>
        </div>
      </div>
    </div>
  );
}
