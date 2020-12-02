
// export const Business = (company) => {
//     return `
//         <section class="company">
//             <h2 class="company__name">${company.companyName}</h2>
//             <div class="company__fullStreet">${company.addressFullStreet}</div>
//             <div class="company__city&state&zipcode">${company.addressCity}, ${company.addressStateCode} ${company.addressZipCode}</div>
//         </section>
//     `
// }


export const PurchasingAgent = (agent) => {
    console.log("this is agent", agent)
    return `
        <section class="agent">
            <h2 class="agent__name">${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h2>
            <h3 class="agent__company">${agent.companyName}</h3>
            <h4 class="agent__phoneNumber">${agent.phoneWork}</h4>
        </section>
    `
}