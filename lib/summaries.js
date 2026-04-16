import { getDbConnection } from './db';

export async function getSummaries(userId) {
  const sql = await getDbConnection();
  const summaries = await sql`SELECT * FROM pdf_summaries
    WHERE user_id = ${userId} ORDER BY created_at DESC;`;
  return summaries;
}

export async function getSummaryById(id) {
  try {
    const sql = await getDbConnection();
    const [summary] = await sql`SELECT
        id,
        user_id,
        title,
        original_file_url,
        summary_text,
        status, 
        created_at,
        updated_at, 
        file_name, 
        LENGTH(summary_text) - LENGTH(REPLACE(summary_text, ' ', '')) + 1 as word_count 
        FROM pdf_summaries WHERE id = ${id}; `;
    return summary;
  } catch (error) {
    console.error('Error Fetching summary by id', error);
    return null;
  }
}

export async function getUsersUploadCount(userId) {
  const sql = await getDbConnection();
  try {
    const result = await sql`SELECT COUNT(*) as count FROM pdf_summaries WHERE user_id = ${userId}`;
    return result[0].count;
  } catch (error) {
    console.error('Error Fetching Upload Count', error);
    return 0;
  }
}
