const pool = require('../config/database');

async function getAllSkills() {
  const res = await pool.query('SELECT * FROM skills');
  return res.rows;
}

async function getSkillByName(name) {
  const res = await pool.query('SELECT * FROM skills WHERE LOWER(name) = LOWER($1)', [name]);
  return res.rows[0];
}

// Tambahkan icon pada insert
async function addSkill(skill) {
  const res = await pool.query(
    'INSERT INTO skills (user_id, name, level, icon) VALUES ($1, $2, $3, $4) RETURNING *',
    [skill.user_id, skill.name, skill.level, skill.icon]
  );
  return res.rows[0];
}

// Tambahkan icon pada update
async function updateSkill(name, updatedSkill) {
  const res = await pool.query(
    'UPDATE skills SET name = $1, level = $2, icon = $3 WHERE LOWER(name) = LOWER($4) RETURNING *',
    [updatedSkill.name, updatedSkill.level, updatedSkill.icon, name]
  );
  return res.rows[0];
}

async function deleteSkill(name) {
  const res = await pool.query(
    'DELETE FROM skills WHERE LOWER(name) = LOWER($1) RETURNING *',
    [name]
  );
  return res.rows[0];
}

module.exports = {
  getAllSkills,
  getSkillByName,
  addSkill,
  updateSkill,
  deleteSkill
};