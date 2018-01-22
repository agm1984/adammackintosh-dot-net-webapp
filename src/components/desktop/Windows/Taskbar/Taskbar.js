import React, { Component } from 'react'
import StartButton from './StartButton'
import StartMenu from './StartMenu'
import { calcHours, calcMinutes, calcAMPM } from './utils'
import './Taskbar.css'

class Taskbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
      currentTime: '',
      mobileMode: false,
    }
    setInterval(() => {
      const time = new Date()
      const hours = time.getHours()
      const minutes = time.getMinutes()
      return this.setState({
        currentTime: `${calcHours(hours)}:${calcMinutes(minutes)}${calcAMPM(hours)}`
      })
    }, 1000)
  }
  /**
   * When the Taskbar Component initially loads, the current time is loaded into the
   * System Tray in the bottom-right corner.
   */
  componentDidMount() {
    const windowWidth = document.getElementById('root').offsetWidth
    if (windowWidth < 620) {
      return this.setState({ mobileMode: true })
    }
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    return this.setState({
      currentTime: `${calcHours(hours)}:${calcMinutes(minutes)}${calcAMPM(hours)}`
    })
  }
  /**
   * The Taskbar is at risk for re-rendering every 1000ms due to clock updates.
   * For this reason, shouldComponentUpdate is used. An additional shallow-equality
   * check must be performed on `openPrograms` because the Taskbar needs to
   * re-render when a new program is opened.
   * @param {Object} nextProps React-calculated next props for the Taskbar
   * @param {Object} nextState React-calculated next state for the Taskbar
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.openPrograms !== nextProps.openPrograms) {
      return true
    }
    if (this.state.isMenuOpen !== nextState.isMenuOpen) {
      return true
    }
    if (this.state.currentTime === nextState.currentTime) {
      return false
    }
    return true
  }
  /**
   * When the Start Button is pressed, the Start Menu will appear and allow
   * the user to select a program to open from a list of options.
   */
  toggleMenu() {
    return this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }
  /**
   * Programs that are currently open are rendered in the Taskbar. Only one program
   * can be active and it will appear in a depressed state. The Taskbar displays
   * programs in the order that they were opened by analyzing `taskbarOrder`
   * and `openPrograms`. The program order in `openPrograms` is unreliable due to
   * its relationship with backgrounding and foregrounding programs.
   */
  renderOpenPrograms() {
    const {
      openPrograms, taskbarOrder, activeProgram, onActiveProgramChange,
    } = this.props
    const taskbarSession = taskbarOrder.reduce((acc, programID) => {
      acc.push(openPrograms.find(p => p.id === programID))
      return acc
    }, [])
    return taskbarSession.map((program) => {
      const mightBeActive = (program.id === activeProgram)
        ? 'program-active'
        : 'program-open'
      return (
        <button
          className={`program ${mightBeActive}`}
          onClick={() => onActiveProgramChange(program.id)}
          key={program.id}
        >
          <div className="program-icon">
            <img
              alt={program.title}
              src={program.icon}
            />
          </div>
          <div>{program.title}</div>
        </button>
      )
    })
  }
  render() {
    const { isMenuOpen, currentTime, mobileMode } = this.state
    const { programs, onOpenProgram, taskbarOrder } = this.props
    let shouldRenderSystemTray = true
    if (mobileMode && taskbarOrder.length > 1) {
      shouldRenderSystemTray = false
    }
    const windowWidth = document.getElementById('root').offsetWidth
    if (windowWidth < 400) {
      shouldRenderSystemTray = false
    }
    return (
      <div id="Taskbar">
        <StartButton
          isActive={isMenuOpen ? 'start_btn start_btn-active' : 'start_btn'}
          onToggle={() => this.toggleMenu()}
        />
        {isMenuOpen && (
          <StartMenu
            programs={programs}
            onOpenProgram={(id) => {
              onOpenProgram(id)
              this.toggleMenu()
            }}
            onCloseMenu={() => this.toggleMenu()}
          />
        )}
        <div
          className={(shouldRenderSystemTray === false)
            ? 'taskbar_progs taskbar_progs-mobile'
            : 'taskbar_progs'}
        >
          {this.renderOpenPrograms()}
        </div>
        {shouldRenderSystemTray && (
          <div className="dock-time">
            <span id="clock">
              {currentTime}
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default Taskbar
