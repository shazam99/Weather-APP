// This function takes a weather condition name as input and returns the appropriate image path.
const ImagePaths = (name) => {
    let imgPath;

    // Using a switch statement to match the input name with the corresponding weather condition.
    switch (name) {
        case 'Clear':
            imgPath = require('../assets/weatherIcons/Clear.png');
            break;
        case 'Clouds':
            imgPath = require('../assets/weatherIcons/Clouds.png');
            break;
        case 'Drizzle':
            imgPath = require('../assets/weatherIcons/Drizzle.png');
            break;
        case 'Dust':
            imgPath = require('../assets/weatherIcons/Dust.png');
            break;
        case 'Fog':
            imgPath = require('../assets/weatherIcons/Fog.png');
            break;
        case 'Haze':
            imgPath = require('../assets/weatherIcons/Haze.png');
            break;
        case 'Mist':
            imgPath = require('../assets/weatherIcons/Mist.png');
            break;
        case 'Rain':
            imgPath = require('../assets/weatherIcons/Rain.png');
            break;
        case 'Sand':
            imgPath = require('../assets/weatherIcons/Sand.png');
            break;
        case 'Smoke':
            imgPath = require('../assets/weatherIcons/Smoke.png');
            break;
        case 'Snow':
            imgPath = require('../assets/weatherIcons/Snow.png');
            break;
        case 'Thunderstorm':
            imgPath = require('../assets/weatherIcons/Thunderstorm.png');
            break;

        // Default case if no matching condition is found.
        default:
            imgPath = require('../assets/weatherIcons/Sand.png');
            break;
    }

    // Returning the selected image path.
    return imgPath;
}

export default ImagePaths;