document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const serviceType = document.getElementById("service-type").value;
    const dateTime = document.getElementById("date-time").value;
    const address = document.getElementById("address").value;

    const userId = auth.currentUser.uid; // Get the current user's ID
    saveBooking(userId, serviceType, dateTime, address);
});

// Save booking to the database
function saveBooking(userId, service, dateTime, address) {
    database.ref('bookings/' + userId).push({
            service: service,
            dateTime: dateTime,
            address: address
        })
        .then(() => {
            alert("Booking saved successfully!");
        })
        .catch(error => {
            console.error("Error saving booking:", error);
        });
}