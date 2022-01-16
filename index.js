console.log('index')
// function importAll(r) {
//     r.keys().forEach(r);
//   }
//   importAll(require.context('./test', false, /.js$/))

const mod = 'foo'
import(`./test/${mod}.js`)