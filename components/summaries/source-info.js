import { ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DownloadSummaryButton from './download-summary-button';

export default function SourceInfo({ fileName, originalFileUrl, title, summaryText, createdAt }) {
  return (
    <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm lg:flex-row">
      <div className="flex items-center justify-center gap-2">
        <FileText className="h-4 w-4 text-rose-400" />
        <span>Source: {fileName}</span>
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-3 text-rose-600 hover:bg-rose-50 hover:text-rose-700"
          asChild
        >
          <a href={originalFileUrl} target="_blank" rel="nooperner noreferrer">
            <ExternalLink className="mr-1 h-4 w-4" />
            View Original
          </a>
        </Button>
        <DownloadSummaryButton
          title={title}
          summaryText={summaryText}
          fileName={fileName}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
}
