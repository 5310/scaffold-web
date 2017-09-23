import './sw-register.js'

import Purs from './_psc-output/Purs/index.js'
// import Purs from './Purs.purs' // `rollup-plugin-purs` not yet ready. Lots of errors.

console.log('Hullo from JavaScript, Web!')

Purs.main()
