<<<<<<< HEAD
=======
const readline = require('readline-sync')
>>>>>>> bf7efb10e58deb4b197b9f313ff1b0ad0712ddd2
const robots = {
  input: require('./robots/input.js'),
  text: require('./robots/text.js'),
  state: require('./robots/state.js'),
  image: require('./robots/image.js')
}

async function start() {
  robots.input()
  await robots.text()
  await robots.image()

  const content = robots.state.load()
<<<<<<< HEAD
  console.dir(content, { depth: null })
=======
  console.dir(content, { depth: null } )
>>>>>>> bf7efb10e58deb4b197b9f313ff1b0ad0712ddd2
}

start()
