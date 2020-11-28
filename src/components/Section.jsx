import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  console.log(children);
  return (
    <div>
      {title && (
        <h2>
          {title}
          {children}
        </h2>
      )}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
};
