export default function CardSkeleton() {
  return (
    <div className="glass p-4 animate-pulse">
      <div className="h-5 w-2/3 bg-line/60 rounded mb-3" />
      <div className="h-4 w-1/2 bg-line/50 rounded mb-2" />
      <div className="h-4 w-1/3 bg-line/40 rounded" />
    </div>
  );
}
