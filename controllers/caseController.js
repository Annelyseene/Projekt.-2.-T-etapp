const pool = require('../db');

exports.createCase = async (req, res) => {
  const { full_name, email, phone, serial_number, description, status } = req.body;
  try {
    await pool.query(
      'INSERT INTO cases (full_name, email, phone, serial_number, description, status) VALUES ($1, $2, $3, $4, $5, $6)',
      [full_name, email, phone, serial_number, description, status]
    );
    res.status(201).json({ message: 'Case created' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create case' });
  }
};

exports.deleteCase = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM cases WHERE id = $1', [id]);
    res.json({ message: 'Case deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete case' });
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await pool.query('UPDATE cases SET status = $1 WHERE id = $2', [status, id]);
    res.json({ message: 'Status updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status' });
  }
};
