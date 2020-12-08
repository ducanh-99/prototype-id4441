import React, { Component } from 'react';
import 'src/scss/_custom.scss';
import { CCard, CCol, CRow } from '@coreui/react';
class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setPress: {
                'q': { backgroundColor: "black" },
                'w': { backgroundColor: "black" },
                'e': { backgroundColor: "black" },
                'r': { backgroundColor: "black" },
                't': { backgroundColor: "black" },
                'u': { backgroundColor: "black" },
                'i': { backgroundColor: "black" },
                'o': { backgroundColor: "black" },
                'p': { backgroundColor: "black" },
                '[': { backgroundColor: "black" },
                'a': { backgroundColor: "black" },
                's': { backgroundColor: "black" },
                'd': { backgroundColor: "black" },
                'f': { backgroundColor: "black" },
                'g': { backgroundColor: "black" },
                'j': { backgroundColor: "black" },
                'k': { backgroundColor: "black" },
                'l': { backgroundColor: "black" },
                ';': { backgroundColor: "black" },
                "'": { backgroundColor: "black" },
                'c': { backgroundColor: "black" },
                'v': { backgroundColor: "black" },
                'n': { backgroundColor: "black" },
                'm': { backgroundColor: "black" },

            }
        };
    }
    handlePressKey = (event) => {
        let setPress = this.state.setPress
        switch (event.which) {
            case 81:
                setPress['q'] = { backgroundColor: "red" }
                break
            case 87:
                setPress['w'] = { backgroundColor: "red" }
                break
            case 69:
                setPress['e'] = { backgroundColor: "red" }
                break
            case 82:
                setPress['r'] = { backgroundColor: "red" }
                break
            case 84:
                setPress['t'] = { backgroundColor: "red" }
                break
            case 85:
                setPress['u'] = { backgroundColor: "red" }
                break
            case 73:
                setPress['i'] = { backgroundColor: "red" }
                break
            case 79:
                setPress['o'] = { backgroundColor: "red" }
                break
            case 80:
                setPress['p'] = { backgroundColor: "red" }
                break
            case 219:
                setPress['['] = { backgroundColor: "red" }
                break
            case 65:
                setPress['a'] = { backgroundColor: "red" }
                break
            case 83:
                setPress['s'] = { backgroundColor: "red" }
                break
            case 68:
                setPress['d'] = { backgroundColor: "red" }
                break
            case 70:
                setPress['f'] = { backgroundColor: "red" }
                break
            case 71:
                setPress['g'] = { backgroundColor: "red" }
                break
            case 74:
                setPress['j'] = { backgroundColor: "red" }
                break
            case 75:
                setPress['k'] = { backgroundColor: "red" }
                break
            case 76:
                setPress['l'] = { backgroundColor: "red" }
                break
            case 186:
                setPress[';'] = { backgroundColor: "red" }
                break
            case 222:
                setPress["'"] = { backgroundColor: "red" }
                break
            case 67:
                setPress['c'] = { backgroundColor: "red" }
                break
            case 86:
                setPress['v'] = { backgroundColor: "red" }
                break
            case 78:
                setPress['n'] = { backgroundColor: "red" }
                break
            case 77:
                setPress["m"] = { backgroundColor: "red" }
                break
        }
        this.setState({
            setPress
        })
    }
    handleUnpressKey = (event) => {
        let setPress = this.state.setPress
        switch (event.which) {
            case 81:
                setPress['q'] = { backgroundColor: "black" }
                break
            case 87:
                setPress['w'] = { backgroundColor: "black" }
                break
            case 69:
                setPress['e'] = { backgroundColor: "black" }
                break
            case 82:
                setPress['r'] = { backgroundColor: "black" }
                break
            case 84:
                setPress['t'] = { backgroundColor: "black" }
                break
            case 85:
                setPress['u'] = { backgroundColor: "black" }
                break
            case 73:
                setPress['i'] = { backgroundColor: "black" }
                break
            case 79:
                setPress['o'] = { backgroundColor: "black" }
                break
            case 80:
                setPress['p'] = { backgroundColor: "black" }
                break
            case 219:
                setPress['['] = { backgroundColor: "black" }
                break
            case 65:
                setPress['a'] = { backgroundColor: "black" }
                break
            case 83:
                setPress['s'] = { backgroundColor: "black" }
                break
            case 68:
                setPress['d'] = { backgroundColor: "black" }
                break
            case 70:
                setPress['f'] = { backgroundColor: "black" }
                break
            case 71:
                setPress['g'] = { backgroundColor: "black" }
                break
            case 74:
                setPress['j'] = { backgroundColor: "black" }
                break
            case 75:
                setPress['k'] = { backgroundColor: "black" }
                break
            case 76:
                setPress['l'] = { backgroundColor: "black" }
                break
            case 186:
                setPress[';'] = { backgroundColor: "black" }
                break
            case 222:
                setPress["'"] = { backgroundColor: "black" }
                break
            case 67:
                setPress['c'] = { backgroundColor: "black" }
                break
            case 86:
                setPress['v'] = { backgroundColor: "black" }
                break
            case 78:
                setPress['n'] = { backgroundColor: "black" }
                break
            case 77:
                setPress["m"] = { backgroundColor: "black" }
                break
        }
        this.setState({
            setPress
        })
    }
    render() {
        return (
            <div>
                <CRow>
                    <CCol>
                        <CCard>
                            <input type='text' onKeyDown={this.handlePressKey} onKeyUp={this.handleUnpressKey} />
                        </CCard>
                    </CCol>
                    <CCol>
                        <CCard>
                            <div class="stenoNumberBar">
                                <div class="stenoKey numberBar code48 code49 code50 code51 code52 code53 code54 code55 code56 code57" id="stenoKeyNumberBar" ></div>
                            </div>
                            <div class="stenoUpperBank">
                                <div class="stenoKey square code81" id="stenoKey-0" data-priority="1" data-keyqwerty="81" data-valueqwerty="q" style={this.state.setPress['q']} >S</div>
                                <div class="stenoKey square code87" id="stenoKey-1" data-priority="3" data-keyqwerty="87" data-valueqwerty="w" style={this.state.setPress['w']}>K</div>
                                <div class="stenoKey square code69" id="stenoKey-2" data-priority="5" data-keyqwerty="69" data-valueqwerty="e" style={this.state.setPress['e']}>R</div>
                                <div class="stenoKey square code82" id="stenoKey-3" data-priority="7" data-keyqwerty="82" data-valueqwerty="r" style={this.state.setPress['r']}>N</div>
                                <div class="stenoKey square code84" id="stenoKey-4" data-priority="8" data-keyqwerty="84" data-valueqwerty="t" style={this.state.setPress['t']}>H</div>
                                <div class="stenoKey square code85" id="stenoKey-5" data-priority="10" data-keyqwerty="85" data-valueqwerty="u" style={this.state.setPress['u']}>*</div>
                                <div class="stenoKey square code73" id="stenoKey-6" data-priority="16" data-keyqwerty="73" data-valueqwerty="i" style={this.state.setPress['i']}>W</div>
                                <div class="stenoKey square code79" id="stenoKey-7" data-priority="18" data-keyqwerty="79" data-valueqwerty="o" style={this.state.setPress['o']}>J</div>
                                <div class="stenoKey square code80" id="stenoKey-8" data-priority="19" data-keyqwerty="80" data-valueqwerty="p" style={this.state.setPress['p']}>N</div>
                                <div class="stenoKey square code219" id="stenoKey-9" data-priority="21" data-keyqwerty="219" data-valueqwerty="[" style={this.state.setPress['[']}>T</div>
                            </div>
                            <div class="stenoLowerBank">
                                <div class="stenoKey rounded code65" id="stenoKey-10" data-priority="2" data-keyqwerty="65" data-valueqwerty="a" style={this.state.setPress['a']} >T</div>
                                <div class="stenoKey rounded code83" id="stenoKey-11" data-priority="4" data-keyqwerty="83" data-valueqwerty="s" style={this.state.setPress['s']}>P</div>
                                <div class="stenoKey rounded code68" id="stenoKey-12" data-priority="6" data-keyqwerty="68" data-valueqwerty="d" style={this.state.setPress['d']}>H</div>
                                <div class="stenoKey rounded code70" id="stenoKey-13" data-priority="7" data-keyqwerty="70" data-valueqwerty="f" style={this.state.setPress['f']}>N</div>
                                <div class="stenoKey rounded code71" id="stenoKey-14" data-priority="9" data-keyqwerty="71" data-valueqwerty="g" style={this.state.setPress['g']}>S</div>
                                <div class="stenoKey rounded code74" id="stenoKey-15" data-priority="11" data-keyqwerty="74" data-valueqwerty="j" style={this.state.setPress['j']}>I</div>
                                <div class="stenoKey rounded code75" id="stenoKey-16" data-priority="17" data-keyqwerty="75" data-valueqwerty="k" style={this.state.setPress['k']}>Y</div>
                                <div class="stenoKey rounded code76" id="stenoKey-17" data-priority="18" data-keyqwerty="76" data-valueqwerty="l" style={this.state.setPress['l']}>J</div>
                                <div class="stenoKey rounded code186" id="stenoKey-18" data-priority="20" data-keyqwerty="186" data-valueqwerty=";" style={this.state.setPress[';']}>G</div>
                                <div class="stenoKey rounded code222" id="stenoKey-19" data-priority="22" data-keyqwerty="222" data-valueqwerty="'" style={this.state.setPress["'"]}>K</div>
                            </div>
                            <div class="stenoVowelKeys">
                                <div class="stenoKey rounded code67" id="stenoKey-20" data-priority="12" data-keyqwerty="67" data-valueqwerty="c" style={this.state.setPress['c']}>U</div>
                                <div class="stenoKey rounded code86" id="stenoKey-21" data-priority="13" data-keyqwerty="86" data-valueqwerty="v" style={this.state.setPress['v']}>O</div>
                                <div class="stenoKey rounded code78" id="stenoKey-22" data-priority="14" data-keyqwerty="78" data-valueqwerty="n" style={this.state.setPress['n']}>E</div>
                                <div class="stenoKey rounded code77" id="stenoKey-23" data-priority="15" data-keyqwerty="77" data-valueqwerty="m" style={this.state.setPress['m']}>A</div>
                            </div>
                        </CCard>
                    </CCol>
                </CRow>
            </div>
        );
    }
}

export default Keyboard;