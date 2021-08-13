const applicationState = {
    reservations: [],
}


const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservationRequests) => {
                // Store the external state in application state
                applicationState.reservations = reservationRequests
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}


export const sendReservation = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })

}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}