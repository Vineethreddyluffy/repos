import './index.css'

const LanguageFilterItem = props => {
  const {item, onChangeTab, active} = props
  const {language, id} = item
  const changeTab = () => {
    onChangeTab(id)
  }
  const result = active ? 'button1' : 'button'
  return (
    <li>
      <button type="button" className={result} onClick={changeTab}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
