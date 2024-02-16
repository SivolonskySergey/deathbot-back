const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
  console.log(req.body.username);
  const { username, pwd } = req.body;
  console.log(username);
  if (!username || !pwd)
    return res.status(400).json({ message: 'Username and password are required' });

  // check for duplicate usrenames in the database
  const duplicate = await User.findOne({ where: { name: username } });
  if (duplicate) return res.sendStatus(409); // Conflict
  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10); // 10 - количество добавленной "соли" для лучшей защиты пароля (10-стандарт)

    // create and store new user
    const result = await User.create({
      name: username,
      password: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ succes: `New user ${username} created!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
