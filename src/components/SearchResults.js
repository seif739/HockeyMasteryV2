import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import '../components/pages/Products.css';

const mockData = [
  { id: 1, name: 'Power Skating', description: 'Improve your speed, agility, and efficiency on the ice with advanced power skating techniques and drills.', price: 120, category: 'Power Skating' },
  { id: 2, name: 'Stickhandling Mastery', description: 'Enhance your puck control with exercises designed to increase your stickhandling speed, accuracy, and creativity.', price: 100, category: 'Stickhandling Mastery' },
  { id: 3, name: 'Defensive Strategies', description: 'Learn effective defensive techniques and positioning to improve your overall game and prevent scoring opportunities.', price: 110, category: 'Defensive Strategies' },
  { id: 4, name: 'Goalie Training', description: 'Develop your goaltending skills with specialized training focused on reflexes, positioning, and save techniques.', price: 130, category: 'Goalie Training' },
  { id: 5, name: 'Shooting Accuracy', description: 'Improve your shooting accuracy and power with targeted drills and expert coaching.', price: 115, category: 'Shooting Accuracy' },
];

const SearchResults = ({ filters }) => {
  const { t } = useTranslation('');
  const [results, setResults] = useState(mockData);

  useEffect(() => {
    let filteredResults = mockData;

    if (filters.category) {
      filteredResults = filteredResults.filter(item => item.category === filters.category);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filteredResults = filteredResults.filter(item => item.price >= min && item.price <= max);
    }

    setResults(filteredResults);
  }, [filters]);

  return (
    <div className="products__list">
      {results.map(item => (
        <div className="product__item" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p className="price">${item.price}</p>
          <Button buttonStyle="btn--primary" buttonSize="btn--medium">{t('Learn More')}</Button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
