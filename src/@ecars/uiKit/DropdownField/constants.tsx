import type {DropdownOption} from 'ecars-web-lib';

interface TopbarDropdownsConfig {
  label: string;
  options: DropdownOption[];
}

const shipToConfig: DropdownOption[] = [
  {
    value: 'ca',
    name: 'Canada',
    label: (
      <img
        src="./assets/images/flags/canada.svg"
        alt="ca"
      />
    ),
  },
  {
    value: 'us',
    name: 'USA',
    label: (
      <img
        src="./assets/images/flags/usa.svg"
        alt="usa"
      />
    ),
  },
  {
    value: 'eu',
    name: 'Europe',
    label: (
      <img
        src="./assets/images/flags/europe.svg"
        alt="eu"
      />
    ),
  },
];

const currencyConfig: DropdownOption[] = [
  {
    value: 'usd',
    name: 'US Dollar',
  },
  {
    value: 'eur',
    name: 'Euro',
  },
  {
    value: 'gbp',
    name: 'British Pound',
  },
];

export const topbarDropdownsConfig: TopbarDropdownsConfig[] = [
  {
    label: 'Ship to:',
    options: shipToConfig,
  },
  {
    label: 'Currency:',
    options: currencyConfig,
  },
];
