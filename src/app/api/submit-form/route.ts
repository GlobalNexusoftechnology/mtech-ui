import { NextResponse } from 'next/server';
import { addRowToSheet } from '@/lib/googleSheets';

export async function POST(req: Request) {
  try {
    const { phone, email, message, product } = await req.json();
    await addRowToSheet([
      email || '',
      phone || '',
      message || '',
      product || '',
      new Date().toISOString()
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
