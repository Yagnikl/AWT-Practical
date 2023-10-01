const { getGitUsers } = require('./getUsers');

const githubUsernames = ['Yagnikl', 'Ja3mamtora'];

async function main() {
    const githubUsers = await getGitUsers(githubUsernames);
    console.table(githubUsers);
}

main();
