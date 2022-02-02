// Set up the object
var hotel = { //key: value pairs
    name: 'Quay',
    rooms: 40,
    booked: 25,

    checkAvailability: function() {
        return this.rooms - this.booked; // Need "this" because inside function
    }
};

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = "Hotel Name: " + hotel.name; // Update HTML with property of the object //---- dot notation -- hotel.name

var elRooms = document.getElementById('rooms');

elRooms.textContent = "Rooms Available: " + hotel.checkAvailability(); // Update HTML with property of the object