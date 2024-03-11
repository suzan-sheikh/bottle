import PropTypes from 'prop-types'

import './Bottle.css';
const Bottle = ({bottle, handleAddToCart}) => {

  const {name, price,img} = bottle;

  return (
    <div className="bottole">
      <h3>bottle: {name}</h3>
      <img src={img} alt=""/>
      <p>price: ${price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};


Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;