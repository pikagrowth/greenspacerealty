import { Instagram } from "lucide-react";

export function InstagramPromo() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 rounded-3xl p-1 shadow-2xl mt-12 relative overflow-hidden group">
      
      {/* Animated Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_2s_infinite] skew-x-12"></div>
      
      <div className="bg-[#FDFBF7] rounded-[22px] p-8 md:p-12 text-center relative z-10 h-full flex flex-col items-center justify-center space-y-6">
        
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg text-white mb-2 transform group-hover:scale-110 transition-transform duration-500">
          <Instagram size={36} />
        </div>
        
        <h3 className="text-3xl font-black text-[#5C1615]">Join the Krivana Community</h3>
        
        <p className="text-gray-600 text-lg max-w-xl mx-auto font-medium">
          Did you find this offer through our viral Reel? Follow <strong className="text-gray-900">@Krivanas</strong> on Instagram for behind-the-scenes project updates, real estate tips in Panvel, and more exclusive gamified offers!
        </p>
        
        <a 
          href="https://instagram.com/krivanas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          Follow Krivana on Instagram
        </a>
      </div>
    </div>
  );
}