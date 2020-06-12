import PropTypes from 'prop-types';
export const TodoType = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
};
