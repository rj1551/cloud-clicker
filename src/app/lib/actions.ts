'use server';

import { sql } from '@vercel/postgres';

export async function incrementClick() {
    await sql`UPDATE click_data SET click_count = click_count + 1`;
}