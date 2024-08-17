import Select from '../Select/Select'
import { DatePicker } from 'antd'
import './quickBook.scss'
const QuickBook = () => {
  function toggleSelection(selected) {
    var buttons = document.querySelectorAll('#toggle-component .toggle-btn')
    buttons.forEach((btn) => {
      btn.classList.remove('active')
    })
    document
      .querySelector('#toggle-component .toggle-btn.' + selected)
      .classList.add('active')
  }

  const optionMoive = [
    {
      title: 'Ma cà rồng ',
      value: '',
    },
    {
      title: 'Tôn Ngộ Không ',
      value: '',
    },
    {
      title: 'Vui lên ',
      value: '',
    },
  ]
  const optionCinema = [
    {
      title: 'CGV',
      value: '',
    },
    {
      title: 'BHD',
      value: '',
    },
    {
      title: 'Stars',
      value: '',
    },
  ]
  const optionTiming = [
    {
      title: '6h',
      value: '',
    },
    {
      title: '6h',
      value: '',
    },
    {
      title: '7h',
      value: '',
    },
  ]
  return (
    <div id="quickBook">
      {/* item quick book */}
      <div id="quickBookItem" className="grid grid-cols-4">
        {/* Title */}
        <div>
          <h2>Quick Book</h2>
        </div>
        {/* Toggle button movie and cinema */}
        <div className="element">
          <div id="toggle-component">
            <button
              className="toggle-btn movie px-3 py-2 rounded active"
              onClick={() => {
                toggleSelection('movie')
              }}
            >
              Movie
            </button>
            <button
              className="toggle-btn px-3 py-2 rounded cinema"
              onClick={() => {
                toggleSelection('cinema')
              }}
            >
              Cinema
            </button>
          </div>
        </div>

        {/* Movie */}
        <div className="element">
          <Select
            options={optionMoive}
            selectHeight="100%"
            selectWidth="150px"
            titleSelect="Select Movie"
          />
        </div>
        {/* Date */}
        <div className="element" style={{ height: '42px', width: '150px' }}>
          <DatePicker />
        </div>

        {/* Cinema */}
        <div className="element">
          <Select
            options={optionCinema}
            selectHeight="100%"
            selectWidth="150px"
            titleSelect="Select Cinema"
          />
        </div>

        {/* Time */}
        <div className="element">
          <Select
            options={optionTiming}
            selectHeight="100%"
            selectWidth="150px"
            titleSelect="Select Timing"
          />
        </div>

        {/* button submit for quick book */}
        <div>
          <button className="bg-primary px-3 py-2 rounded font-bold">
            Book
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuickBook
