
export const Business = (company) => {
    return `
        <section class="company">
            <h2 class="company__name">${company.companyName}</h2>
            <div class="company__fullStreet">${company.addressFullStreet}</div>
            <div class="company__city&state&zipcode">${company.addressCity}, ${company.addressStateCode} ${company.addressZipCode}</div>
        </section>
    `
}
