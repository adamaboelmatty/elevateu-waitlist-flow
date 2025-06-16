
import { lazy, Suspense } from 'react';

const WaitlistForm = lazy(() => import('./WaitlistForm'));

const LazyWaitlistForm = () => {
  return (
    <Suspense fallback={
      <div className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/50 mx-2 sm:mx-0">
              <div className="animate-pulse space-y-6">
                <div className="h-8 bg-slate-200 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
                <div className="space-y-4">
                  <div className="h-12 bg-slate-200 rounded"></div>
                  <div className="h-12 bg-slate-200 rounded"></div>
                  <div className="h-12 bg-slate-200 rounded"></div>
                  <div className="h-14 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <WaitlistForm />
    </Suspense>
  );
};

export default LazyWaitlistForm;
