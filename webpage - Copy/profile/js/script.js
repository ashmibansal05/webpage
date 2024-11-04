// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Logout function
document.getElementById("logout").addEventListener("click", function() {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    });
});

// Fetch recent bookings (for the dashboard)
function fetchRecentBookings(userId) {
    database.ref('bookings/' + userId).once('value')
        .then(snapshot => {
            const data = snapshot.val();
            document.getElementById("recent-bookings").innerHTML = JSON.stringify(data); // Example display
        })
        .catch(error => console.error("Error fetching bookings:", error));
}