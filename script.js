const cities = [
    // Norte
    { name: 'Manaus', timezone: 'America/Manaus' },
    // Nordeste
    { name: 'Salvador', timezone: 'America/Bahia' },
    // Centro-Oeste
    { name: 'Brasília', timezone: 'America/Sao_Paulo' },
    // Sudeste
    { name: 'São Paulo', timezone: 'America/Sao_Paulo' },
    // Sul
    { name: 'Porto Alegre', timezone: 'America/Sao_Paulo' },
    // Oeste (incluindo Rondônia)
    { name: 'Porto Velho', timezone: 'America/Porto_Velho' }
];

function updateCityTimes() {
    const now = new Date();
    const cityList = document.getElementById('city-list');
    cityList.innerHTML = ''; // Limpa a lista antes de adicionar os itens

    cities.forEach(city => {
        const options = { timeZone: city.timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const localTime = now.toLocaleTimeString('pt-BR', options);

        const listItem = document.createElement('li');
        listItem.textContent = `${city.name}: ${localTime}`;
        cityList.appendChild(listItem);
    });
}

// Atualiza a hora a cada segundo
setInterval(updateCityTimes, 1000);

const cities = [
    // México
    { name: 'Cidade do México', timezone: 'America/Mexico_City' },
    // Guatemala
    { name: 'Guatemala City', timezone: 'America/Guatemala' },
    // Belize
    { name: 'Belmopan', timezone: 'America/Belize' },
    // Honduras
    { name: 'Tegucigalpa', timezone: 'America/Tegucigalpa' },
    // El Salvador
    { name: 'San Salvador', timezone: 'America/El_Salvador' },
    // Costa Rica
    { name: 'San José', timezone: 'America/Costa_Rica' }
];

function updateCityTimes() {
    const now = new Date();
    const cityList = document.getElementById('city-list');
    cityList.innerHTML = ''; // Limpa a lista antes de adicionar os itens

    cities.forEach(city => {
        const options = { timeZone: city.timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const localTime = now.toLocaleTimeString('pt-BR', options);

        const listItem = document.createElement('li');
        listItem.textContent = `${city.name}: ${localTime}`;
        cityList.appendChild(listItem);
    });
}

// Atualiza a hora a cada segundo
setInterval(updateCityTimes, 1000);

const cities = [
    // EUA
    { name: 'Nova York', timezone: 'America/New_York' },
    { name: 'Chicago', timezone: 'America/Chicago' },
    { name: 'Denver', timezone: 'America/Denver' },
    { name: 'Los Angeles', timezone: 'America/Los_Angeles' },
    // Canadá
    { name: 'Toronto', timezone: 'America/Toronto' },
    { name: 'Vancouver', timezone: 'America/Vancouver' }
];

function updateCityTimes() {
    const now = new Date();
    const cityList = document.getElementById('city-list');
    cityList.innerHTML = ''; // Limpa a lista antes de adicionar os itens

    cities.forEach(city => {
        const options = { timeZone: city.timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const localTime = now.toLocaleTimeString('pt-BR', options);

        const listItem = document.createElement('li');
        listItem.textContent = `${city.name}: ${localTime}`;
        cityList.appendChild(listItem);
    });
}

// Atualiza a hora a cada segundo
setInterval(updateCityTimes, 1000);
