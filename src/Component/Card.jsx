import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = ({ title, description, liveLink, codeLink, imageUrl, isDarkMode }) => {
  return (
    <StyledWrapper isDarkMode={isDarkMode}>
      <div className="card">
        {/* Image container */}
        <div className="card__img">
          <img src={imageUrl} alt={title} className="card__image" />
        </div>
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
          <div className="card__links">
            <a className="link" href={liveLink} target="_blank" rel="noopener noreferrer">
              Preview
            </a>
            <a className="link" href={codeLink} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --font-color: ${(props) => (props.isDarkMode ? '#f0f0f0' : '#222')};
    --bg-color: ${(props) => (props.isDarkMode ? '#333' : '#ffffff')};
    --shadow-light: ${(props) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
    --shadow-dark: ${(props) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)')};
    --link-color: ${(props) => (props.isDarkMode ? '#4da6ff' : '#0066cc')};
    --link-hover-bg: ${(props) => (props.isDarkMode ? '#4da6ff' : '#0066cc')};
    --link-hover-color: ${(props) => (props.isDarkMode ? '#000' : '#fff')};

    width: 320px;
    min-height: 450px;
    border-radius: 20px;
    background: var(--bg-color);
    box-shadow: 0px 8px 15px var(--shadow-light);
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0px 15px 30px var(--shadow-dark);
  }

  /* Image container */
  .card__img {
    width: 100%;
    height: 180px;
    overflow: hidden;
    position: relative;
    border-radius: 20px 20px 0 0;
    background-color: ${(props) => (props.isDarkMode ? '#444' : '#f0f0f0')};
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
  }

  .card__title {
    font-size: 20px;
    font-weight: bold;
    color: var(--font-color);
    text-align: center;
  }

  .card__description {
    color: ${(props) => (props.isDarkMode ? '#ccc' : '#555')};
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
  }

  .card__links {
    margin-top: auto;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .card__links .link {
    color: var(--link-color);
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 5px;
    background: ${(props) => (props.isDarkMode ? '#555' : '#e0e0e0')};
    transition: background-color 0.2s, color 0.2s;
  }

  .card__links .link:hover {
    background-color: var(--link-hover-bg);
    color: var(--link-hover-color);
  }

  @media (max-width: 768px) {
    .card {
      width: 280px;
      min-height: 420px;
    }

    .card__title {
      font-size: 18px;
    }

    .card__description {
      font-size: 14px;
    }

    .card__links .link {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 100%;
    }
  }
`;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Card;
