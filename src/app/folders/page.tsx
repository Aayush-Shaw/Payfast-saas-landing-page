import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { Folder, FileText, Image, Archive, MoreHorizontal, Search, Plus } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Folders — Payfast",
  description: "Organize your financial documents and records in structured folders.",
};

const folders = [
  { name: "Tax Documents", files: 24, size: "128 MB", icon: FileText, updated: "2 hours ago" },
  { name: "Invoices 2026", files: 156, size: "342 MB", icon: FileText, updated: "1 day ago" },
  { name: "Receipts", files: 89, size: "67 MB", icon: Image, updated: "3 days ago" },
  { name: "Contracts", files: 12, size: "45 MB", icon: FileText, updated: "1 week ago" },
  { name: "Reports Q2", files: 8, size: "92 MB", icon: Archive, updated: "2 weeks ago" },
  { name: "Insurance", files: 6, size: "18 MB", icon: Folder, updated: "1 month ago" },
];

export default function FoldersPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Badge variant="lime" className="mb-5">Folders</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Document Folders
          </h1>
          <p className="max-w-2xl text-base text-white/45 leading-relaxed mb-8">
            Keep your financial documents organized and accessible. Create folders,
            upload files, and find anything instantly with smart search.
          </p>

          {/* Search & Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 max-w-sm w-full">
              <Search size={16} className="text-white/30" />
              <span className="text-sm text-white/30">Search folders...</span>
            </div>
            <Button size="sm">
              <Plus size={14} /> New Folder
            </Button>
          </div>

          {/* Folder Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {folders.map((folder) => (
              <GlassCard key={folder.name} hover className="p-6 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <IconBadge size="lg" className="transition-transform duration-300 group-hover:scale-110">
                    <folder.icon size={22} />
                  </IconBadge>
                  <MoreHorizontal size={18} className="text-white/20" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{folder.name}</h3>
                <div className="flex items-center gap-3 text-xs text-white/30">
                  <span>{folder.files} files</span>
                  <span>·</span>
                  <span>{folder.size}</span>
                </div>
                <p className="text-xs text-white/20 mt-3">Updated {folder.updated}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
