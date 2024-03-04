import { useState } from 'react';
import DropdownButton from '../../UI/Buttons/DropdownButtons/DropdownButton/DropdownButton';
import SearchBar from '../../UI/SearchBar/SearchBar';
import './MainPagePanel.scss';
import Filter from '../FilterBar/Filter';
import FilterButton from '../../UI/Buttons/FilterButton';
import MailingButton from '../../UI/Buttons/MailingButton';

const menuOptions = [
  {
    label: 'Добавить вручную',
    action: () => console.log('Добавление вручную'),
  },
  {
    label: 'Импортировать',
    action: () => console.log('Импорт'),
  },
];

function MainPagePanel() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (searchTerm) => {
    console.log('Поиск:', searchTerm);
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <section className="main-page">
      <div className="main-page-panel">
        <div className="main-page-panel__container main-page-panel__container__content_search">
          <SearchBar
            placeholder="Поиск амбассадора"
            onSearch={handleSearch}
          />
          <FilterButton
            text="Фильтры"
            onClick={handleFilterClick}
            isFilterOpen={isFilterOpen}
          />
        </div>
        <div className="main-page-panel__container main-page-panel__container__content_mailing">
          <MailingButton
            text="Написать"
            onClick={() => console.log('откройся рассылка')}
          />
          <DropdownButton
            buttonLabel="Добавить Амбассадора"
            menuOptions={menuOptions}
          />
        </div>
      </div>
      {isFilterOpen && (
        <div className="filter-container">
          <Filter />
        </div>
      )}
    </section>
  );
}

export default MainPagePanel;
