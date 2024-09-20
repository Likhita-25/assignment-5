const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    country: "United States",
    mobileNumber: "+1-234-567-890",
    gender: "Male",
    favoriteSport: "Basketball",
    favoriteTeam: "Los Angeles Lakers",
    favoritePlayer: "LeBron James",
    profilePic: "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg" // Placeholder image
};

// Function to dynamically populate user data in the table
function populateUserData() {
    // Get the table body where data will be injected
    const userInfoTable = document.getElementById('userInfoTable');

    // Get full name for the header
    document.getElementById('fullName').textContent = `${userData.firstName} ${userData.lastName}`;

    // Get profile picture
    document.getElementById('profilePic').src = userData.profilePic;

    // Define data to display in table
    const userInfo = [
        { field: 'First Name', value: userData.firstName },
        { field: 'Last Name', value: userData.lastName },
        { field: 'Email', value: userData.email },
        { field: 'Country', value: userData.country },
        { field: 'Mobile Number', value: userData.mobileNumber },
        { field: 'Gender', value: userData.gender },
        { field: 'Favorite Sport', value: userData.favoriteSport },
        { field: 'Favorite Team', value: userData.favoriteTeam },
        { field: 'Favorite Player', value: userData.favoritePlayer }
    ];

    // Loop through the data and insert rows into the table
    userInfo.forEach(info => {
        const row = `<tr>
                        <td>${info.field}</td>
                        <td>${info.value}</td>
                    </tr>`;
        userInfoTable.insertAdjacentHTML('beforeend', row);
    });
}

// Call the function to populate the data on page load
window.onload = populateUserData;