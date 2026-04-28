export default function ProductDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-base-100 animate-pulse">
      <div className="container mx-auto p-4 md:p-8">
        {/* Top Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left: Image Skeleton */}
          <div className="bg-base-300 rounded-3xl h-[300px] md:h-[450px] w-full shadow-inner"></div>

          {/* Right: Info Skeleton */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-3">
              <div className="h-10 bg-base-300 rounded-lg w-3/4"></div>
              <div className="h-6 bg-base-200 rounded-lg w-1/2"></div>
            </div>

            <div className="flex gap-4">
              <div className="h-8 bg-base-300 rounded-lg w-20"></div>
              <div className="h-8 bg-base-300 rounded-lg w-24"></div>
            </div>

            <div className="divider opacity-20"></div>

            <div className="space-y-3">
              <div className="h-12 bg-base-300 rounded-lg w-1/3"></div>
              <div className="h-6 bg-base-200 rounded-lg w-1/4"></div>
            </div>

            {/* List Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-5 bg-base-200 rounded w-full"></div>
              ))}
            </div>

            {/* Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="h-14 bg-base-300 rounded-xl flex-1"></div>
              <div className="h-14 bg-base-300 rounded-xl w-full sm:w-32"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Description Skeleton */}
            <div className="bg-base-200/30 p-6 md:p-8 rounded-3xl border border-base-300 space-y-4">
              <div className="h-8 bg-base-300 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-base-200 rounded w-full"></div>
              <div className="h-4 bg-base-200 rounded w-11/12"></div>
              <div className="h-4 bg-base-200 rounded w-full"></div>
              <div className="h-4 bg-base-200 rounded w-4/5"></div>
            </div>

            {/* QnA Skeleton */}
            <div className="space-y-4">
              <div className="h-8 bg-base-300 rounded w-1/4 mb-4"></div>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="h-16 bg-base-200 rounded-2xl w-full"
                ></div>
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="h-40 bg-info/5 rounded-3xl border border-base-300"></div>
        </div>
      </div>
    </div>
  );
}
