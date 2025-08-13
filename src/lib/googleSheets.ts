import { google } from 'googleapis';
import 'dotenv/config';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = '1iCPtvsjIsy3bjpqnuyoCltKlL3rGczrzBcLybTe4II4';

export async function addRowToSheet(data: string[]) {
  try {
    
    const privateKey = process.env.key?.replace(/\\n/g, '\n');
    const auth = new google.auth.JWT({
      project_id: process.env.project_id,
      email: process.env.email,
      key: privateKey,
      client_id: process.env.client_id,
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [data],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to write to Google Sheet:', error);
    throw error;
  }
}
