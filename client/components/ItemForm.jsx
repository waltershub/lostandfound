import React from 'react';

class ItemForm extends React.Component {
  render() {
    return (
      <div>

        <h2>Item Form</h2>

        <form>
          <p>Item Name:</p>
          <input type="text" name="name" />

          <p>Location:</p>
          <input type="text" name="location" />

          <p>Brand:</p>
          <input type="text" name="brand" />

          <p>Color:</p>
          <input type="text" name="color" />

          <p>Condition:</p>
          <input type="text" name="condition" />

          <p>Size:</p>
          <input type="text" name="size" />

          <button type="submit">Submit</button>
        </form>

        <button>Cancel</button>

      </div>
    );
  }
}

ItemForm.propTypes = {
  type: React.PropTypes.string.isRequired,
};

export default ItemForm;
