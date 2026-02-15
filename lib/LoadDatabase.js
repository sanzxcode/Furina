
async function LoadDataBase(conn, m) {
  try {
    const botNumber = await conn.decodeJid(conn.user.id);

    if (typeof global.db.users !== 'object') global.db.users = {};
    if (typeof global.db.groups !== 'object') global.db.groups = {};
    if (typeof global.db.settings !== 'object') global.db.settings = {};

    const defaultSettings = { welcome: false, developer: [], reseller: [] };
    for (let key in defaultSettings) {
      if (!(key in global.db.settings)) global.db.settings[key] = defaultSettings[key];
    }

    if (typeof global.db.users[m.sender] !== 'object') global.db.users[m.sender] = {};
    const defaultUser = { afk: false, money: 0, limit: 0 };
    for (let key in defaultUser) {
      if (!(key in global.db.users[m.sender])) global.db.users[m.sender][key] = defaultUser[key];
    }

    if (m.isGroup) {
  if (typeof global.db.groups[m.chat] !== 'object')
    global.db.groups[m.chat] = {};

  const defaultGroup = {
    antilink: false,
    antilink2: false,
    bljpm: false,
    premium: false,
    autoai: false,
    list: [],
    pay: [],
    listStyle: 1
  };

  for (let key in defaultGroup) {
    if (!(key in global.db.groups[m.chat]))
      global.db.groups[m.chat][key] = defaultGroup[key];
  }
}
  } catch (e) {
    throw e;
  }
}

module.exports = LoadDataBase;