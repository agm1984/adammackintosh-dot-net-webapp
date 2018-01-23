import React, { Component } from 'react'
import getConciseMonth from './utils'
import './AdamResume.css'

const optionsPrimary = [
  { source: require('./icons/res_newDocument.png') },
  { source: require('./icons/res_openDocument.png') },
  { source: require('./icons/res_save.png') },
  { source: require('./icons/res_email.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_print.png') },
  { source: require('./icons/res_find.png') },
  { source: require('./icons/res_spellcheck.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_cut.png') },
  { source: require('./icons/res_copy.png') },
  { source: require('./icons/res_paste.png') },
  { source: require('./icons/res_formatPainter.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_undo.png') },
  { source: require('./icons/res_redo.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_insertLink.png') },
  { source: require('./icons/res_insertTable.png') },
  { source: require('./icons/res_importTable.png') },
  { source: require('./icons/res_importFromExcel.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_lineBreaks.png') },
  { source: require('./icons/res_selector.png') },
  { source: require('./icons/res_help.png') },
]

const optionsSecondary = [
  { source: require('./icons/res_fontWeight.png') },
  { source: require('./icons/res_fontStyle.png') },
  { source: require('./icons/res_fontSize.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_bold.png') },
  { source: require('./icons/res_italic.png') },
  { source: require('./icons/res_underline.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_justifyLeft.png') },
  { source: require('./icons/res_justifyCenter.png') },
  { source: require('./icons/res_justifyRight.png') },
  { source: require('./icons/res_justifyEven.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_addNumberedList.png') },
  { source: require('./icons/res_addBulletList.png') },
  { source: require('./icons/res_indentLeft.png') },
  { source: require('./icons/res_indentRight.png') },
  { source: require('./icons/res_divider.png') },
  { source: require('./icons/res_color.png') },
]

/**
 * DOM Markup has been intentionally left un-optimized until functionality
 * crystallizes further. The abstraction from componentizing each section provides
 * limited benefit to this Resume View as it is not re-used elsewhere.
 * However, there is some duplication that could be minimized.
 */
class AdamResume extends Component {
  constructor(props) {
    super(props)
    const today = new Date()
    this.date = `${getConciseMonth(today.getMonth())} ${today.getDate()}`
  }

