import propTypes from 'prop-types';

export const messageShape = propTypes.shape({
  id: propTypes.number.isRequired,
  username: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
});
