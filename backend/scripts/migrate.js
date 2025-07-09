// Script migrasi & seeding sederhana untuk PostgreSQL

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const sqlFile = path.resolve(__dirname, '../migrations/001_initial_schema.sql');
const data = require('../data.js');

async function migrateAndSeed() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    await client.query('DROP TABLE IF EXISTS education, skills, projects, experiences, users CASCADE;');
    const sql = fs.readFileSync(sqlFile, 'utf8');
    await client.query(sql);
    console.log('✅ Migrasi berhasil dijalankan!');

    // Insert user 
    const userRes = await client.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id`,
      ['Anung Binartanto', 'anungbinartanto@gmail.com', 'password123']
    );
    const userId = userRes.rows[0].id;

    // Seed education
    for (const edu of data.educationHistory) {
      await client.query(
        `INSERT INTO education (user_id, institution, major, period) VALUES ($1, $2, $3, $4)`,
        [userId, edu.institution, edu.major, edu.period]
      );
    }

    // Seed skills
    for (const skill of data.skills) {
      await client.query(
        `INSERT INTO skills (user_id, name, level, icon) VALUES ($1, $2, $3, $4)`,
        [userId, skill.name, skill.level, skill.icon]
      );
    }

    // Seed projects
    for (const project of data.projects) {
      await client.query(
        `INSERT INTO projects (user_id, title, description, image, tech, link) VALUES ($1, $2, $3, $4, $5, $6)`,
        [userId, project.title, project.description, project.image, (project.tech || []).join(','), project.link]
      );
    }

    // Seed experiences
    for (const exp of data.experiences) {
      await client.query(
        `INSERT INTO experiences (user_id, title, period, description) VALUES ($1, $2, $3, $4)`,
        [userId, exp.title, exp.period, exp.desc]
      );
    }

    console.log('✅ Seeding data awal berhasil!');
  } catch (err) {
    console.error('❌ Migrasi/Seeding gagal:', err.message);
  } finally {
    await client.end();
  }
}

migrateAndSeed();