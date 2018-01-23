import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Taskbar.css'

class StartMenu extends Component {
  constructor(props) {
    super(props)
    this.handleNextClick = this.handleNextClick.bind(this)
  }

  /**
   * When the Start Menu is mounted (ie: displayed), an event listener should
   * be added to detect if the user is attempting to click outside its boundaries
   * in order to close/dismiss it.
   */
  componentDidMount() {
    return document.addEventListener('click', this.handleNextClick, true)
  }

  /**
   * For memory management reasons, the event listener is removed when
   * the Start Menu unmounts.
   */
  componentWillUnmount() {
    return document.removeEventListener('click', this.handleNextClick, true)
  }

  /**
   * This function runs every time the user clicks inside or outside the
   * Start Menu. The menu should be closed if the click is registered outside.
   * @param {Synthetic Event} event React-controlled Synthetic Event
   */
  handleNextClick(event) {
    const domNode = ReactDOM.findDOMNode(this) // eslint-disable-line
    if (!domNode || !domNode.contains(event.target)) {
      return this.props.onCloseMenu()
    }
    return null
  }

  render() {
    const { programs, onOpenProgram } = this.props
    const windowsUpdates = {
      icon: require('./icons/start-windowsUpdates.png'),
      label: 'Windows Update',
      altText: 'Windows Updates',
      isDisabled: true,
    }
    const menu = {
      favourites: {
        icon: require('./icons/start-favourites.png'),
        label: 'Favourites',
        altText: 'Favourites',
        isDisabled: true,
      },
      documents: {
        icon: require('./icons/start-documents.png'),
        label: 'Documents',
        altText: 'Documents',
        isDisabled: true,
      },
      settings: {
        icon: require('./icons/start-settings.png'),
        label: 'Settings',
        altText: 'Settings',
        isDisabled: true,
      },
      find: {
        icon: require('./icons/start-find.png'),
        label: 'Find',
        altText: 'Find',
        isDisabled: true,
      },
      help: {
        icon: require('./icons/start-help.png'),
        label: 'Help',
        altText: 'Help',
        isDisabled: true,
      },
      run: {
        icon: require('./icons/start-run.png'),
        label: 'Run',
        altText: 'Run',
        isDisabled: true,
        hasDivider: true,
      },
      admin: {
        icon: require('./icons/start-admin.png'),
        label: 'Admin Area',
        altText: 'Admin Area',
        isDisabled: false,
      },
      shutDown: {
        icon: require('./icons/start-shutDown.png'),
        label: 'Shut Down...',
        altText: 'Shut Down',
        isDisabled: true,
      },
    }
    return (
      <div className="start-menu">
        <div className="title-container">
          <div className="title">Mackintosh</div>
        </div>
        <ul>
          <li
            className={windowsUpdates.isDisabled
              ? 'start_menu-rowDisabled'
              : 'start_menu-row'}
          >
            <img
              className={windowsUpdates.isDisabled
                ? 'start_menu-iconDisabled'
                : 'start_menu-icon'}
              src={windowsUpdates.icon}
              alt={windowsUpdates.altText}
            />
            {windowsUpdates.label}
          </li>
          <hr />
          {programs.map(program => (
            <li
              className="start_menu-row"
              key={program.id}
            >
              <img
                className="start_menu-icon"
                src={program.icon}
                alt={program.title}
              />
              <button onClick={() => onOpenProgram(program.id)}>
                {program.title}
              </button>
            </li>
          ))}
          {Object.keys(menu).map((item) => {
            if (menu[item].hasDivider === true) {
              return [
                <li
                  className={menu[item].isDisabled
                    ? 'start_menu-rowDisabled'
                    : 'start_menu-row'}
                  key={`${item}_row`}
                >
                  <img
                    className={menu[item].isDisabled
                      ? 'start_menu-iconDisabled'
                      : 'start_menu-icon'}
                    src={menu[item].icon}
                    alt={menu[item].altText}
                  />
                  {menu[item].label}
                </li>,
                <hr key={`${item}_divider`} />,
              ]
            }
            return (
              <NavLink
                to="/admin"
                style={{ textDecoration: 'none' }}
                key={`${item}_row`}
              >
                <li
                  className={menu[item].isDisabled
                    ? 'start_menu-rowDisabled'
                    : 'start_menu-row'}
                >
                  <img
                    className={menu[item].isDisabled
                      ? 'start_menu-iconDisabled'
                      : 'start_menu-icon'}
                    src={menu[item].icon}
                    alt={menu[item].altText}
                  />
                  {menu[item].label}
                </li>
              </NavLink>
            )
          })}
        </ul>
      </div>
    )
  }
}

StartMenu.propTypes = {
  onCloseMenu: PropTypes.func.isRequired,
  programs: PropTypes.arrayOf(PropTypes.any).isRequired,
  onOpenProgram: PropTypes.func.isRequired,
}

export default StartMenu
