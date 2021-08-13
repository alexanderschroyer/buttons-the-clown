import { ServiceForm } from "./ServiceForm.js"
import { Reservations } from "./Reservations.js"

export const Buttons = () => {
    return `
        <h1>Clown Shit</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Reservations</h2>
            ${Reservations()}
        </section>
    `
}
