import Button from './button';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

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

export default async function Home() {
  const startingCount = await fetchClicks();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">{"Cloud Clicker"}</h1>
      <Button startingCount={startingCount}/>
    </div>
  );
}
