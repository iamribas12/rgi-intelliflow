// src/data/countrycode.js
import countries from "world-countries";

// Build country list with flag emojis + dial codes
const countryCodes = countries
  .map((country) => {
    const code =
      country.idd?.root && country.idd?.suffixes?.length
        ? `${country.idd.root}${country.idd.suffixes[0]}`
        : null;

    if (!code) return null;

    return {
      code, // e.g. +91
      flag: country.flag, // e.g. 🇮🇳
    };
  })
  .filter(Boolean)
  // remove duplicates and sort by code
  .filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.code === value.code)
  )
  .sort((a, b) => a.code.localeCompare(b.code));

export default countryCodes;
