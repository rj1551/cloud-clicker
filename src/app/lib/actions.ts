'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function incrementClick() {
    await sql`UPDATE click_data SET click_count = click_count + 1`;
    return await fetchClicks()
}


export async function fetchClicks() {
    noStore()
  
    try {
        const result = await sql`SELECT * FROM click_data`
        return result.rows[0]['click_count']
    
      } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }