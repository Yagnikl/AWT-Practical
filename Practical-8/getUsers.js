async function fetchGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return null;
        }

        return response.json();
    } catch (error) {
        return null;
    }
}

async function getGitUsers(usernames) {
    const userPromises = usernames.map(username => fetchGitHubUser(username));

    const users = await Promise.all(userPromises);

    return users.filter(user => user !== null);
}

module.exports = { getGitUsers };