import GlassCard from "@/components/ui/GlassCard";
import { Landmark, ArrowUpRight } from "lucide-react";

/* ── tiny flag components (pure CSS) ──────────────────────────── */
function UsFlag() {
  return (
    <div className="h-8 w-8 rounded-full overflow-hidden relative bg-white flex items-center justify-center">
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <rect width="32" height="32" fill="#B22234" />
        <rect y="2.46" width="32" height="2.46" fill="white" />
        <rect y="7.38" width="32" height="2.46" fill="white" />
        <rect y="12.31" width="32" height="2.46" fill="white" />
        <rect y="17.23" width="32" height="2.46" fill="white" />
        <rect y="22.15" width="32" height="2.46" fill="white" />
        <rect y="27.08" width="32" height="2.46" fill="white" />
        <rect width="14" height="17.23" fill="#3C3B6E" />
      </svg>
    </div>
  );
}

function SaudiFlag() {
  return (
    <div className="h-8 w-8 rounded-full overflow-hidden relative">
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <rect width="32" height="32" fill="#006C35" />
        <text x="16" y="18" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">☪</text>
      </svg>
    </div>
  );
}

function ChinaFlag() {
  return (
    <div className="h-10 w-10 rounded-full overflow-hidden shadow-lg">
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <rect width="32" height="32" fill="#DE2910" />
        <polygon points="6,4 7.2,7.7 4,5.8 8,5.8 4.8,7.7" fill="#FFDE00" />
        <polygon points="11,2 11.5,3.5 10,2.7 12,2.7 10.5,3.5" fill="#FFDE00" />
        <polygon points="13,4 13.5,5.5 12,4.7 14,4.7 12.5,5.5" fill="#FFDE00" />
        <polygon points="13,7 13.5,8.5 12,7.7 14,7.7 12.5,8.5" fill="#FFDE00" />
        <polygon points="11,9 11.5,10.5 10,9.7 12,9.7 10.5,10.5" fill="#FFDE00" />
      </svg>
    </div>
  );
}

function CanadaFlag() {
  return (
    <div className="h-10 w-10 rounded-full overflow-hidden shadow-lg">
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <rect width="32" height="32" fill="white" />
        <rect width="8" height="32" fill="#FF0000" />
        <rect x="24" width="8" height="32" fill="#FF0000" />
        <text x="16" y="21" textAnchor="middle" fill="#FF0000" fontSize="16">🍁</text>
      </svg>
    </div>
  );
}

function BangladeshFlag() {
  return (
    <div className="h-12 w-12 rounded-full overflow-hidden shadow-lg">
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <rect width="32" height="32" fill="#006A4E" />
        <circle cx="16" cy="16" r="5" fill="#F42A41" />
      </svg>
    </div>
  );
}

/* ── dotted world-map background ──────────────────────────────── */
// Each string row is 90 chars wide; '1' = land dot, '0' = ocean.
// Mercator-style world map: NA, SA, Europe, Africa, Asia, Australia.
const MAP_ROWS = [
  //          N.America                    Europe/Asia                                        
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000111111100000000000000000000000001111000011111111111111100000000000000000000000000",
  "000000011111111111000000000000000000000011111100111111111111111111000000000000000000000000",
  "000000111111111111100000000000000000000111111111111111111111111111100000000000000000000000",
  "000001111111111111110000000000000000001111111111111111111111111111110000000000000000000000",
  "000011111111111111111000000000000000011111111111111111111111111111111100000000000000000000",
  "000111111111111111111100000000000000111111111111111111111111111111111110000000000000000000",
  "001111111111111111111110000000000001111111111111111111111111111111111111000000000000000000",
  "001111111111111111111111000000000001111111111111111111111111111111111111100000000000000000",
  "000111111111111111111111100000000000111111111111111110011111111111111111110000000000000000",
  "000011111111111111111111000000000000011111111111111100001111111111111111100000000000000000",
  "000001111111111111111110000000000000001111111111111000000111111111111111000000000000000000",
  "000000111111111111111000000000000000000111111111110000000011111111111100000000000000000000",
  "000000011111111111100000000000000000000011111111100000000001111111111000000000000000000000",
  "000000001111111111000000000000000000000001111111000000000001111111110000000000000000000000",
  //                                         Africa
  "000000000011111100000000000000000000000000111111000000000000011111000000000000000000000000",
  "000000000001111000000000000000000000000001111111100000000000001110000000000000000000000000",
  "000000000000110000000000000000000000000001111111110000000000000100000000000000000000000000",
  //      S.America                                                              
  "000000000001110000000000000000000000000000111111111000000000000000000000000000000000000000",
  "000000000011111100000000000000000000000000011111111100000000000000000000000000000000000000",
  "000000000111111110000000000000000000000000001111111110000000000000000000000000000000000000",
  "000000001111111111000000000000000000000000000111111110000000000000000000000000000000000000",
  "000000001111111111100000000000000000000000000011111100000000000000000000000011100000000000",
  "000000000111111111100000000000000000000000000001111000000000000000000000000111110000000000",
  "000000000011111111110000000000000000000000000000110000000000000000000000001111111000000000",
  "000000000001111111110000000000000000000000000000000000000000000000000000001111111100000000",
  "000000000000111111100000000000000000000000000000000000000000000000000000000111111100000000",
  "000000000000011111000000000000000000000000000000000000000000000000000000000011111000000000",
  "000000000000001110000000000000000000000000000000000000000000000000000000000001100000000000",
  "000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
];

