import './index.css'

const TabItem = props => {
  const {tabsItemDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabsItemDetails

  const onChangeTabItem = () => {
    clickTabItem(tabId)
  }

  const changeBtnStyle = isActive ? 'btn active-btn' : 'btn'

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={changeBtnStyle}
        onClick={onChangeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
