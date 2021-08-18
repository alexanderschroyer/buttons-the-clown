import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='guardianName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userGuests = document.querySelector("input[name='numberOfGuests']").value
        const userAddress = document.querySelector("input[name='reservationAddress']").value
        const userDate = document.querySelector("input[name='reservationDate']").value
        const userHoursNeeded = document.querySelector("input[name='hoursNeeded']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            guests: parseInt(userGuests),
            address: userAddress,
            neededBy: userDate,
            hoursNeeded: parseInt(userHoursNeeded)
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})



export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="guardianName">Parent Name</label>
            <input type="text" name="guardianName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfGuests">Number of Guests</label>
            <input type="number" name="numberOfGuests" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationAddress">Address</label>
            <input type="text" name="reservationAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date needed</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="hoursNeeded">Hours needed</label>
            <input type="number" name="hoursNeeded" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}