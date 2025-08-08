import { google } from 'googleapis';
import path from 'path';
import { readFileSync } from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = '1iCPtvsjIsy3bjpqnuyoCltKlL3rGczrzBcLybTe4II4'; 

export async function addRowToSheet(data: string[]) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(
        readFileSync(path.join(process.cwd(), 'credentials/gsheets-creds.json'), 'utf8')
      ),
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
