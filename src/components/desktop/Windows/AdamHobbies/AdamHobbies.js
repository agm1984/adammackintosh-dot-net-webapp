import React, { Component } from 'react'
import './AdamHobbies.css'

const optionsPrimary = [
  { label: 'Back', source: require('./icons/hob_back.png') },
  { label: 'Forward', source: require('./icons/hob_forward.png') },
  { label: 'Reload', source: require('./icons/hob_reload.png') },
  { label: 'Home', source: require('./icons/hob_home.png') },
  { label: 'Search', source: require('./icons/hob_search.png') },
  { label: 'Netscape', source: require('./icons/hob_netscape.png') },
  { label: 'Print', source: require('./icons/hob_print.png') },
  { label: 'Security', source: require('./icons/hob_security.png') },
  { label: 'Shop', source: require('./icons/hob_shop.png') },
  { label: 'Stop', source: require('./icons/hob_stop.png') },
]

class AdamHobbies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldTooltipDisplay: false,
    }
  }
  /**
   * For arbitrary reasons, a tooltip exists for the Adam Navigator Icon.
   */
  toggleBonusTooltip() {
    this.setState({ shouldTooltipDisplay: !this.state.shouldTooltipDisplay })
  }
  render() {
    return (
      <div id="ah_wrapper">
        <div className="ah_menu">
          <div className="ah_menu-button"><u>F</u>ile</div>
          <div className="ah_menu-button"><u>E</u>dit</div>
          <div className="ah_menu-button"><u>V</u>iew</div>
          <div className="ah_menu-button"><u>I</u>nsert</div>
          <div className="ah_menu-button">F<u>o</u>rmat</div>
          <div className="ah_menu-button"><u>T</u>ools</div>
          <div className="ah_menu-button">T<u>a</u>ble</div>
          <div className="ah_menu-button"><u>W</u>indow</div>
          <div className="ah_menu-button"><u>H</u>elp</div>
        </div>
        <div id="ah_menuMain-wrapper">
          <img
            src={require('./icons/hob_lineBig.png')}
            alt=""
          />
          <div id="ah_menuMain">
            {optionsPrimary.map(item => (
              <div
                className="ah_menu-largeButton"
                key={item.label}
              >
                <img
                  src={item.source}
                  alt=""
                />
                {item.label}
              </div>
            ))}
          </div>
          <div id="ah_menu-endLogo">
            <img
              className="ah_menu-logoIcon"
              src={require('./icons/hob_logo.png')}
              alt=""
              onMouseOver={() => this.toggleBonusTooltip()}
              onMouseOut={() => this.toggleBonusTooltip()}
              onFocus={() => this.toggleBonusTooltip()}
              onBlur={() => this.toggleBonusTooltip()}
            />
          </div>
        </div>
        <div
          className={this.state.shouldTooltipDisplay === true
            ? 'bonus_tooltip-on'
            : 'bonus_tooltip-off'}
        >
          Adam Navigator
        </div>
        <div id="ah_content">
          <img
            id="ah_banner"
            src={require('./images/adam.gif')}
            alt="Adam's Website Banner"
          />
          <hr width="75%" />
          <div className="ah_section">
            <div className="ah_section-wrapper">
              <div className="ah_section-heading">
                <img
                  className="ah_torch"
                  src={require('./images/retroTorch.gif')}
                  alt="Retro Torch"
                />
                BIO
              </div>
              <div className="ah_section-photoRight">
                <img
                  className="ah_adamPhoto"
                  src={require('./images/adamPhoto.jpg')}
                  alt="Adam at Christmas"
                />
              </div>
              <p>
                Hello, my name is Adam Mackintosh.
                Welcome to my website.
                I was born on Vancouver Island and have lived here my whole life.
                I have been interested in computers since a young age.
                I am very passionate about science and pure logic.
                I love physics, economics, philosophy, and marketing.
                I like emergent patterns and the potential to create models from data.
                I also like mathematics, especially graph theory and fractals.
                I would consider myself a curious explorer, or an information collector.
              </p>
              <div className="ah_section-heading cleared">
                <img
                  className="ah_torch"
                  src={require('./images/retroTorch.gif')}
                  alt="Retro Torch"
                />
                EARLY YEARS
              </div>
              <div className="ah_section-photoLeft">
                <img
                  className="ah_adamPhoto"
                  src={require('./images/adamEarlyYears.png')}
                  alt="Windows 98 Pixelated Graphic"
                />
              </div>
              <p>
                My first computer was a Pentium 100 (100 MHz) with 24 MB of RAM and a 200 MB Hard Disk.
                Before that, I learned how to use a computer at my friend's house where he had a Windows 95 computer but no mouse.
                I would consider myself a proficient keyboard user and hotkey utilizer.
                I can now burst up over 100 words per minute and sustain over 60.
                This comes in very handy while writing code.
                Back in secondary school, my friend and I used to run our own IRC networks on unix-based machines in order to gain moderator powers.
                This was pre-2000s. This was when I was first exposed to Linux and FreeBSD.
                Such upbringing has made me very conscious of computer internals and component-based architectures.
                Around this time, I experimented with event-based scripting in IRC chat rooms and also with building simple webpages with PHP and MySQL.
                My love for computers and programming has continued to grow since then.
              </p>
              <div className="ah_section-heading cleared">
                <img
                  className="ah_torch"
                  src={require('./images/retroTorch.gif')}
                  alt="Retro Torch"
                />
                HOBBIES
              </div>
              <div className="ah_section-photoLeft">
                <img
                  className="ah_adamPhoto"
                  src={require('./images/adamSupraFullView.jpg')}
                  alt="Toyota Supra Side-view"
                />
              </div>
              <div id="ah_hobbyList">
                <p className="microsoft marquee"><span>Top 3</span></p>
                <ul id="top3">
                  <li className="top3-bullet">JavaScript</li>
                  <li className="top3-bullet">Turbocharged Cars</li>
                  <li className="top3-bullet">Fitness & Nutrition</li>
                </ul>
              </div>
              <div className="ah_section-photoRight cleared">
                <img
                  className="ah_adamPhoto"
                  src={require('./images/adamSupraEngineView.jpg')}
                  alt="Supra Engine Bay"
                />
              </div>
              <p>
                These days, I am most passionate about JavaScript.
                I believe a person could use it for almost anything, except maybe heavy mathematical work.
                When I am not developing software for monetary purposes, I am probably learning and developing software in my spare time.
                When I am not doing that, I could be building my Toyota Supra or being involved with community car enthusiast events.
                The Supra makes 700 horsepower to the rear wheels. I have been building it for 9 years.
                I have also been going to the gym a few times a week for over 10 years, so I am a great fan of fitness and nutrition.
                It makes me feel great every day, so it is a personal requirement for me.
                The main other things to note about me are that I am fairly fashion-forward, and I own a lot of shoes.
                I love fine detail-work, so I like how clothing allows me to graphically design myself.
                This has been a superficial analysis of me, Adam Mackintosh.
              </p>
              <div id="contactInfo-wrapper">
                <div id="contactInfo">
                  <img
                    className="ah_torch-contact"
                    src={require('./images/retroTorch.gif')}
                    alt="Retro Torch"
                  />
                  <div className="contactInfo-heading">CONTACT INFO</div>
                  <div className="contactInfo-row">
                    <div className="contactInfo-label">Phone:</div>
                    <div className="contactInfo-value">(250) 734-3454</div>
                  </div>
                  <div className="contactInfo-row">
                    <div className="contactInfo-label">Email:</div>
                    <div className="contactInfo-value">adam@adammackintosh.net</div>
                  </div>
                  <div className="contactInfo-row">
                    <div className="contactInfo-label">Fax:</div>
                    <div className="contactInfo-value">Deprecated</div>
                  </div>
                </div>
              </div>
              <div id="counter">
                <img
                  src={require('./images/counter.gif')}
                  alt="Faux Page Counter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdamHobbies
