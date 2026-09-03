export function EventFooter() {
  return (
    <footer className="w-full bg-[#5C1615] text-[#FDFBF7]/60 py-10 text-center mt-24 relative z-10">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
      
      <h4 className="text-xl font-bold text-[#D4AF37] tracking-widest uppercase mb-4">
        Krivana
      </h4>
      
      <p className="text-sm font-medium mb-4 text-white/80">
        Powered by <strong className="text-white">Greenspace Realty</strong>
      </p>

      <p className="text-xs max-w-2xl mx-auto px-4 opacity-60 leading-relaxed font-light">
        © {new Date().getFullYear()} Krivana. All Rights Reserved. 
        Offers are subject to terms and conditions. The spot booking discount and other offers are mutually exclusive and applicable only on select Panvel properties during the Ganeshotsav event period. Please consult with our sales team for exact details upon site visit.
      </p>
    </footer>
  );
}