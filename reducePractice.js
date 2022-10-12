var countries = [
    {
      "countryCode": "AF",
      "countryName": "Afghanistan",
      "population": "29121286",
      "capital": "Kabul",
      "continentName": "Asia"
    },
    {
      "countryCode": "AL",
      "countryName": "Albania",
      "population": "2986952",
      "capital": "Tirana",
      "continentName": "Europe"
    },
    {
      "countryCode": "DZ",
      "countryName": "Algeria",
      "population": "34586184",
      "capital": "Algiers",
      "continentName": "Africa"
    },
  ]

  //GOAL: country name is key and population value

  const countryPop = countries.reduce((acc, currentItem) => {
    const country = currentItem.countryName;
    acc[country] = currentItem.population;
    return acc;
  }, {});

  console.log(countryPop);

  //GOAL: country name is key and value is pop and capital

  const countryInfo = countries.reduce((acc, currentItem) => {
    const country = currentItem.countryName;
    acc[country] = {};
    acc[country].countryCode = currentItem.countryCode;
    acc[country].population = currentItem.population;
    acc[country].capital = currentItem.capital;
    acc[country].continentName = currentItem.continentName;

    return acc;
  }, {});

  console.log(countryInfo);
