import { useBusinesses, businessesInNY, businessesInManufacturing, theAgent } from "./BusinessProvider.js"
import { Business } from "./Business.js"

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

const companyTarget = document.querySelector(".businessList--newYork")
export const CompanyInNYList = () => {
    const businessinNYArray = businessesInNY()
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"

    businessinNYArray.forEach(
        (company) => {
            companyTarget.innerHTML += Business(company)
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
    const agentsArray = theAgent()
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    agentsArray.forEach(
        (company) => {
            agentTarget.innerHTML += PurchasingAgent(company)
        }
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