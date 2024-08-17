const Select = ({
  labelInput,
  id,
  cssInput,
  titleSelect,
  options,
  selectWidth,
  selectHeight,
}) => {
  const defaultCSS =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
  return (
    <div
      style={{
        width: selectWidth,
        height: selectHeight,
      }}
    >
      {/* <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label> */}

      <select id={id} className={`${defaultCSS} ${cssInput}`}>
        <option value={'none'}>{titleSelect}</option>
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.title}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
