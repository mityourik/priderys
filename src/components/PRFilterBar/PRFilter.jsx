import { useState } from 'react';
import RangeDatePicker from '../../UI/Calendar/RangeDatePicker';
import DropdownButtonSelect from '../../UI/Buttons/DropdownButtons/DropdownButtonSelect/DropdownButtonSelect';
import './PRFilter.scss';

function PRFilter() {
  const [gender, setGender] = useState('');
  const [program, setProgram] = useState('');
  const [status, setStatus] = useState('');
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const optionsProgram = [
    'Конные прогулки в лес',
    'Верховая езда на плацу',
    'Спец. тренировки',
    'Фотосессия с лошадьми',
    'Катание в поводу на лошадях в лес',
    'Пансионное содержание',
    'Индивидуальная аренда плаца',
    'Гостевое содержание лошади',
    'Тренерское сопровождение на плацу',
  ];

  const optionsGender = [
    'Женский',
    'Мужской',
  ];

  // const optionsCity = [
  //   'Москва',
  //   'Санкт-Петербург',
  //   'Новосибирск',
  //   'Екатеринбург',
  //   'Нижний Новгород',
  //   'Казань',
  //   'Челябинск',
  //   'Омск',
  //   'Самара',
  //   'Ростов-на-Дону',
  //   'Уфа',
  //   'Красноярск',
  //   'Воронеж',
  //   'Пермь',
  //   'Волгоград',
  //   'Краснодар',
  //   'Саратов',
  //   'Тюмень',
  //   'Тольятти',
  //   'Ижевск',
  //   'Барнаул',
  //   'Ульяновск',
  //   'Иркутск',
  //   'Хабаровск',
  //   'Ярославль',
  //   'Владивосток',
  //   'Махачкала',
  //   'Томск',
  //   'Оренбург',
  //   'Кемерово',
  //   'Новокузнецк',
  //   'Рязань',
  //   'Астрахань',
  //   'Набережные Челны',
  //   'Пенза',
  //   'Липецк',
  //   'Тула',
  //   'Киров',
  //   'Чебоксары',
  //   'Калининград',
  //   'Брянск',
  //   'Иваново',
  //   'Магнитогорск',
  //   'Ханты-Мансийск',
  //   'Тверь',
  //   'Ставрополь',
  //   'Белгород',
  //   'Сочи',
  // ];

  const resetFilters = () => {
    setGender('');
    setProgram('');
    setStatus('');
    setCity('');
    setStartDate(null);
    setEndDate(null);
  };

  const handleSelection = (selectedOption, field) => {
    console.log('Выбранная опция:', selectedOption);
    switch (field) {
      case 'gender':
        setGender(selectedOption);
        break;
      case 'program':
        setProgram(selectedOption);
        break;
      case 'status':
        setStatus(selectedOption);
        break;
      case 'city':
        setCity(selectedOption);
        break;
      default:
        break;
    }
  };

  const areAllFieldsEmpty = () => !gender && !program && !status && !city && !startDate && !endDate;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (areAllFieldsEmpty()) {
      console.log('Все поля пусты!');
      return;
    }

    const filterData = {
      gender,
      program,
      status,
      city,
      startDate,
      endDate,
    };
    console.log('handlSub', filterData);
    // отправить тут
  };

  return (
    <div className="filter">
      <form className="filter-form" onSubmit={handleSubmit}>

        <div className="filter-form__area filter-form__area--gender">
          <label htmlFor="genderSelect" className="filter-form__label">
            Пол
            <DropdownButtonSelect
              options={optionsGender}
              onSelect={(option) => handleSelection(option, 'gender')}
              selectedValue={gender}
              id="genderSelect"
              placeholder="Выберите пол"
            />
          </label>
        </div>

        <div className="filter-form__area filter-form__area--program">
          <label htmlFor="programSelect" className="filter-form__label">
            Вид услуги
            <DropdownButtonSelect
              options={optionsProgram}
              onSelect={(option) => handleSelection(option, 'program')}
              selectedValue={program}
              id="programSelect"
              placeholder="Выберите программу"
            />
          </label>
        </div>

        {/* <div className="filter-form__area filter-form__area--city">
          <label htmlFor="citySelect" className="filter-form__label">
            Город
            <DropdownButtonSelect
              options={optionsCity}
              onSelect={(option) => handleSelection(option, 'city')}
              selectedValue={city}
              id="citySelect"
              placeholder="Выберите город"
            />
          </label>
        </div> */}

        <div className="filter-form__area filter-form__area--date-range">
          <label htmlFor="dateSelect" className="filter-form__label">
            Выберите дату
            <RangeDatePicker
              id="dateSelect"
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </label>
        </div>

        <div className="filter-form__area filter-form__area--reset">
          <span className="filter-form__span filter-form__span__reset" />
          <button type="button" className="filter-form__button filter-form__button--reset" onClick={resetFilters}>Очистить фильтры</button>
        </div>
      </form>
      <div className="filter-form__area filter-form__area--apply">
        <button type="submit" className="filter-form__button filter-form__button--apply">Применить</button>
      </div>
    </div>
  );
}

export default PRFilter;
