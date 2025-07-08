const pool = require('../config/database');

async function getAllEducation() {
  const res = await pool.query('SELECT * FROM education');
  return res.rows;
}

async function getEducationByInstitution(institution) {
  const res = await pool.query('SELECT * FROM education WHERE LOWER(institution) = LOWER($1)', [institution]);
  return res.rows[0];
}

async function addEducation(edu) {
  const res = await pool.query(
    'INSERT INTO education (user_id, institution, major, period) VALUES ($1, $2, $3, $4) RETURNING *',
    [edu.user_id, edu.institution, edu.major, edu.period]
  );
  return res.rows[0];
}

async function updateEducation(institution, updatedEdu) {
  const res = await pool.query(
    'UPDATE education SET institution = $1, major = $2, period = $3 WHERE LOWER(institution) = LOWER($4) RETURNING *',
    [updatedEdu.institution, updatedEdu.major, updatedEdu.period, institution]
  );
  return res.rows[0];
}

async function deleteEducation(institution) {
  const res = await pool.query(
    'DELETE FROM education WHERE LOWER(institution) = LOWER($1) RETURNING *',
    [institution]
  );
  return res.rows[0];
}

module.exports = {
  getAllEducation,
  getEducationByInstitution,
  addEducation,
  updateEducation,
  deleteEducation
};