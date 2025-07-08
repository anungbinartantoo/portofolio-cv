const pool = require('../config/database');

async function getAllProjects() {
  const res = await pool.query('SELECT * FROM projects');
  return res.rows;
}

async function getProjectByTitle(title) {
  const res = await pool.query('SELECT * FROM projects WHERE LOWER(title) = LOWER($1)', [title]);
  return res.rows[0];
}

async function addProject(project) {
  const res = await pool.query(
    'INSERT INTO projects (user_id, title, description, image, tech, link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [project.user_id, project.title, project.description, project.image, project.tech, project.link]
  );
  return res.rows[0];
}

async function updateProject(title, updatedProject) {
  const res = await pool.query(
    'UPDATE projects SET title = $1, description = $2, image = $3, tech = $4, link = $5 WHERE LOWER(title) = LOWER($6) RETURNING *',
    [updatedProject.title, updatedProject.description, updatedProject.image, updatedProject.tech, updatedProject.link, title]
  );
  return res.rows[0];
}

async function deleteProject(title) {
  const res = await pool.query(
    'DELETE FROM projects WHERE LOWER(title) = LOWER($1) RETURNING *',
    [title]
  );
  return res.rows[0];
}

module.exports = {
  getAllProjects,
  getProjectByTitle,
  addProject,
  updateProject,
  deleteProject
};