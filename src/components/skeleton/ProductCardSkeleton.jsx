export default function ProductCardSkeleton() {
  return (
    <div className="card bg-base-100 shadow-md p-4 space-y-4">
      {/* Image Skeleton */}
      <div className="skeleton h-48 w-full rounded-xl"></div>

      {/* Title */}
      <div className="skeleton h-4 w-3/4"></div>

      {/* Rating */}
      <div className="skeleton h-4 w-1/2"></div>

      {/* Sold */}
      <div className="skeleton h-3 w-1/3"></div>

      {/* Price */}
      <div className="flex gap-2">
        <div className="skeleton h-5 w-20"></div>
        <div className="skeleton h-5 w-16"></div>
      </div>

      {/* Button */}
      <div className="skeleton h-10 w-full"></div>
    </div>
  );
}
