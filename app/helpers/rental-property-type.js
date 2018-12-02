import { helper } from '@ember/component/helper';

const communityTypes = {
  condo: true,
  townhouse: true,
  apartment: true,
};

// Using array destructuring argument for category, an array is passed in.
export function rentalPropertyType([category]) {
  return `${(communityTypes[category.toLowerCase()] ? 'Community' : 'Standalone')} - ${category}`;
}

export default helper(rentalPropertyType);
