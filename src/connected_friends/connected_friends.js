const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
    const users = Object.keys(graph);

    // if graph is empty (no keys), return false
    if (users.length === 0) {
        return false;
    }

    // if startUser is equal to endUser, return true
    if (startUser === endUser) {
        return true;
    }

    // initialize a new empty queue named 'discovered'
    const discovered = new Queue();
    // enqueue 'startUser'
    discovered.enqueue(startUser);
    // initialize a new array 'enqueued' that contains 'startUser'
    const enqueued = [startUser];

    // while discovered isn't empty...
    while (discovered.first) {
        // dequeue a value from 'discovered' and name it 'user'
        const user = discovered.dequeue();
        const following = graph[user];

        // for each friend 'followedUser' in 'graph[user]'...
        for (const followedUser of following) {
            // if 'followedUser' is equal to 'endUser', return true
            if (followedUser === endUser) {
                return true;
            }

            // if 'enqueued' doesn't include 'followedUser'...
            if (!enqueued.includes(followedUser)) {
                // add 'followedUser' to 'enqueued'
                enqueued.push(followedUser);
                // 'enqueue 'friend' to 'discovered'
                discovered.enqueue(followedUser);
            }
        }
    }

  return false;
};

module.exports = connected;
