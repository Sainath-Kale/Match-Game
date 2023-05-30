import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTab(tabId)
  }
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tabItem-container">
      <button type="button" className={tabBtnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
