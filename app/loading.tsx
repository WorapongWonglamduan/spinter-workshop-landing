import LoadingBar from '@/components/LoadingBar';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LoadingBar color="#7fba00" height={4} duration={3000} />
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">กำลังโหลด...</h2>
        <p className="text-sm text-gray-500 mt-2">โปรดรอสักครู่</p>
      </div>
    </div>
  );
}
