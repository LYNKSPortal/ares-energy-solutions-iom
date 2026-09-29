// Curated remote imagery (Unsplash) used as placeholders for premium,
// technical/architectural photography. Replace with commissioned
// photography of Ares projects when available.

function unsplash(id: string, params = "auto=format&fit=crop&w=1600&q=80") {
  return `https://images.unsplash.com/${id}?${params}`;
}

export const images = {
  heroPrimary: unsplash("photo-1621905251189-08b45d6a269e"), // electrical panel detail
  heroSecondary: unsplash("photo-1558449028-b53a39d100fc"), // modern building exterior
  accreditation: unsplash("photo-1620714223084-8fcacc6dfd8d"), // technical detail
  electricalDetail: unsplash("photo-1587145820266-a5951ee6f620"), // cable detail
  residentialInterior: unsplash("photo-1600585154340-be6161a56a0c"), // modern interior
  commercialBuilding: unsplash("photo-1486406146926-c627a92ad1ab"), // commercial building
  domesticExterior: unsplash("photo-1568605114967-8130f3a36994"), // house exterior
  aboutTeamWork: unsplash("photo-1581093588401-fbb62a02f120"), // technical work
  ctaDark: unsplash("photo-1473341304170-971dccb5ac1e"), // dark technical
  commercialFitout: unsplash("photo-1581092160562-40aa08e78837"), // commercial fitout
  residentialDetail: unsplash("photo-1509391366360-2e959784a276"), // residential detail
} as const;
