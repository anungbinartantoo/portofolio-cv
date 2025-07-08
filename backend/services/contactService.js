let contact = {
  whatsapp: '+62 813-9083-0955',
  github: 'https://github.com/anungbinartantoo',
  linkedin: 'https://id.linkedin.com/in/anung-binartanto-983175292',
  email: 'anungbinartanto@gmail.com'
};

function getContact() {
  return contact;
}

function updateContact(newContact) {
  contact = { ...contact, ...newContact };
  return contact;
}

module.exports = {
  getContact,
  updateContact
};