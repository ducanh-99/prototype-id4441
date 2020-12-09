import React, { Component } from 'react';
import 'src/scss/_custom.scss';
import { CCard, CCol, CLabel, CRow } from '@coreui/react';
const dictionary = {
    "RHNAK": "mạnh",
    "S":"s",
    "T":"t",
    "K":"k",
    "KR":"ng",
    "SK":"ch",
    "TK":"nh",
    "SPR":"v",
    "HA":"à",
    "SA":"á",
    "HO":"ò",
    "OE":"ê",
    "UW":"ư",
    "N":"k",
    "K":"k",
    "K":"k",
    "K":"k",
}

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
                'u': { backgroundColor: "black" },
            },
            mapvalue: ""
        };
    }
    handleOnChange = (event) => {
        this.props._input(event.target.value)
    }
    handlePressKey = (event) => {
        let setPress = this.state.setPress
        let mapvalue = this.state.mapvalue
        switch (event.which) {
            case 81:
                setPress['q'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"S"
                break
            case 87:
                setPress['w'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"K"
                break
            case 69:
                setPress['e'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"R"
                break
            case 82:
                setPress['r'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"N"
                break
            case 84:
                setPress['t'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"H"
                break
            case 85:
                setPress['u'] = { backgroundColor: "red" }
                mapvalue = "";
                break
            case 73:
                setPress['i'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"W"
                break
            case 79:
                setPress['o'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"J"
                break
            case 80:
                setPress['p'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"N"
                break
            case 219:
                setPress['['] = { backgroundColor: "red" }
                mapvalue = mapvalue +"T"
                break
            case 65:
                setPress['a'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"T"
                break
            case 83:
                setPress['s'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"P"
                break
            case 68:
                setPress['d'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"H"
                break
            case 70:
                setPress['f'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"N"
                break
            case 71:
                setPress['g'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"S"
                break
            case 74:
                setPress['j'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"I"
                break
            case 75:
                setPress['k'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"Y"
                break
            case 76:
                setPress['l'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"J"
                break
            case 186:
                setPress[';'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"G"
                break
            case 222:
                setPress["'"] = { backgroundColor: "red" }
                mapvalue = mapvalue +"K"
                break
            case 67:
                setPress['c'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"U"
                break
            case 86:
                setPress['v'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"O"
                break
            case 78:
                setPress['n'] = { backgroundColor: "red" }
                mapvalue = mapvalue +"E"
                break
            case 77:
                setPress["m"] = { backgroundColor: "red" }
                mapvalue = mapvalue +"A"
                break
        }
        this.setState({
            setPress: setPress,
            mapvalue: mapvalue
        })
    }
    handleUnpressKey = (event) => {
        let setPress = this.state.setPress
        let mapvalue = this.state.mapvalue
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
            setPress: setPress,
            mapvalue:mapvalue
        })
    }
    render() {
        return (
            <div >
                <CRow>
                    <CCol xs="8">
                        <CCard>
                            <CLabel> Result </CLabel>
                            <p>{dictionary[this.state.mapvalue]?dictionary[this.state.mapvalue]:"..."}</p>
                        </CCard>
                    </CCol>
                    <CCol xs="4">
                        <CLabel> Đặt con trỏ vào đây để gõ</CLabel>
                        <input type='text' id="inputSteno" style={{ textAlign: "center" }} autoFocus="true" onKeyDown={this.handlePressKey} onKeyUp={this.handleUnpressKey} onChange={this.handleOnChange} value={this.state.mapvalue}/>
                    </CCol>
                </CRow>
                {/* banphim */}
                <CRow>
                    <CCol xs="7" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div id="stdKeyboard">
                            <div class="stdRow">
                                <div class="stdKey code192" id="stdKeyGraveAccent">
                                    <span class="upper">~</span><span class="lower">`</span></div>
                                <div class="stdKey code49" id="stdKey1"
                                ><span
                                    class="upper">!</span><span class="lower">1</span></div>
                                <div class="stdKey code50" id="stdKey2"
                                ><span
                                    class="upper">@</span><span class="lower">2</span></div>
                                <div class="stdKey code51" id="stdKey3"
                                ><span
                                    class="upper">#</span><span class="lower">3</span></div>
                                <div class="stdKey code52" id="stdKey4"
                                ><span
                                    class="upper">$</span><span class="lower">4</span></div>
                                <div class="stdKey code53" id="stdKey5"
                                ><span
                                    class="upper">%</span><span class="lower">5</span></div>
                                <div class="stdKey code54" id="stdKey6"
                                ><span
                                    class="upper">^</span><span class="lower">6</span></div>
                                <div class="stdKey code55" id="stdKey7"
                                ><span
                                    class="upper">&amp;</span><span class="lower">7</span></div>
                                <div class="stdKey code56" id="stdKey8"
                                ><span
                                    class="upper">*</span><span class="lower">8</span></div>
                                <div class="stdKey code57" id="stdKey9"
                                ><span
                                    class="upper">(</span><span class="lower">9</span></div>
                                <div class="stdKey code48" id="stdKey0"
                                ><span
                                    class="upper">)</span><span class="lower">0</span></div>
                                <div class="stdKey code109 code189" id="stdKeyDash"
                                ><span
                                    class="upper">_</span><span class="lower">-</span></div>
                                <div class="stdKey code107 code187" id="stdKeyEqualSign"
                                ><span
                                    class="upper">+</span><span class="lower">=</span></div>
                                <div class="stdKey code8" id="stdKeyBackspace"
                                >Backspace
                                            </div>
                            </div>
                            <div class="stdRow">
                                <div class="stdKey code9" id="stdKeyTab"
                                >Tab
                                            </div>
                                <div class="stdKey code81" id="stdKeyQ"
                                    style={this.state.setPress['q']}>Q
                                            </div>
                                <div class="stdKey code87" id="stdKeyW"
                                    style={this.state.setPress['w']}>W
                                            </div>
                                <div class="stdKey code69" id="stdKeyE"
                                    style={this.state.setPress['e']}>E
                                            </div>
                                <div class="stdKey code82" id="stdKeyR"
                                    style={this.state.setPress['r']}>R
                                            </div>
                                <div class="stdKey code84" id="stdKeyT"
                                    style={this.state.setPress['t']}>T
                                            </div>
                                <div class="stdKey code89" id="stdKeyY"
                                >Y
                                            </div>
                                <div class="stdKey code85" id="stdKeyU"
                                    style={this.state.setPress['u']}>U
                                            </div>
                                <div class="stdKey code73" id="stdKeyI"
                                    style={this.state.setPress['i']}>I
                                            </div>
                                <div class="stdKey code79" id="stdKeyO"
                                    style={this.state.setPress['o']}>O
                                            </div>
                                <div class="stdKey code80" id="stdKeyP"
                                    style={this.state.setPress['p']}>P
                                            </div>
                                <div class="stdKey code219" id="stdKeyOpenBracket"
                                    style={this.state.setPress['[']}><span
                                        class="upper">{"{"}</span><span class="lower">[</span></div>
                                <div class="stdKey code221" id="stdKeyCloseBracket"
                                ><span
                                    class="upper">{"}"}</span><span class="lower">]</span></div>
                                <div class="stdKey code220" id="stdKeyBackslash"
                                ><span
                                    class="upper">|</span><span class="lower">\</span></div>
                            </div>
                            <div class="stdRow">
                                <div class="stdKey code20" id="stdKeyCapsLock"
                                >Caps Lock
                                            </div>
                                <div class="stdKey code65" id="stdKeyA"
                                    style={this.state.setPress['a']}>A
                                            </div>
                                <div class="stdKey code83" id="stdKeyS"
                                    style={this.state.setPress['s']}>S
                                            </div>
                                <div class="stdKey code68" id="stdKeyD"
                                    style={this.state.setPress['d']}>D
                                            </div>
                                <div class="stdKey code70" id="stdKeyF"
                                    style={this.state.setPress['f']}>F
                                            </div>
                                <div class="stdKey code71" id="stdKeyG"
                                    style={this.state.setPress['g']}>G
                                            </div>
                                <div class="stdKey code72" id="stdKeyH"
                                >H
                                            </div>
                                <div class="stdKey code74" id="stdKeyJ"
                                    style={this.state.setPress['j']}>J
                                            </div>
                                <div class="stdKey code75" id="stdKeyK"
                                    style={this.state.setPress['k']}>K
                                            </div>
                                <div class="stdKey code76" id="stdKeyL"
                                    style={this.state.setPress['l']}>L
                                            </div>
                                <div class="stdKey code59 code186" id="stdKeySemicolon"
                                    style={this.state.setPress[';']}><span
                                        class="upper">:</span><span class="lower">;</span></div>
                                <div class="stdKey code222" id="stdKeySingleQuote"
                                    style={this.state.setPress["'"]}><span
                                        class="upper">"</span><span class="lower">'</span></div>
                                <div class="stdKey code13" id="stdKeyEnter"
                                >Enter
                                            </div>
                            </div>
                            <div class="stdRow">
                                <div class="stdKey code16" id="stdKeyLeftShift"
                                >Shift
                                            </div>
                                <div class="stdKey code90" id="stdKeyZ"
                                >Z
                                            </div>
                                <div class="stdKey code88" id="stdKeyX"
                                >X
                                            </div>
                                <div class="stdKey code67" id="stdKeyC"
                                    style={this.state.setPress['c']}>C
                                            </div>
                                <div class="stdKey code86" id="stdKeyV"
                                    style={this.state.setPress['v']}>V
                                            </div>
                                <div class="stdKey code66" id="stdKeyB"
                                >B
                                            </div>
                                <div class="stdKey code78" id="stdKeyN"
                                    style={this.state.setPress['n']}>N
                                            </div>
                                <div class="stdKey code77" id="stdKeyM"
                                    style={this.state.setPress['m']}>M
                                            </div>
                                <div class="stdKey code188" id="stdKeyComma"
                                ><span
                                    class="upper">&lt;</span><span class="lower">,</span></div>
                                <div class="stdKey code190" id="stdKeyPeriod"
                                ><span
                                    class="upper">&gt;</span><span class="lower">.</span></div>
                                <div class="stdKey code191" id="stdKeySlash"
                                ><span
                                    class="upper">?</span><span class="lower">/</span></div>
                                <div class="stdKey code16" id="stdKeyRightShift"
                                >Shift
                                            </div>
                            </div>
                            <div class="stdRow">
                                <div class="stdKey code17" id="stdKeyLeftControl"
                                >Ctrl
                                            </div>
                                <div class="stdKey code91" id="stdKeyLeftWindows"
                                >Win
                                            </div>
                                <div class="stdKey code18" id="stdKeyLeftAlt"
                                >Alt
                                            </div>
                                <div class="stdKey code32" id="stdKeySpace"
                                >Space
                                            </div>
                                <div class="stdKey code18" id="stdKeyRightAlt"
                                >Alt
                                            </div>
                                <div class="stdKey code92" id="stdKeyRightWindow"
                                >Win
                                            </div>
                                <div class="stdKey code93" id="stdKeyMenu"
                                >Menu
                                            </div>
                                <div class="stdKey code17" id="stdKeyRightControl"
                                >Ctrl
                                        </div>
                            </div>
                        </div>
                    </CCol>
                    <CCol xs="5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "500px" }}>
                        <div id="stenoKeyboard">
                            <div class="stenoNumberBar">
                                <div class="stenoKey numberBar code48 code49 code50 code51 code52 code53 code54 code55 code56 code57" id="stenoKeyNumberBar" style={{ backgroundColor: "red" }}></div>
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
                        </div>
                    </CCol>
                </CRow>
            </div>
        );
    }
}

export default Keyboard;