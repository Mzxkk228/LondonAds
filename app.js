// Пример: Добавление объявления
const adsSection = document.getElementById('ads');

const adsData = [
  { title: 'Ad 1', description: 'This is the first ad.', category: 'Services' },
  { title: 'Ad 2', description: 'This is the second ad.', category: 'Jobs' },
];

adsData.forEach(ad => {
  const adElement = document.createElement('div');
  adElement.classList.add('ad');
  adElement.innerHTML = `
    <h3>${ad.title}</h3>
    <p>${ad.description}</p>
    <small>Category: ${ad.category}</small>
  `;
  adsSection.appendChild(adElement);
});