//Light Year = (speed of light) x (one year)

//1year = 365 d/y * 24 h/d * 60 m/h * 60 s/m = 31,536,000 s

// d = c * t ---- distance of light = speed of light * one year

// d = (1.86 * 10^5) * (3.14 * 10^7 seconds) = 5.8 trillion miles

// Earth - Mercury 	0.61au	91,691,000km	56,974,146mi
// Earth - Venus	0.28au	41,400,000km	25,724,767mi
// Earth -Jupiter	4.2au	628,730,000km   390,674,710mi
// Earth - Saturn	8.52au	1,275,000,000km	  792,248,270mi
// Earth - Uranus	18.21au	2,723,950,000km	  1,692,662,530mi
// Earth - Neptune	29.09au	4,351,400,000km	  2,703,959,960mi



//literal notation - converts 1 light year to miles --test
let milePerLightyear = { //key: value pairs
    speedOfLight: 1.86 * 10 ** 5, // calculate the speed of light
    year: 3.154 * 10 ** 7, // Calculate the number of seconds in a year

    mpl: function() {
        return this.speedOfLight * this.year; // d = (1.86 * 10^5) * (3.14 * 10^7 seconds) = 5.8 trillion miles
    }

};

var elName = document.getElementById('distance'); //
elName.textContent = `One light year is about ${milePerLightyear.mpl()} miles`;

//end  

//object constructor notation
function lightyears(name, distance, speedOfLight, numLightYears) {
    this.name = name;
    this.distance = distance;
    this.speedOfLight = speedOfLight;
    this.numLightYears = numLightYears;
    this.mpl = function() {
        return this.distance * this.numLightYears / this.speedOfLight; // distance in miles fom earth * 1 light year / (5.88 * 10^12)) = 2.41 * 10^2 = x light years.
    };

}

let planetMercury = new lightyears('Mercury', 56974146, 5.88 * 10 ** 12, 1)
let mercury = `${planetMercury.name} is roughly `;
mercury += `${planetMercury.mpl()} light years from Earth.`;
let elMercury = document.getElementById('planet1')
elMercury.textContent = mercury;

let planetPluto = new lightyears('Pluto', 3290100000, 5.88 * 10 ** 12, 1)
let pluto = `${planetPluto.name} is roughly `;
pluto += `${planetPluto.mpl()} light years from Earth.`;
let elPluto = document.getElementById('planet2')
elPluto.textContent = pluto;