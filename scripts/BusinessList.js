import {useBusinesses} from "./BusinessProvider.js"
import {Business} from "./Business.js"

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Business</h1>"

    businessArray.forEach(
        (company) => {
            contentTarget.innerHTML += Business(company)
        }
    );   
}