function DottedWorldMap() {
  const dots: { x: number; y: number }[] = [];
  const cols = MAP_ROWS[0].length; // 90
  const rows = MAP_ROWS.length;    // 31
  const dotSpacingX = 800 / cols;
  const dotSpacingY = 500 / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (MAP_ROWS[r][c] === "1") {
        dots.push({
          x: c * dotSpacingX + dotSpacingX / 2,
          y: r * dotSpacingY + dotSpacingY / 2,
        });
      }
    }
  }

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2.5" fill="white" opacity="0.07" />
      ))}
    </svg>
  );
}

/* ── main card ────────────────────────────────────────────────── */
export default function TransferCard() {
  return (
    <GlassCard className="relative overflow-hidden p-0 h-full min-h-[420px]">
      {/* Dotted world map */}
      <DottedWorldMap />

      {/* Dashed connection lines */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 120 150 Q 200 200 270 280"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="5 5"
          opacity="0.15"
        />
        <path
          d="M 270 280 Q 180 350 80 400"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="5 5"
          opacity="0.15"
        />
      </svg>

      {/* ── Floating country badges ── */}

      {/* China — upper-left */}
      <div className="absolute top-[22%] left-[15%] z-10 rounded-2xl bg-white p-1 shadow-xl">
        <ChinaFlag />
      </div>

      {/* Canada — center-left */}
      <div className="absolute top-[55%] left-[35%] z-10 rounded-2xl bg-white p-1 shadow-xl">
        <CanadaFlag />
      </div>

      {/* Bangladesh — bottom-left */}
      <div className="absolute bottom-[8%] left-[5%] z-10 rounded-2xl bg-white p-1 shadow-xl">
        <BangladeshFlag />
      </div>

      {/* ── Lime bank transfer card (upper-right) ── */}
      <div className="absolute top-6 right-6 z-20 w-[55%] max-w-[260px] rounded-4xl bg-lime p-5 shadow-[0_20px_60px_rgba(198,241,53,0.15)]">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            <Landmark size={16} className="text-black/70" />
          </div>
          <span className="rounded-full border border-black/15 px-3 py-0.5 text-[11px] font-medium text-black/70">
            Free
          </span>
        </div>

        {/* Title */}
        <p className="text-sm font-semibold text-black mb-3">Bank Transfer</p>

        {/* Transfer flow bar */}
        <div className="flex items-center justify-between rounded-full bg-white/80 px-2 py-1.5 mb-2">
          <UsFlag />
          <div className="flex items-center gap-1 text-black/30">
            <span className="text-[10px] tracking-widest">•••</span>
            <ArrowUpRight size={14} className="text-black/60" />
            <span className="text-[10px] tracking-widest">•••</span>
          </div>
          <SaudiFlag />
        </div>

        {/* PayPal labels */}
        <div className="flex items-center justify-between px-1 mb-4">
          <span className="text-[11px] font-bold text-[#003087] italic">PayPal</span>
          <span className="text-[10px] text-black/40">to</span>
          <span className="text-[11px] font-bold text-[#003087] italic">PayPal</span>
        </div>

        {/* Amount */}
        <p className="text-[11px] text-black/50 mb-0.5">Amount</p>
        <p className="text-2xl font-bold text-black">$3,200.00</p>
        <p className="text-[11px] text-black/40 mt-1">In review up to 3 days</p>
      </div>
    </GlassCard>
  );
}
