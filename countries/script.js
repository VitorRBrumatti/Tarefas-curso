let list = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(json => json.json())
        .then(countries => {
            for (let index = 0; index < countries.length; index++) {
                const country = countries[index];
                // nome: country.translations.por.common
                // flagImage: country.flags.png
                console.log(country.flags.png);
            }
        })
}





list();