import { cn } from '@/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'h-5 w-2/5 animate-pulse rounded-lg bg-slate-100',
        className,
      )}
      {...props}
    />
  );
}
