const exec = require('child_process').exec;

console.log('Script started');

function execVerbose(code, options) {
    return new Promise((resolve, reject) => {
        const child = exec(code, options);
        child.stdout.on('data', console.log);
        child.stderr.on('data', console.log);
        child.on('close', resolve);
        child.on('error', reject);
    })
};

execVerbose('chcp 65001')
    .then(
        () => execVerbose('npm install', { cwd: 'app' })
    )
    .then(
        () => execVerbose('npm run build')
    )
    .then(
        () => execVerbose('npm run prod')
    )

// execVerbose('chcp 65001')
//     .then(
//         () => execVerbose('sequelize db:migrate', { cwd: 'app' })
//     )
//     .then(
//         () => Promise.all([
//             execVerbose('npm install', { cwd: 'app/public' }),
//             execVerbose('npm install')
//         ])
//     )
//     .then(
//         () => Promise.all([
//             execVerbose('npm run build', { cwd: 'app/public' }),
//             execVerbose('npm run build')
//         ])
//     )
//     .then(
//         () => execVerbose("npm run prod")
//     );
