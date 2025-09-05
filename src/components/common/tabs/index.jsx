import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './tabs.module.scss'
import classNames from 'classnames'

/**
 * Basic reusable Tabs component
 *
 * @example
 * // Example usage:
 * const tabData = [
 *   { label: "Tab 1", content: <div>Content 1</div> },
 *   { label: "Tab 2", content: <div>Content 2</div> },
 * ];
 *
 * <Tabs tabs={tabData} defaultIndex={0} />
 *
 * @param {Object} props
 * @param {Array<{ label: string, content: React.ReactNode }>} props.tabs
 * @param {number} [props.defaultIndex]
 */
const Tabs = ({ tabs, defaultIndex = 0 }) => {
    Tabs.propTypes = {
        tabs: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                content: PropTypes.node.isRequired
            })
        ).isRequired,
        defaultIndex: PropTypes.number
    }
    const [activeIndex, setActiveIndex] = useState(defaultIndex)

    return (
        <div>
            <div style={{ display: 'flex', gap: 8 }}>
                {tabs.map((tab, idx) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveIndex(idx)}
                        className={classNames(styles.button, { active: activeIndex === idx })}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div style={{ marginTop: 16 }}>{tabs[activeIndex] && tabs[activeIndex].content}</div>
        </div>
    )
}

export default Tabs
