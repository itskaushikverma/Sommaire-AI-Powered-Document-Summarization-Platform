'use client';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';

export default function DownloadSummaryButton({ title, summaryText, fileName, createdAt }) {
  const handleDownload = () => {
    const summaryContent = `# ${title}
Generated Summary:
Generated on: ${new Date(createdAt).toDateString()}

${summaryText}
    
Original FileName: ${fileName}
Genrated By: Sommaire AI`;

    const blob = new Blob([summaryContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Summary-${title.replace(/[^a-z0-9]/gi, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return (
    <Button
      size={'sm'}
      className="h-8 bg-rose-100 px-3 text-rose-600 hover:bg-rose-50 hover:text-rose-600"
      onClick={handleDownload}
    >
      <Download className="mr-1 h-4 w-4" />
      Downlaod Summary
    </Button>
  );
}
