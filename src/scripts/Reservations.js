import { getReservations, sendReservation, deleteReservation} from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})






export const Reservations = () => {
    const reservations = getReservations()

    let html = "<ul>"

    const listReservations = reservations.map(reservation => {
        return `
        <li>
            ${reservation.neededBy}
            <button class="reservation__delete"
                    id="reservation--${reservation.id}">
                Delete
            </button>
        </li>`
    })

    html += listReservations.join("")
    html += "</ul>"
    return html
}