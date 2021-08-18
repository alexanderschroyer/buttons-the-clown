import { getReservations, deleteReservation, getClowns, sendCompletion} from "./dataAccess.js";

const clown = getClowns()
const mainContainer = document.querySelector("#container")

document.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

document.addEventListener("click",
(event) => {
    if (event.target.id === "clowns") {
        const [reservationId, clownId] = event.target.value.split("--")
        const completion = {
            clownId: parseInt(clownId),
            partyNumber: parseInt(reservationId),
            date: Date()
        }
        sendCompletion(completion)
    }
})



export const Reservations = () => {
    const clown = getClowns()
    const reservations = getReservations()

    let html = "<ul>"

    const listReservations = reservations.map(reservation => {
        if (reservation.isCompleted !== false) {
            return `
            <li> ${reservation.neededBy} ${reservation.childName} <select id="clowns"><option value="${reservation.id}--${clown.id}" selected> ${clown.name} </select>
            <button class="reservation__complete" id="completions--${reservation.id}" value="${reservation.id}"> Completed </button>
            <button class="reservation__delete" id="reservation--${reservation.id}"> Deny </button>
            </li>
            `
        } else {
            return `
            <li> ${reservation.neededBy} ${reservation.childName} <button class="reservation__delete" id="reservation--${reservation.id}"> Deny </button> </li>
            `
        }
    })

    html += listReservations.sort().join("")
    html += "</ul>"
    return html
}







// export const Reservations = () => {
//     const clowns = getClowns()
//     const reservations = getReservations()

//     let html = "<ul>"

//     const listReservations = reservations.map(reservation => {
//         return `
//         <li> ${reservation.neededBy} <button class="reservation__delete" id="reservation--${reservation.id}"> Deny </button>
//         </li>`
//     })

//     html += listReservations.sort().join("")
//     html += "</ul>"
//     return html
// }