  render() {
    return (
      <div id="ar_wrapper">
        <div className="ar_menu">
          <img
            className="ar_menu-icon"
            src={require('./icons/res_line.png')}
            alt=""
          />
          <div className="ar_menu-button"><u>F</u>ile</div>
          <div className="ar_menu-button"><u>E</u>dit</div>
          <div className="ar_menu-button"><u>V</u>iew</div>
          <div className="ar_menu-button"><u>I</u>nsert</div>
          <div className="ar_menu-button">F<u>o</u>rmat</div>
          <div className="ar_menu-button"><u>T</u>ools</div>
          <div className="ar_menu-button">T<u>a</u>ble</div>
          <div className="ar_menu-button"><u>W</u>indow</div>
          <div className="ar_menu-button"><u>H</u>elp</div>
        </div>
        <div className="ar_menu">
          <img
            className="ar_menu-icon"
            src={require('./icons/res_line.png')}
            alt=""
          />
          {optionsPrimary.map((icon, indexKey) => (
            <img
              className="ar_menu-icon"
              src={icon.source}
              alt=""
              key={indexKey}
            />
          ))}
        </div>
        <div className="ar_menu">
          <img
            className="ar_menu-icon"
            src={require('./icons/res_line.png')}
            alt=""
          />
          {optionsSecondary.map((icon, indexKey) => (
            <img
              className="ar_menu-icon"
              src={icon.source}
              alt=""
              key={indexKey}
            />
          ))}
        </div>
        <div id="ar_content">
          <div id="ar_content-wrapper">
            <div id="ar_content-title">
              RESUME
            </div>
            <div id="topRightAccent">
              <a
                href="http://adammackintosh.net/Adam-Resume-Jan-2018.docx"
                download="Adam-Mackintosh-Resume-Jan-2018.docx"
              >
                Download
              </a>
            </div>
            <div id="ar_content_personal">
              <div>ADAM MACKINTOSH</div>
              <div>6131 Parkway Dr</div>
              <div>Nanaimo, BC V9V 1E2</div>
              <div style={{ paddingTop: '10px' }}>(250) 734-3454</div>
            </div>
            <div id="ar_content_education">
              EDUCATION
              <div className="ar_content_education-group">
                <div className="ar_content_education-courses">
                  <div>BSc. Major in Physics</div>
                  <div style={{ fontSize: '13px' }}>In-progress / On-hold</div>
                </div>
                <div className="ar_content_education-schools">
                  <div>
                    Vancouver Island University
                  </div>
                </div>
                <div className="ar_content_education-locations">
                  Nanaimo, BC
                </div>
              </div>
              <div className="ar_content_education-group">
                <div className="ar_content_education-courses">
                  <div>Certificate and Tickets</div>
                  <div style={{ fontSize: '13px' }}>Completed: 2008</div>
                </div>
                <div className="ar_content_education-schools">
                  <div>
                    Waterworks Technology School
                  </div>
                </div>
                <div className="ar_content_education-locations">
                  Nanaimo, BC
                </div>
              </div>
            </div>
            <div id="ar_content_experience">
              EXPERIENCE
              <div className="ar_content_experience-group">
                <div className="ar_content_experience-place">
                  Enthusiasts First
                </div>
                <div className="ar_content_experience-whenWhere">
                  <div className="ar_pos-city">12/2016 - 01/2018</div>
                  <div className="ar_pos-city">Ladysmith, BC</div>
                </div>
                <div className="ar_content_experience-details">
                  <div className="ar_pos-jobPosition">Partner & Software Engineer</div>
                  <ul className="ar_pos-list">
                    <li className="ar_pos-bullet">helped design and implement a node.js polyglot API</li>
                    <li className="ar_pos-bullet">built a node.js graph-based cryptocurrency prototype</li>
                    <li className="ar_pos-bullet">built a React CRUD business management platform</li>
                    <li className="ar_pos-bullet">built a React Native customer signup app</li>
                    <li className="ar_pos-bullet">worked 12~ hours a day 7 days a week for over a year</li>
                  </ul>
                </div>
              </div>
              <div className="ar_content_experience-group">
                <div className="ar_content_experience-place">
                  Verified Network
                </div>
                <div className="ar_content_experience-whenWhere">
                  <div className="ar_pos-city">04/2013 - 08/2016</div>
                  <div className="ar_pos-city">Nanaimo, BC</div>
                </div>
                <div className="ar_content_experience-details">
                  <div className="ar_pos-jobPosition">Executive Technical Assistant</div>
                  <ul className="ar_pos-list">
                    <li className="ar_pos-bullet">managed the iOS, Android, and Web QA process</li>
                    <li className="ar_pos-bullet">designed, wrote, and maintained Functional Specification Documents</li>
                    <li className="ar_pos-bullet">proof-read marketing and investor materials</li>
                    <li className="ar_pos-bullet">designed UX/UI with graphic designers and optimized existing features</li>
                    <li className="ar_pos-bullet">acted as central point of communication between product owner and development team for sprint planning</li>
                  </ul>
                </div>
              </div>
              <div className="ar_content_experience-group">
                <div className="ar_content_experience-place">
                  Watercrest Media
                </div>
                <div className="ar_content_experience-whenWhere">
                  <div className="ar_pos-city">06/2008 - 09/2012</div>
                  <div className="ar_pos-city">Nanaimo, BC</div>
                </div>
                <div className="ar_content_experience-details">
                  <div className="ar_pos-jobPosition">Affiliate Marketing Manager</div>
                  <ul className="ar_pos-list">
                    <li className="ar_pos-bullet">orchestrated email marketing campaigns</li>
                    <li className="ar_pos-bullet">designed and developed promotional websites</li>
                    <li className="ar_pos-bullet">designed and developed a platform for automating bulk email sending</li>
                  </ul>
                </div>
              </div>
              <div className="ar_content_experience-group">
                <div className="ar_content_experience-place">
                  NCO Group
                </div>
                <div className="ar_content_experience-whenWhere">
                  <div className="ar_pos-city">08/2003 - 10/2004</div>
                  <div className="ar_pos-city">Nanaimo, BC</div>
                </div>
                <div className="ar_content_experience-details">
                  <div className="ar_pos-jobPosition">Technical Support</div>
                  <ul className="ar_pos-list">
                    <li className="ar_pos-bullet">provided technical support service to Microsoft MSN-Dialup customers</li>
                    <li className="ar_pos-bullet">maintained team-leading call resolution rate</li>
                  </ul>
                </div>
              </div>
              <div className="ar_content_experience-group">
                <div className="ar_content_experience-place">
                  Stop Management
                </div>
                <div className="ar_content_experience-whenWhere">
                  <div className="ar_pos-city">09/2002 - 08/2003</div>
                  <div className="ar_pos-city">Lantzville, BC</div>
                </div>
                <div className="ar_content_experience-details">
                  <div className="ar_pos-jobPosition">Telephone Sales Representative</div>
                  <ul className="ar_pos-list">
                    <li className="ar_pos-bullet">generated ADT Home Security System installation leads</li>
                    <li className="ar_pos-bullet">designed and developed a computer system for tracking leads and analyzing daily metrics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="ar_content_references">
              REFERENCES
              <div className="ar_content_references-group">
                <div className="ar_content_references-name">
                  Gerry Patenaude
                </div>
                <div className="ar_content_references-position">
                  CEO, Omniart Creative
                </div>
                <div className="ar_content_references-contactInfo">
                  (250) 619-2609
                </div>
              </div>
              <div className="ar_content_references-group">
                <div className="ar_content_references-name">
                  Jim Magner
                </div>
                <div className="ar_content_references-position">
                  President & COO, Eturi Corp
                </div>
                <div className="ar_content_references-contactInfo">
                  (702) 241-5938
                </div>
              </div>
              <div id="ar_content_references-text">more available upon request</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdamResume
