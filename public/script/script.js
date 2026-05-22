const menu = document.querySelector('.menu')
const menuOpener = document.querySelector('.menu__opener');
const menuOpenerIcon = document.querySelector('.menu__opener i');
const dateText = document.querySelector('.date__text');
const timeText = document.querySelector('.time__text');
const searchInput = document.querySelector('.search__input');
const searchItemsContainer = document.querySelector('.searched__items')
const menuItems = document.querySelectorAll('.dashboard__links');
const bottonNavigationLinks = document.querySelectorAll('.botton__navigation__links')
const tempratureUnitBtns = document.querySelectorAll('.temprature__uits')

// home page elements
const currentCityName = document.querySelector('.current__city__name');
const tempText = document.querySelector('.tem__number');
const humidityText = document.querySelector('.humidity__text')
const windText = document.querySelector('.wind__text')
const feelsLikeText = document.querySelector('.feellike__text')
const currentStatusImage = document.querySelector('.current__status__image')
const currentWeatherStatus = document.querySelector('.current__weather__status')

// setDefaul city 
const setDefaultCityBtn = document.querySelector('.setdefault__city')

// setting elements
const darkModeCheckbox = document.querySelector('.darktheme__checkbox')

// Page content
const homeContent = document.querySelector('.home__content')
const favoriteContent = document.querySelector('.favorite__content')
const settingContent = document.querySelector('.setting__content')

// home page
const nextDaysContainer = document.querySelector('.nextdays__container')

