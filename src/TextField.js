import React from 'react'

const TextField = ({ name, onChange, onBlur, error, label }) => (
  <div>
    <label htmlFor="">
      {label}
      <input type="text" name={name} onChange={onChange} onBlur={onBlur} />
      {error && <div>{error}</div>}
    </label>
  </div>
)

export default TextField