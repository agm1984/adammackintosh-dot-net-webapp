import React, { Component } from 'react'
import Linux from './Linux/Linux'
import MackOS from './MackOS/MackOS'
import Windows from './Windows/Desktop'
import './Workstation.css'

class Workstation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workstation: 'WINDOWS',
    }
  }
  /**
   * Currently, only Windows is supported, but in the future, MackOS and Linux
   * will be supported, and switching between them will be available to the user.
   *
   * 1. The MackOS workstation is intended to illustrate Adam's graphics-related skills,
   * and it is where all high-quality graphics will be placed. It is an environment
   * suited for demonstrating contemporary designs and full-color presentations.
   *
   * 2. The Linux workstation is intended to illustrate Adam's machine-interface skills
   * such as Dev Ops, machine learning, and aggregate-level data visualization.
   *
   * The goal with this type of portfolio is to demonstrate the full array of Adam's
   * skills by providing 3 environments that are each ideally suited for different
   * aspects of software development.
   */
  render() {
    switch (this.state.workstation) {
      case 'LINUX': {
        return <Linux />
      }
      case 'MACKOS': {
        return <MackOS />
      }
      default:
      case 'WINDOWS': {
        return <Windows />
      }
    }
  }
}

export default Workstation
