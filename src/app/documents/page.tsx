import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import Button from "@/components/ui/Button";
import { FileText, Download, Eye, Clock, Search, Filter, Upload } from "lucide-react";

export const metadata: Metadata = {
  title: "Documents — Payfast",
  description: "Access, view, and manage all your financial documents securely.",
};

const documents = [
  { name: "Annual Tax Report 2025", type: "PDF", size: "2.4 MB", date: "Jun 15, 2026", category: "Tax" },
  { name: "Q2 Financial Statement", type: "PDF", size: "1.8 MB", date: "Jun 10, 2026", category: "Reports" },
  { name: "Invoice #INV-2026-0847", type: "PDF", size: "245 KB", date: "Jun 8, 2026", category: "Invoice" },
  { name: "Bank Statement — June", type: "PDF", size: "890 KB", date: "Jul 1, 2026", category: "Statement" },
  { name: "Insurance Policy Renewal", type: "PDF", size: "3.1 MB", date: "May 22, 2026", category: "Insurance" },
  { name: "Employee Payroll Summary", type: "XLSX", size: "1.2 MB", date: "Jun 30, 2026", category: "Payroll" },
];

export default function DocumentsPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Badge variant="lime" className="mb-5">Documents</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Your Documents
          </h1>
          <p className="max-w-2xl text-base text-white/45 leading-relaxed mb-8">
            All your financial documents in one secure place. View, download,
            and share documents with bank-level encryption.
          </p>

          {/* Controls */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 max-w-sm w-full sm:w-80">
                <Search size={16} className="text-white/30" />
                <span className="text-sm text-white/30">Search documents...</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-white/40">
                <Filter size={16} />
              </div>
            </div>
            <Button size="sm">
              <Upload size={14} /> Upload
            </Button>
          </div>

          {/* Documents List */}
          <div className="space-y-2">
            {documents.map((doc) => (
              <GlassCard key={doc.name} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <IconBadge>
                    <FileText size={18} />
                  </IconBadge>
                  <div>
                    <p className="text-sm font-medium text-white">{doc.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/40">{doc.type}</span>
                      <span className="text-xs text-white/25">{doc.size}</span>
                      <span className="flex items-center gap-1 text-xs text-white/25">
                        <Clock size={10} /> {doc.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/40">
                    {doc.category}
                  </span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white cursor-pointer">
                    <Eye size={14} />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white cursor-pointer">
                    <Download size={14} />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
