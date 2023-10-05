let bcrypt = require('bcryptjs');


const users = []

let startingId = 1

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {

          if (bcrypt.compareSync(password, users[i].password)) {

            res.status(200).send(users[i])
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {

      let {username, email, firstName, lastName, password} = req.body

      let hashedPassword = bcrypt.hashSync(password, 10);

      users.push({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        id: startingId++
    })


        console.log('Registering User')
        users.push(req.body)
        console.log(users)
        res.status(200).send(req.body)

    startingId++

    }
}