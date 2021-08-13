import { fetchRequests } from "./dataAccess.js"
import { Buttons } from "./Buttons.js"




const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = Buttons()
        }
    )
}
render()
        
document.addEventListener("stateChanged", event => {
        console.log("State of data has changed. Regenerating HTML...")
        render()
        
    }
)
