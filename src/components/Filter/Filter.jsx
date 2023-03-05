import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => (
  <Label>
    Find contacts by name
    <Input type="text" name="filter" value={value} onChange={onChangeFilter} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
