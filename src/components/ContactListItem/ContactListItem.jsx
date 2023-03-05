import PropTypes from 'prop-types';
import { GoPerson } from 'react-icons/go';
import { Item, ContactText, ButtonContact } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => (
  <Item>
    <GoPerson />
    <ContactText>
      {name}: {number}
    </ContactText>
    <ButtonContact onClick={() => onDeleteContact(id)}>Delete</ButtonContact>
  </Item>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
