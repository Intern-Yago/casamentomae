const { Client } = require('pg');

async function pingSupabase() {
  const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Wkj4SgOqGcjsLwja@db.xmafdbruxaegougiqugr.supabase.co:5432/postgres';
  
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('Connecting to Supabase PostgreSQL to prevent project pausing...');
    await client.connect();

    const res = await client.query(`
      INSERT INTO keep_alive (id, last_ping, counter)
      VALUES (1, now(), 1)
      ON CONFLICT (id) DO UPDATE 
      SET last_ping = now(), counter = keep_alive.counter + 1
      RETURNING *;
    `);

    console.log('Keep-alive ping successful! Project is active.');
    console.log('Updated row:', res.rows[0]);
    await client.end();
    process.exit(0);
  } catch (err) {
    console.error('Keep-alive ping error:', err.message);
    process.exit(1);
  }
}

pingSupabase();
