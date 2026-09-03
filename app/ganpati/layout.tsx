export const metadata = {
  title: "Ganeshotsav Special Offer | Krivana Panvel",
  description: "Tap the Golden Modak to reveal your guaranteed Ganeshotsav blessing for premium Panvel properties.",
};

export default function GanpatiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#D4AF37] selection:text-[#5C1615]">
      {children}
    </div>
  );
}