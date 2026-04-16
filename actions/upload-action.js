'use server';

import { getDbConnection } from '@/lib/db';
import { generateSummaryFromGemini } from '@/lib/geminiai';
import { fetchAndExtractPdfText } from '@/lib/langchain';
import { generateSummaryFromOpenAI } from '@/lib/openai';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function generatePdfText({ fileUrl }) {
  if (!fileUrl) {
    return {
      success: false,
      message: 'File upload Failed',
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(fileUrl);

    if (!pdfText) {
      return {
        success: false,
        message: 'Failed to fetch and extract text from PDF',
        data: null,
      };
    }

    return {
      success: true,
      message: 'PDF text generated Successfully',
      data: { pdfText },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to fetch and extract text from PDF',
      data: null,
    };
  }
}

export async function generatePdfSummary({ pdfText, fileName }) {
  try {
    let summary;
    try {
      summary = await generateSummaryFromOpenAI(pdfText);
    } catch (error) {
      if (error && error?.message === 'RATE_LIMIT_EXCEEDED') {
        try {
          summary = await generateSummaryFromGemini(pdfText);
        } catch (geminiError) {
          console.error('Gemini API Error', geminiError);
          throw error('Failed to generate summary with availabe AI Provider');
        }
      }
    }

    if (!summary) {
      return {
        success: false,
        message: 'Summary Generation Fail',
        data: null,
      };
    }

    return {
      success: true,
      message: 'Summary Generated Successfully',
      data: {
        title: fileName,
        summary,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to generate summary ',
      data: null,
    };
  }
}

async function savePdfSummary({ userId, fileUrl, summary, title, fileName, key }) {
  try {
    const sql = await getDbConnection();
    const [savedSummary] =
      await sql`INSERT INTO pdf_summaries(user_id, original_file_url, summary_text, title, file_name, file_key ) VALUES (${userId}, ${fileUrl}, ${summary}, ${title}, ${fileName}, ${key}) RETURNING id, summary_text;`;
    return savedSummary;
  } catch (error) {
    console.error('Failed to save summary', error);
    throw new Error('Error in saving summary');
  }
}

export async function storePdfSummaryAction({ fileUrl, summary, title, fileName, key }) {
  let saveSummary;
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    saveSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
      key,
    });

    if (!saveSummary) {
      return {
        success: false,
        message: 'Failed to store summary. Please try again...',
      };
    }
  } catch (err) {
    return {
      success: false,
      message: err ? err.message : 'Failed to store summary',
      data: null,
    };
  }

  revalidatePath(`/summaries/${saveSummary.id}`);

  return {
    success: true,
    message: 'Summary stored successfully',
    data: {
      id: saveSummary.id,
    },
  };
}
