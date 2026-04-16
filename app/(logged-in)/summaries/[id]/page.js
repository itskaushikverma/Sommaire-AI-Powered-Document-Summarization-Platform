import BgGradient from '@/components/common/bg-gradient';
import { MotionDiv } from '@/components/common/motion-wrapper';
import SourceInfo from '@/components/summaries/source-info';
import SummaryHeader from '@/components/summaries/summary-header';
import SummaryViewer from '@/components/summaries/summary-viewer';
import { getSummaryById } from '@/lib/summaries';
import { FileText } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function SummaryPage(props) {
  const params = await props.params;
  const id = params.id;
  const summary = await getSummaryById(id);

  if (!summary) {
    notFound();
  }

  const { title, summary_text, file_name, word_count, created_at, original_file_url } = summary;
  const readingTime = Math.ceil((word_count || 0) / 200);

  return (
    <div className="relative isolate mb-16 min-h-screen bg-linear-to-b from-rose-100/60 to-white">
      <BgGradient className="from-rose-400 via-rose-300 to-orange-200" />
      <div className="conatiner mx-auto flex flex-col gap-4">
        <div className="px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
          <MotionDiv
            className="flex flex-col"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SummaryHeader title={title} createdAt={created_at} readingTime={readingTime} />
          </MotionDiv>
          {file_name && (
            <SourceInfo
              fileName={file_name}
              title={title}
              summaryText={summary_text}
              createdAt={created_at}
              originalFileUrl={original_file_url}
            />
          )}
        </div>
        <MotionDiv className="relative my-4 sm:my-8 lg:my-16">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-rose-100/30 bg-white/80 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-rose-50/50 via-orange-50/30 to-transparent opacity-50 sm:rounded-3xl" />

            <div className="text-muted-foreground sm:py1.5 absolute top-2 right-2 flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-1 text-xs shadow-xs sm:top-4 sm:right-4 sm:gap-2 sm:px-3 sm:text-sm">
              <FileText className="h-3 w-3 text-rose-400 sm:h-4 sm:w-4" />
              {word_count?.toLocaleString()} words
            </div>

            <div className="relative mt-8 flex items-center justify-center px-2 sm:mt-6 sm:px-14 md:px-20 lg:px-6">
              <SummaryViewer summary={summary_text} />
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