//* data
const cities = [
    {
        name: "Tehran",
        country: "Iran",
        temp: 28,
        condition: "Sunny",
        humidity: 25,
        wind: 12,
        feelsLike: 30,
        icon: "./assets/Images/weather/sunny.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 30, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Sunday, May 23", temp: 27, condition: "Partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Monday, May 24", temp: 25, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Tuesday, May 25", temp: 29, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Wednesday, May 26", temp: 31, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Thursday, May 27", temp: 29, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" }
        ]
    },
    {
        name: "Dubai",
        country: "UAE",
        temp: 42,
        condition: "Sunny",
        humidity: 60,
        wind: 8,
        feelsLike: 46,
        icon: "./assets/Images/weather/sunny.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 43, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Sunday, May 23", temp: 41, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Monday, May 24", temp: 40, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Tuesday, May 25", temp: 39, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Wednesday, May 26", temp: 42, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Thursday, May 27", temp: 40, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" }
        ]
    },
    {
        name: "London",
        country: "UK",
        temp: 18,
        condition: "Cloudy",
        humidity: 72,
        wind: 15,
        feelsLike: 16,
        icon: "./assets/Images/weather/cloudy.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 17, condition: "rainy", icon: "./assets/Images/weather/rainy.svg" },
            { day: "Sunday, May 23", temp: 16, condition: "rainy", icon: "./assets/Images/weather/rainy.svg" },
            { day: "Monday, May 24", temp: 19, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Tuesday, May 25", temp: 21, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Wednesday, May 26", temp: 20, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Thursday, May 27", temp: 18, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" }
        ]
    },
    {
        name: "Paris",
        country: "France",
        temp: 22,
        condition: "Partly cloudy",
        humidity: 55,
        wind: 10,
        feelsLike: 23,
        icon: "./assets/Images/weather/partly-cloudy.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 24, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Sunday, May 23", temp: 25, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Monday, May 24", temp: 23, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Tuesday, May 25", temp: 20, condition: "rainy", icon: "./assets/Images/weather/rainy.svg" },
            { day: "Wednesday, May 26", temp: 22, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Thursday, May 27", temp: 21, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" }
        ]
    },
    {
        name: "New York",
        country: "USA",
        temp: 25,
        condition: "Sunny",
        humidity: 45,
        wind: 18,
        feelsLike: 27,
        icon: "./assets/Images/weather/sunny.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 26, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Sunday, May 23", temp: 28, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Monday, May 24", temp: 27, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Tuesday, May 25", temp: 24, condition: "rainy", icon: "./assets/Images/weather/rainy.svg" },
            { day: "Wednesday, May 26", temp: 26, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Thursday, May 27", temp: 25, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" }
        ]
    },
    {
        name: "Tokyo",
        country: "Japan",
        temp: 26,
        condition: "Rainy",
        humidity: 80,
        wind: 6,
        feelsLike: 28,
        icon: "./assets/Images/weather/rainy.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 25, condition: "rainy", icon: "./assets/Images/weather/rainy.svg" },
            { day: "Sunday, May 23", temp: 24, condition: "stormy", icon: "./assets/Images/weather/windy.svg" },
            { day: "Monday, May 24", temp: 27, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Tuesday, May 25", temp: 29, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Wednesday, May 26", temp: 28, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Thursday, May 27", temp: 26, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" }
        ]
    },
    {
        name: "Sydney",
        country: "Australia",
        temp: 19,
        condition: "Cloudy",
        humidity: 65,
        wind: 22,
        feelsLike: 17,
        icon: "./assets/Images/weather/cloudy.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 18, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Sunday, May 23", temp: 20, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Monday, May 24", temp: 22, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Tuesday, May 25", temp: 21, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Wednesday, May 26", temp: 23, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Thursday, May 27", temp: 20, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" }
        ]
    },
    {
        name: "Moscow",
        country: "Russia",
        temp: 8,
        condition: "Snowy",
        humidity: 85,
        wind: 14,
        feelsLike: 4,
        icon: "./assets/Images/weather/snow.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 6, condition: "snowy", icon: "./assets/Images/weather/snow.svg" },
            { day: "Sunday, May 23", temp: 5, condition: "snowy", icon: "./assets/Images/weather/snow.svg" },
            { day: "Monday, May 24", temp: 7, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Tuesday, May 25", temp: 9, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Wednesday, May 26", temp: 10, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Thursday, May 27", temp: 8, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" }
        ]
    },
    {
        name: "Doha",
        country: "Qatar",
        temp: 38,
        condition: "Sunny",
        humidity: 40,
        wind: 20,
        feelsLike: 42,
        icon: "./assets/Images/weather/sunny.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 39, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Sunday, May 23", temp: 40, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Monday, May 24", temp: 38, condition: "windy", icon: "./assets/Images/weather/windy.svg" },
            { day: "Tuesday, May 25", temp: 37, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Wednesday, May 26", temp: 41, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Thursday, May 27", temp: 39, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" }
        ]
    },
    {
        name: "Istanbul",
        country: "Turkey",
        temp: 24,
        condition: "Partly cloudy",
        humidity: 58,
        wind: 11,
        feelsLike: 25,
        icon: "./assets/Images/weather/partly-cloudy.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 25, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Sunday, May 23", temp: 26, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Monday, May 24", temp: 23, condition: "rainy", icon: "./assets/Images/weather/rainy.svg" },
            { day: "Tuesday, May 25", temp: 22, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Wednesday, May 26", temp: 24, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Thursday, May 27", temp: 23, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" }
        ]
    },
    {
        name: "Miami",
        country: "USA",
        temp: 32,
        condition: "Rainy",
        humidity: 75,
        wind: 16,
        feelsLike: 38,
        icon: "./assets/Images/weather/rainy.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 31, condition: "stormy", icon: "./assets/Images/weather/windy.svg" },
            { day: "Sunday, May 23", temp: 30, condition: "rainy", icon: "./assets/Images/weather/rainy.svg" },
            { day: "Monday, May 24", temp: 32, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Tuesday, May 25", temp: 33, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Wednesday, May 26", temp: 34, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Thursday, May 27", temp: 32, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" }
        ]
    },
    {
        name: "Berlin",
        country: "Germany",
        temp: 15,
        condition: "Cloudy",
        humidity: 68,
        wind: 19,
        feelsLike: 13,
        icon: "./assets/Images/weather/cloudy.svg",
        forecast: [
            { day: "Saturday, May 22", temp: 14, condition: "rainy", icon: "./assets/Images/weather/rainy.svg" },
            { day: "Sunday, May 23", temp: 16, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Monday, May 24", temp: 18, condition: "partly-cloudy", icon: "./assets/Images/weather/partly-cloudy.svg" },
            { day: "Tuesday, May 25", temp: 17, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" },
            { day: "Wednesday, May 26", temp: 19, condition: "sunny", icon: "./assets/Images/weather/sunny.svg" },
            { day: "Thursday, May 27", temp: 17, condition: "cloudy", icon: "./assets/Images/weather/cloudy.svg" }
        ]
    }
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

//* helper functions
function closeSearch() {
    searchItemsContainer.classList.remove('flex');
    searchItemsContainer.classList.add('hidden');
    searchInput.value = '';
}

//? Flags
let isMenuOpen = false;
let theme = 'light';
let currentTemp = 28;


//! setDefaul City Handler
function setDefaultCityHandler(){
    const title = currentCityName.textContent.split(',')
    localStorage.setItem('defaultCity', title[0])
    
}
//! page Load function
function onPageLoad() {
    dateTimeHandler();
    defaultCityStatusHandler();
    themeHandler()
}
//! Take default city from localstorage and load data
function defaultCityStatusHandler() {
    const isAvailble = localStorage.getItem('defaultCity');
    if (!isAvailble) return;
    const data = cities.find(function (item) {
        return item.name === isAvailble;
    });
    createElementHandler(data)
}
function createElementHandler(data) {
    nextDaysContainer.innerHTML = '';

    currentTemp = data.temp;

    currentCityName.textContent = `${data.name}, ${data.country}`
    currentWeatherStatus.textContent = data.condition
    tempText.textContent = data.temp
    humidityText.textContent = `${data.humidity}%`
    windText.textContent = `${data.wind} km/h`
    feelsLikeText.textContent = `${data.feelsLike}°`
    currentStatusImage.setAttribute('src', `${data.icon}`)
    data.forecast.forEach(function (item) {
        nextDaysContainer.insertAdjacentHTML('beforeend',
            `
        <div class="flex flex-col  items-center justify-between">
            <p class="text-white font-black text-xl">${item.day}</p>
            <img class="size-44" src="${item.icon}" alt="">
            <div class="flex flex-col items-center">
                <p class="text-white font-bold">${item.temp}°C - ${Math.floor(calculateFarenheit(item.temp))}°F</p>
                <p class="text-white font-black">${item.condition}</p>
            </div>
        </div>
        `
        )
    })

}

// Menu Handler
function menuHandler() {
    if (!isMenuOpen) {
        isMenuOpen = true
        menu.classList.remove('w-16')
        menu.classList.add('menuOpen')
        menuOpenerIcon.classList.remove('rotate-180')

        return;
    }
    menuOpenerIcon.classList.add('rotate-180')
    isMenuOpen = false;
    menu.classList.remove('menuOpen')
    menu.classList.add('w-16')
}
function menuItemsHandler(event) {
    const icons = event.target.classList.contains('fa-solid');
    const links = event.target.classList.contains('dashboard__links');
    const bottomnavigationlinks = event.target.classList.contains('botton__navigation__links');

    event.preventDefault();
    const activeItem = document.querySelector('.active');
    if (activeItem) {
        activeItem.classList.remove('active');
    }
    if (icons) {
        event.target.parentElement.parentElement.classList.add('active')
        const data = event.target.parentElement.parentElement.dataset.value;
        console.log(data);
        
        moveTOPagesHandler(data)
        return;
    }
    if (links || bottomnavigationlinks) {
        event.target.classList.add('active');
        const data = event.target.dataset.value;
        console.log(data);
        
        moveTOPagesHandler(data)

        return;
    }
}
function moveTOPagesHandler(value) {
    switch (value) {
        case 'home': {
            homeContent.classList.remove('hidden');
            homeContent.classList.add('flex');
            favoriteContent.classList.remove('flex')
            favoriteContent.classList.add('hidden')
            settingContent.classList.remove('flex');
            settingContent.classList.add('hidden');
            break;
        }
        case 'like': {
            favoriteContent.classList.remove('hidden')
            favoriteContent.classList.add('flex')
            homeContent.classList.remove('flex');
            homeContent.classList.add('hidden');
            settingContent.classList.remove('flex');
            settingContent.classList.add('hidden');
            break;
        }
        case 'setting': {
            settingContent.classList.remove('hidden');
            settingContent.classList.add('flex');
            homeContent.classList.remove('flex');
            homeContent.classList.add('hidden');
            favoriteContent.classList.remove('flex')
            favoriteContent.classList.add('hidden')
            break;
        }
    }
}

// temprature handler
function tempratureHandler(event) {
    const activeItem = document.querySelector('.temprature__uits.active__unit');
    if (event.target.classList.contains('active__unit')) {
        return;
    };
    if (activeItem) {
        activeItem.classList.remove('active__unit');
    }
    event.target.classList.add('active__unit')
    calculateTemprature(event.target.value);
}
function calculateTemprature(value) {
    switch (value) {
        case 'celcios': {
            const celcios = calculateCelcios(currentTemp);
            tempText.textContent = Math.floor(celcios);
            currentTemp = celcios
            break;
        };
        case 'fahrenheit': {
            const faren = calculateFarenheit(currentTemp)
            tempText.textContent = Math.floor(faren);
            currentTemp = faren;
            break;
        }
    }
}

//! calculate farenheit and celcios
function calculateFarenheit(num) {
    const fahrenheit = (num * 1.8) + 32;
    return fahrenheit;
}
function calculateCelcios(num) {
    const celcios = ((num - 32) * 5) / 9;
    return celcios;
}


function dateTimeHandler() {
    TimeHandler()
    dateHandler()
    setInterval(function () {
        TimeHandler()
    }, 1000);
};
function dateHandler() {
    const date = new Date();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const day = date.getDay();
    const totalDate = `${days[day]}, ${months[month]} ${dayOfMonth}`;
    dateText.textContent = `${totalDate}`
}
function TimeHandler() {
    const date = new Date();
    const totalHour = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    timeText.textContent = totalHour
}


// search handler
function searchHandler() {
    searchItemsContainer.classList.remove('hidden')
    searchItemsContainer.classList.add('flex')
    const searched = []
    const value = searchInput.value.trim()
    cities.forEach(function (city) {
        if (city.name.includes(value)) {
            searched.push(city)
        }
    })
    console.log(searched);

    searched.forEach(function (item) {
        searchItemsContainer.insertAdjacentHTML('beforeend',
            `
                <div class="z-50 backdrop-blur-3xl relative pl-1.5 w-full min-h-13 bg-lightmain cursor-pointer " data-value="${item.name}">
                        <p class="w-33 text-white mt-1 font-bold block" data-value="${item.name}">${item.name}, ${item.country}</p>
                        <p class="text-sm text-white" data-value="${item.name}">${item.condition}</p>
                        <div class="font-bold absolute right-2 bottom-1 text-white" data-value="${item.name}">
                            ${item.temp}°C
                        </div>
                </div>            
                `
        )
    })
}
function searchCityHandler(event) {
    const city = event.target.dataset.value;
    const data = cities.find(item => item.name === city)
    createElementHandler(data)
    closeSearch();
}

// Set events
menuOpener.addEventListener('click', menuHandler);
document.addEventListener('DOMContentLoaded', onPageLoad);
searchInput.addEventListener('input', searchHandler);
searchItemsContainer.addEventListener('click', searchCityHandler)
setDefaultCityBtn.addEventListener('click', setDefaultCityHandler)
menuItems.forEach(function (item) {
    item.addEventListener('click', menuItemsHandler)
});
//TODO need to be rafactore
bottonNavigationLinks.forEach(function (item) {
    item.addEventListener('click', menuItemsHandler)
});
tempratureUnitBtns.forEach(item => {
    item.addEventListener('click', tempratureHandler)
});


function darkTheme() {
    localStorage.setItem('darkMode', 'enable')
    document.documentElement.classList.add('dark')
    darkModeCheckbox.checked = true
}
function lightTheme() {
    localStorage.setItem('darkMode', 'disable')
    document.documentElement.classList.remove('dark');
}
function darkThemeHandler(event) {
    if (event.target.checked) {
        darkTheme();
        return;
    }
    lightTheme();
}
function themeHandler(){
    const isDarkModeEnable = localStorage.getItem('darkMode');
    switch(isDarkModeEnable){
        case 'enable':{
            darkTheme();
            break;
        };
        case 'disable':{
            lightTheme();
            return;
        };
        default:{
            lightTheme();
        }
    }
}
darkModeCheckbox.addEventListener('click', darkThemeHandler)