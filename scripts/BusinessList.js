import { useBusinesses, businessesInNY, businessesInManufacturing, theAgent } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businesses")
export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Business</h1>" //inserts the h1 into the DOM

    businessArray.forEach( //We're calling each object of businessArray once and forEach is letting us do that
        (company) => { //company is a value, in this case it's an object
            contentTarget.innerHTML += Business(company) //we're adding each object that we wrote our javascript code in HTML form from Business.js in HTML
        }
    );   
}

const companyTarget = document.querySelector(".businessList--newYork")
export const CompanyInNYList = () => {
    const businessinNYArray = businessesInNY() //assigning our filtering function from BusinessProvider.js to a variable businessinNYArray
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"

    businessinNYArray.forEach( //for each filtered object in businessinNYArray,
        (company) => {
            companyTarget.innerHTML += Business(company) //put them in HTML
        }
    );   
}

const manufactureTarget = document.querySelector(".businessList--manufacturing")
export const CompanyIndustry = () => {
    const businessInManufacturingArray = businessesInManufacturing()
    contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

    businessInManufacturingArray.forEach(
        (company) => {
            manufactureTarget.innerHTML += Business(company)
        }
    );   
}

const agentTarget = document.querySelector(".agents")
export const agentList = () => {
    const agentsArray = theAgent() //assigning our function from BusinessProvider.js to a new variable agentsArray
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    agentsArray.forEach( //we're evaluting each object in businesses
        (company) => { //company is a single object in businesses
            agentTarget.innerHTML += PurchasingAgent(company) //PurchasingAagent function is from Business.js
        } //it focuses on only purchasing agents property (which itself is an object) that is in company (single businesses object)
    );   
}

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")



document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
            const businesses = useBusinesses()
           
            const foundBusiness = businesses.find( (business) => business.companyName === companySearch)
              // implement .find() method here
            
            companySearchResultArticle.innerHTML = `
                
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });



// const searchTarget = document.querySelector(".serchEngine")
// export const searchList = () => {
//     const searchesArray = findCompany

//     // searchesArray.forEach(
//     //     (company) => {
//     //         searchTarget.innerHTML += Business(company)
//     //     }
//     // );   
// }