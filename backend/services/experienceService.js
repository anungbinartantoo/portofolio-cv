const pool = require('../config/database');

async function getAllExperiences() {
  const res = await pool.query('SELECT * FROM experiences');
  return res.rows;
}

async function getExperienceByTitle(title) {
  const res = await pool.query('SELECT * FROM experiences WHERE LOWER(title) = LOWER($1)', [title]);
  return res.rows[0];
}

async function addExperience(exp) {
  const res = await pool.query(
    'INSERT INTO experiences (user_id, title, period, description) VALUES ($1, $2, $3, $4) RETURNING *',
    [exp.user_id, exp.title, exp.period, exp.description]
  );
  return res.rows[0];
}

async function updateExperience(title, updatedExp) {
  const res = await pool.query(
    'UPDATE experiences SET title = $1, period = $2, description = $3 WHERE LOWER(title) = LOWER($4) RETURNING *',
    [updatedExp.title, updatedExp.period, updatedExp.description, title]
  );
  return res.rows[0];
}

async function deleteExperience(title) {
  const res = await pool.query(
    'DELETE FROM experiences WHERE LOWER(title) = LOWER($1) RETURNING *',
    [title]
  );
  return res.rows[0];
}

module.exports = {
  getAllExperiences,
  getExperienceByTitle,
  addExperience,
  updateExperience,
  deleteExperience
};