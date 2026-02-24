export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#213559]/20 animate-spin"></div>
            
            {/* Inner rotating ring */}
            <div className="absolute inset-2 rounded-full border-4 border-t-[#263f6b] border-r-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '1s' }}></div>
            
            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#213559] to-[#263f6b] flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-[#213559]">Loading</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#213559] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#263f6b] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#213559] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-gray-600 text-sm">Please wait...</p>
        </div>
      </div>
    </div>
  );
}
