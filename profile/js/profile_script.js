// Fetch user info and booking history for profile
const userId = auth.currentUser.uid; // Get current user's ID

// Fetch user info (example)
function fetchUserInfo(userId) {
    // Assume user info is stored at users/userId
    database.ref('users/' + userId).once('value')
        .then(snapshot => {
            const data = snapshot.val();
            document.getElementById("user-info").innerHTML = JSON.stringify(data); // Display user info
        })
        .catch(error => console.error("Error fetching user info:", error));
}

// Call function to fetch user info
fetchUser