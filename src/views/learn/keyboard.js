import React, { Component } from "react";
import "src/scss/_custom.scss";
import { CCard, CCardBody, CCol, CContainer, CInput, CLabel, CRow, CTextarea } from "@coreui/react";
import { TheSidebar } from "src/containers";
const dictionary = {
    "S-P-R--S-A": "vá", SPEWG: "dương", HU: "hoa", "T-R--A-J": "trai", TPNETK: "đẹp",
    //amdau
    "S-": "s", "T-": "t", "K-": "k", "H-": "h", "R-": "r", "P-": "p", "T-H-": "th", "K-H-": "kh", "P-H-": "ph", "T-R-": "tr",
    "K-R-": "ng", "K-P-": "g", "S-H-": "gi", "S-P-": "d", "P-R-": "n", "S-R-": "l",
    "S-K-": "ch", "T-K-": "nh", "S-P-": "d", "T-P-": "đ", "R-H-": "m", "P-R-": "n",
    "S-P-H-": "q", "S-T-K-": "p", "S-P-R-": "v",
    //amchinh
    "-A": "a", "-H-A": "à", "-S-A": "á", "N--A": "ạ", "N--S-A": "ã", "-H-S-A": "ả",
    "*-A": "ă", "-H*-A": "ằ", "S*A": "ắ", "N-*-A": "ặ", "N--S*-A": "ẵ", "-H-S*A": "ẳ",
    "-O": "o", "-H-O": "ò", "-S-O": "ó", "N--O": "ọ", "N--S-O": "õ", "-H-S-O": "ỏ",
    "-E": "e", "-H-E": "è", "-S-E": "é", "N--E": "ẹ", "N--S-E": "ẽ", "-H-S-E": "ẻ",
    "-O-E": "ê", "-U-W": "ư",
    //amcuoi
    "-J-K": "o", "-J-G": "u", "-J": "i", "-J-N": "y",
    "-N-K": "c", "-G-K": "ch",
    "-T-K": "p", "-N-T": "t", "-G": "ng", "-K": "nh", "-T": "m",
    //so
    "#S-": "1", "#K-": "2", "#R-": "3", "#N-": "4", "#-H": "5",
    "#-W": "6", "#-J": "7", "#-N": "8", "#-T": "9", "#-O": "0",
    "#T-": "-1", "#P-": "-2", "#H-": "-3", "#-S": "-4", "#-I": "-5",
    "#-Y": "-6", "#-G": "-7", "#-K": "-8", "#-E": "-9",
};

class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setPress: {
                q: { backgroundColor: "#fccacb", color: "black" ,border:true },
                w: { backgroundColor: "#fcd7a2", color: "black" },
                e: { backgroundColor: "#f8f8a2", color: "black" },
                r: { backgroundColor: "#b3f9a3", color: "black" },
                t: { backgroundColor: "#b3f9a3", color: "black" },
                u: { backgroundColor: "#b3f9a3", color: "black" },
                i: { backgroundColor: "#b3f9a3", color: "black" },
                o: { backgroundColor: "#f8f8a2", color: "black" },
                p: { backgroundColor: "#fcd7a2", color: "black" },
                "[": { backgroundColor: "#fccacb", color: "black" },
                a: { backgroundColor: "#fccacb", color: "black" },
                s: { backgroundColor: "#fcd7a2", color: "black" },
                d: { backgroundColor: "#f8f8a2", color: "black" },
                f: { backgroundColor: "#b3f9a3", color: "black" },
                g: { backgroundColor: "#b3f9a3", color: "black" },
                j: { backgroundColor: "#b3f9a3", color: "black" },
                k: { backgroundColor: "#b3f9a3", color: "black" },
                l: { backgroundColor: "#f8f8a2", color: "black" },
                ";": { backgroundColor: "#fcd7a2", color: "black" },
                "'": { backgroundColor: "#fccacb", color: "black" },
                c: { backgroundColor: "#bacffa", color: "black" },
                v: { backgroundColor: "#bacffa", color: "black" },
                n: { backgroundColor: "#bacffa", color: "black" },
                m: { backgroundColor: "#bacffa", color: "black" },
                u: { backgroundColor: "#ffcc00", color: "black" },
                space: { backgroundColor: "black" },
                backspace: { backgroundColor: "black" },
                num1: { backgroundColor: "#71787d", color: "black" },
                num2: { backgroundColor: "#71787d", color: "black" },
                num3: { backgroundColor: "#71787d", color: "black" },
                num4: { backgroundColor: "#71787d", color: "black" },
                num5: { backgroundColor: "#71787d", color: "black" },
                num6: { backgroundColor: "#71787d", color: "black" },
                num7: { backgroundColor: "#71787d", color: "black" },
                num8: { backgroundColor: "#71787d", color: "black" },
                num9: { backgroundColor: "#71787d", color: "black" },
                num0: { backgroundColor: "#71787d", color: "black" },
                "#": { backgroundColor: "#71787d", color: "black" },
            },
            mapvalue: "",
            wordList: [],
            result: "",
            resultWordList: [],
            numberOfWords: 0,
            numberOfFirstLetter: [0],
            numberOfMainLetter: [0],
            numberOfLastLetter: [0],
            tempstring: "",
            keyLesson: "",
            checkKey:"",
        };
    }
    componentDidMount =() =>{
        var keyLesson = this.state.keyLesson
        var setPress = this.state.setPress
        keyLesson = this.props.keyLesson
        setPress[keyLesson]={ backgroundColor: "#6b6b47", color: "white"  }
        this.setState({
            keyLesson:keyLesson,
            setPress:setPress
        })
        console.log(keyLesson)
    }
    componentDidUpdate (prevProps) {
        if(this.props.keyLesson !== prevProps.keyLesson){
            var keyLesson = this.state.keyLesson
            var setPress = this.state.setPress
            keyLesson = this.props.keyLesson
            setPress[keyLesson]={ backgroundColor: "#6b6b47", color: "white" }
            this.setState({
                keyLesson:keyLesson,
                setPress:setPress
            })
            console.log("update")
        }
    }
    handlePressKey = (event) => {
        let setPress = this.state.setPress;
        let mapvalue = this.state.mapvalue;
        var wordList = this.state.wordList
        let result = this.state.result
        var numberOfWords = this.state.numberOfWords
        var numberOfFirstLetter = this.state.numberOfFirstLetter
        var numberOfMainLetter = this.state.numberOfMainLetter
        var numberOfLastLetter = this.state.numberOfLastLetter
        var resultWordList = this.state.resultWordList
        var tempstring = this.state.tempstring
        var checkKey=this.state.checkKey
        switch (event.which) {
            case 81:
                setPress["q"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "S-";
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                checkKey="q"
                break;
            case 87:
                setPress["w"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "K-";
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 69:
                setPress["e"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "R-";
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 82:
                setPress["r"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "N-";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 84:
                setPress["t"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-H";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 85:
                setPress["u"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "*"
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 73:
                setPress["i"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-W";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 79:
                setPress["o"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-J";
                numberOfLastLetter[numberOfWords] = numberOfLastLetter[numberOfWords] + 1
                break;
            case 80:
                setPress["p"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-N";
                numberOfLastLetter[numberOfWords] = numberOfLastLetter[numberOfWords] + 1
                break;
            case 219:
                setPress["["] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-T";
                numberOfLastLetter[numberOfWords] = numberOfLastLetter[numberOfWords] + 1
                break;
            case 65:
                setPress["a"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "T-";
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 83:
                setPress["s"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "P-";
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 68:
                setPress["d"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "H-";
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 70:
                setPress["f"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "N-";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 71:
                setPress["g"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-S";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 74:
                setPress["j"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-I";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 75:
                setPress["k"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-Y";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 76:
                setPress["l"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-J";
                numberOfLastLetter[numberOfWords] = numberOfLastLetter[numberOfWords] + 1
                break;
            case 186:
                setPress[";"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-G";
                numberOfLastLetter[numberOfWords] = numberOfLastLetter[numberOfWords] + 1
                break;
            case 222:
                setPress["'"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-K";
                numberOfLastLetter[numberOfWords] = numberOfLastLetter[numberOfWords] + 1
                break;
            case 67:
                setPress["c"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-U";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 86:
                setPress["v"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-O";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 78:
                setPress["n"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-E";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 77:
                setPress["m"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "-A";
                numberOfMainLetter[numberOfWords] = numberOfMainLetter[numberOfWords] + 1
                break;
            case 32:
                setPress["space"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + " ";
                numberOfWords = numberOfWords + 1
                numberOfMainLetter[numberOfWords] = 0
                numberOfFirstLetter[numberOfWords] = 0
                numberOfLastLetter[numberOfWords] = 0
                result = result + resultWordList[resultWordList.length - 1] + " "
                break;
            case 8:
                setPress["backspace"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = ""
                numberOfWords = 0
                numberOfMainLetter[numberOfWords] = 0
                numberOfFirstLetter[numberOfWords] = 0
                numberOfLastLetter[numberOfWords] = 0
                result = ""
                break;
            case 48:
                setPress["num0"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 49:
                setPress["num1"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 50:
                setPress["num2"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 51:
                setPress["num3"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 52:
                setPress["num4"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 53:
                setPress["num5"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 54:
                setPress["num6"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 55:
                setPress["num7"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 56:
                setPress["num8"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            case 57:
                setPress["num9"] = { backgroundColor: "red", color: "yellow" };
                setPress["#"] = { backgroundColor: "red", color: "yellow" };
                mapvalue = mapvalue + "#"
                numberOfFirstLetter[numberOfWords] = numberOfFirstLetter[numberOfWords] + 1
                break;
            default:
                break;
        }

        if (mapvalue != this.state.value) {
            wordList = mapvalue.split(" ")
            resultWordList = []
            for (let index = 0; index < wordList.length; index++) {
                tempstring = ""
                const element = wordList[index];
                if (element[0] == "#") {
                    var firstletter = numberOfFirstLetter[numberOfWords] > 0 ? element.slice(0, element.length) : ""
                } else {
                    var firstletter = numberOfFirstLetter[numberOfWords] > 0 ? element.slice(0, numberOfFirstLetter[numberOfWords] * 2) : ""
                }

                var mainletter = numberOfMainLetter[numberOfWords] > 0 ? element.slice(numberOfFirstLetter[numberOfWords] * 2, element.length - numberOfLastLetter[numberOfWords] * 2) : ""
                var lastletter = numberOfLastLetter[numberOfWords] > 0 ? element.slice(element.length - numberOfLastLetter[numberOfWords] * 2, element.length) : ""
                if (dictionary[firstletter] !== undefined) {
                    tempstring = tempstring + dictionary[firstletter]
                }
                if (dictionary[mainletter] !== undefined) {
                    tempstring = tempstring + dictionary[mainletter]
                }
                if (dictionary[lastletter] !== undefined) {
                    tempstring = tempstring + dictionary[lastletter]
                }
                resultWordList.push(tempstring)
            }
        }
        this.setState({
            setPress: setPress,
            mapvalue: mapvalue,
            wordList: wordList,
            result: result,
            numberOfWords: numberOfWords,
            numberOfFirstLetter: numberOfFirstLetter,
            numberOfMainLetter: numberOfMainLetter,
            numberOfLastLetter: numberOfLastLetter,
            resultWordList: resultWordList,
            tempstring: tempstring,
            checkKey:checkKey
        });
    };
    handleUnpressKey = (event) => {
        let setPress = this.state.setPress;
        let mapvalue = this.state.mapvalue;
        switch (event.which) {
            case 81:
                setPress["q"] = { backgroundColor: "#fccacb", color: "black" };
                break;
            case 87:
                setPress["w"] = { backgroundColor: "#fcd7a2", color: "black" };
                break;
            case 69:
                setPress["e"] = { backgroundColor: "#f8f8a2", color: "black" };
                break;
            case 82:
                setPress["r"] = { backgroundColor: "#b3f9a3", color: "black" };
                break;
            case 84:
                setPress["t"] = { backgroundColor: "#b3f9a3", color: "black" };
                break;
            case 85:
                setPress["u"] = { backgroundColor: "#ffcc00", color: "black" };
                break;
            case 73:
                setPress["i"] = { backgroundColor: "#b3f9a3", color: "black" };
                break;
            case 79:
                setPress["o"] = { backgroundColor: "#f8f8a2", color: "black" };
                break;
            case 80:
                setPress["p"] = { backgroundColor: "#fcd7a2", color: "black" };
                break;
            case 219:
                setPress["["] = { backgroundColor: "#fccacb", color: "black" };
                break;
            case 65:
                setPress["a"] = { backgroundColor: "#fccacb", color: "black" };
                break;
            case 83:
                setPress["s"] = { backgroundColor: "#fcd7a2", color: "black" };
                break;
            case 68:
                setPress["d"] = { backgroundColor: "#f8f8a2", color: "black" };
                break;
            case 70:
                setPress["f"] = { backgroundColor: "#b3f9a3", color: "black" };
                break;
            case 71:
                setPress["g"] = { backgroundColor: "#b3f9a3", color: "black" };
                break;
            case 74:
                setPress["j"] = { backgroundColor: "#b3f9a3", color: "black" };
                break;
            case 75:
                setPress["k"] = { backgroundColor: "#b3f9a3", color: "black" };
                break;
            case 76:
                setPress["l"] = { backgroundColor: "#f8f8a2", color: "black" };
                break;
            case 186:
                setPress[";"] = { backgroundColor: "#fcd7a2", color: "black" };
                break;
            case 222:
                setPress["'"] = { backgroundColor: "#fccacb", color: "black" };
                break;
            case 67:
                setPress["c"] = { backgroundColor: "#bacffa", color: "black" };
                break;
            case 86:
                setPress["v"] = { backgroundColor: "#bacffa", color: "black" };
                break;
            case 78:
                setPress["n"] = { backgroundColor: "#bacffa", color: "black" };
                break;
            case 77:
                setPress["m"] = { backgroundColor: "#bacffa", color: "black" };
                break;
            case 32:
                setPress["space"] = { backgroundColor: "black" };
                break;
            case 8:
                setPress["backspace"] = { backgroundColor: "black" };
                break;
            case 48:
                setPress["num0"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 49:
                setPress["num1"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 50:
                setPress["num2"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 51:
                setPress["num3"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 52:
                setPress["num4"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 53:
                setPress["num5"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 54:
                setPress["num6"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 55:
                setPress["num7"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 56:
                setPress["num8"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
            case 57:
                setPress["num9"] = { backgroundColor: "#71787d", color: "black" };
                setPress["#"] = { backgroundColor: "#71787d", color: "black" };
                break;
        }
        this.setState({
            setPress: setPress,
            mapvalue: mapvalue,
        });
    };
    render() {
        
        return (
            <div>
                {this.props.soanthao != undefined?
                <div>
                    <CContainer>
                    <label>Soạn thảo </label>

                <CTextarea type="text"
                                id="inputSteno"
                                style={{ textAlign: "left" , height:"350px"}}
                                autoFocus="true"
                                onKeyDownCapture={this.handlePressKey}
                                onKeyUp={this.handleUnpressKey}
                                value={this.state.result}
                                placeholder="Nơi để gõ"></CTextarea>
                                </CContainer>
                                <br /><br /><br />
                </div>
                
                :<div>
                <CRow style={{ textAlign: "center" }}>
                    <CCol sm="2">
                    <CLabel> Kết quả gõ: </CLabel>
                    </CCol>
                    <CCol sm="8">
                        <p>
                            {this.state.result ? this.state.result : ""}
                        </p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="12">
                        <CContainer>
                            <CInput
                                type="text"
                                id="inputSteno"
                                style={{ textAlign: "center" }}
                                autoFocus="true"
                                onKeyDownCapture={this.handlePressKey}
                                onKeyUp={this.handleUnpressKey}
                                value={this.state.mapvalue}
                                placeholder="Nơi để gõ"
                                onChange={this.props.onChangeParent != undefined ? this.props.onChangeParent : ""}
                            />
                        </CContainer>
                        <br />
                        <br />
                    </CCol>
                </CRow>
                </div>
                }
                
                {/* banphim */}
                <CRow>
                    <CCol
                        xs="7"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div id="stdKeyboard" style={{ backgroundColor: "skyblue" }}>
                            <div class="stdRow">
                                <div class="stdKey code192" id="stdKeyGraveAccent" >
                                    <span class="upper">~</span>
                                    <span class="lower">`</span>
                                </div>
                                <div class="stdKey code49" id="stdKey1" style={this.state.setPress['num1']}>
                                    <span class="upper">!</span>
                                    <span class="lower">1</span>
                                </div>
                                <div class="stdKey code50" id="stdKey2" style={this.state.setPress['num2']}>
                                    <span class="upper">@</span>
                                    <span class="lower">2</span>
                                </div>
                                <div class="stdKey code51" id="stdKey3" style={this.state.setPress['num3']}>
                                    <span class="upper">#</span>
                                    <span class="lower">3</span>
                                </div>
                                <div class="stdKey code52" id="stdKey4" style={this.state.setPress['num4']}>
                                    <span class="upper">$</span>
                                    <span class="lower">4</span>
                                </div>
                                <div class="stdKey code53" id="stdKey5" style={this.state.setPress['num5']}>
                                    <span class="upper">%</span>
                                    <span class="lower">5</span>
                                </div>
                                <div class="stdKey code54" id="stdKey6" style={this.state.setPress['num6']}>
                                    <span class="upper">^</span>
                                    <span class="lower">6</span>
                                </div>
                                <div class="stdKey code55" id="stdKey7" style={this.state.setPress['num7']}>
                                    <span class="upper">&amp;</span>
                                    <span class="lower">7</span>
                                </div>
                                <div class="stdKey code56" id="stdKey8" style={this.state.setPress['num8']}>
                                    <span class="upper">*</span>
                                    <span class="lower">8</span>
                                </div>
                                <div class="stdKey code57" id="stdKey9" style={this.state.setPress['num9']}>
                                    <span class="upper">(</span>
                                    <span class="lower">9</span>
                                </div>
                                <div class="stdKey code48" id="stdKey0" style={this.state.setPress['num0']}>
                                    <span class="upper">)</span>
                                    <span class="lower">0</span>
                                </div>
                                <div class="stdKey code109 code189" id="stdKeyDash">
                                    <span class="upper">_</span>
                                    <span class="lower">-</span>
                                </div>
                                <div class="stdKey code107 code187" id="stdKeyEqualSign">
                                    <span class="upper">+</span>
                                    <span class="lower">=</span>
                                </div>
                                <div class="stdKey code8" id="stdKeyBackspace" style={this.state.setPress['backspace']}>
                                    Backspace
                </div>
                            </div>
                            <div class="stdRow">
                                <div class="stdKey code9" id="stdKeyTab">
                                    Tab
                </div>
                                <div
                                    class="stdKey code81"
                                    id="stdKeyQ"
                                    style={this.state.setPress["q"]}
                                >
                                    <span class="upper" >S</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>Q</span>
                                </div>
                                <div
                                    class="stdKey code87"
                                    id="stdKeyW"
                                    style={this.state.setPress["w"]}
                                >
                                    <span class="upper" >K</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>W</span>
                                </div>
                                <div
                                    class="stdKey code69"
                                    id="stdKeyE"
                                    style={this.state.setPress["e"]}
                                >
                                    <span class="upper" >R</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>E</span>
                                </div>
                                <div
                                    class="stdKey code82"
                                    id="stdKeyR"
                                    style={this.state.setPress["r"]}
                                >
                                    <span class="upper" >N</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>R</span>
                                </div>
                                <div
                                    class="stdKey code84"
                                    id="stdKeyT"
                                    style={this.state.setPress["t"]}
                                >
                                    <span class="upper" >H</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>T</span>
                                </div>
                                <div class="stdKey code89" id="stdKeyY">
                                    Y
                </div>
                                <div
                                    class="stdKey code85"
                                    id="stdKeyU"
                                    style={this.state.setPress["u"]}
                                >
                                    <span class="upper" >*</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>U</span>
                                </div>
                                <div
                                    class="stdKey code73"
                                    id="stdKeyI"
                                    style={this.state.setPress["i"]}
                                >
                                    <span class="upper" >W</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>I</span>
                                </div>
                                <div
                                    class="stdKey code79"
                                    id="stdKeyO"
                                    style={this.state.setPress["o"]}
                                >
                                    <span class="upper" >J</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>O</span>
                                </div>
                                <div
                                    class="stdKey code80"
                                    id="stdKeyP"
                                    style={this.state.setPress["p"]}
                                >
                                    <span class="upper" >N</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>P</span>
                                </div>
                                <div
                                    class="stdKey code219"
                                    id="stdKeyOpenBracket"
                                    style={this.state.setPress["["]}
                                >
                                    <span class="upper" >T</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>[</span>
                                </div>
                                <div class="stdKey code221" id="stdKeyCloseBracket">
                                    <span class="upper">{"}"}</span>
                                    <span class="lower">]</span>
                                </div>
                                <div class="stdKey code220" id="stdKeyBackslash">
                                    <span class="upper">|</span>
                                    <span class="lower">\</span>
                                </div>
                            </div>
                            <div class="stdRow">
                                <div class="stdKey code20" id="stdKeyCapsLock">
                                    Caps Lock
                </div>
                                <div
                                    class="stdKey code65"
                                    id="stdKeyA"
                                    style={this.state.setPress["a"]}
                                >
                                    <span class="upper" >T</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>A</span>
                                </div>
                                <div
                                    class="stdKey code83"
                                    id="stdKeyS"
                                    style={this.state.setPress["s"]}
                                >
                                    <span class="upper" >P</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>S</span>
                                </div>
                                <div
                                    class="stdKey code68"
                                    id="stdKeyD"
                                    style={this.state.setPress["d"]}
                                >
                                    <span class="upper" >H</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>D</span>
                                </div>
                                <div
                                    class="stdKey code70"
                                    id="stdKeyF"
                                    style={this.state.setPress["f"]}
                                >
                                    <span class="upper" >N</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>F</span>
                                </div>
                                <div
                                    class="stdKey code71"
                                    id="stdKeyG"
                                    style={this.state.setPress["g"]}
                                >
                                    <span class="upper" >S</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>G</span>
                                </div>
                                <div class="stdKey code72" id="stdKeyH">
                                    H
                </div>
                                <div
                                    class="stdKey code74"
                                    id="stdKeyJ"
                                    style={this.state.setPress["j"]}
                                >
                                    <span class="upper" >I</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>J</span>
                                </div>
                                <div
                                    class="stdKey code75"
                                    id="stdKeyK"
                                    style={this.state.setPress["k"]}
                                >
                                    <span class="upper" >Y</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>K</span>
                                </div>
                                <div
                                    class="stdKey code76"
                                    id="stdKeyL"
                                    style={this.state.setPress["l"]}
                                >
                                    <span class="upper" >J</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>L</span>
                                </div>
                                <div
                                    class="stdKey code59 code186"
                                    id="stdKeySemicolon"
                                    style={this.state.setPress[";"]}
                                >
                                    <span class="upper" >G</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>;</span>
                                </div>
                                <div
                                    class="stdKey code222"
                                    id="stdKeySingleQuote"
                                    style={this.state.setPress["'"]}
                                >
                                    <span class="upper" >K</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>'</span>
                                </div>
                                <div class="stdKey code13" id="stdKeyEnter">
                                    Enter
                </div>
                            </div>
                            <div class="stdRow">
                                <div class="stdKey code16" id="stdKeyLeftShift">
                                    Shift
                </div>
                                <div class="stdKey code90" id="stdKeyZ">
                                    Z
                </div>
                                <div class="stdKey code88" id="stdKeyX">
                                    X
                </div>
                                <div
                                    class="stdKey code67"
                                    id="stdKeyC"
                                    style={this.state.setPress["c"]}
                                >
                                    <span class="upper" >U</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>C</span>
                                </div>
                                <div
                                    class="stdKey code86"
                                    id="stdKeyV"
                                    style={this.state.setPress["v"]}
                                >
                                    <span class="upper" >O</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>V</span>
                                </div>
                                <div class="stdKey code66" id="stdKeyB">
                                    B
                </div>
                                <div
                                    class="stdKey code78"
                                    id="stdKeyN"
                                    style={this.state.setPress["n"]}
                                >
                                    <span class="upper" >E</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>N</span>
                                </div>
                                <div
                                    class="stdKey code77"
                                    id="stdKeyM"
                                    style={this.state.setPress["m"]}
                                >
                                    <span class="upper" >A</span>
                                    <span class="lower-left" style={{ color: "#6b6b47" }}>M</span>
                                </div>
                                <div class="stdKey code188" id="stdKeyComma">
                                    <span class="upper">&lt;</span>
                                    <span class="lower">,</span>
                                </div>
                                <div class="stdKey code190" id="stdKeyPeriod">
                                    <span class="upper">&gt;</span>
                                    <span class="lower">.</span>
                                </div>
                                <div class="stdKey code191" id="stdKeySlash">
                                    <span class="upper">?</span>
                                    <span class="lower">/</span>
                                </div>
                                <div class="stdKey code16" id="stdKeyRightShift">
                                    Shift
                </div>
                            </div>
                            <div class="stdRow">
                                <div class="stdKey code17" id="stdKeyLeftControl">
                                    Ctrl
                </div>
                                <div class="stdKey code91" id="stdKeyLeftWindows">
                                    Win
                </div>
                                <div class="stdKey code18" id="stdKeyLeftAlt">
                                    Alt
                </div>
                                <div class="stdKey code32" id="stdKeySpace" style={this.state.setPress['space']}>
                                    Space
                </div>
                                <div class="stdKey code18" id="stdKeyRightAlt">
                                    Alt
                </div>
                                <div class="stdKey code92" id="stdKeyRightWindow">
                                    Win
                </div>
                                <div class="stdKey code93" id="stdKeyMenu">
                                    Menu
                </div>
                                <div class="stdKey code17" id="stdKeyRightControl">
                                    Ctrl
                </div>
                            </div>
                        </div>
                    </CCol>
                    <CCol
                        xs="5"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "500px",
                        }}
                    >
                        <div id="stenoKeyboard" style={{ backgroundColor: "skyblue" }}>
                            <div class="stenoNumberBar">
                                <div
                                    class="stenoKey numberBar code48 code49 code50 code51 code52 code53 code54 code55 code56 code57"
                                    id="stenoKeyNumberBar"
                                    style={this.state.setPress['#']}
                                >#</div>
                            </div>
                            <div class="stenoUpperBank">
                                <div
                                    class="stenoKey square code81"
                                    id="stenoKey-0"
                                    data-priority="1"
                                    data-keyqwerty="81"
                                    data-valueqwerty="q"
                                    style={this.state.setPress["q"]}
                                >
                                    S
                </div>
                                <div
                                    class="stenoKey square code87"
                                    id="stenoKey-1"
                                    data-priority="3"
                                    data-keyqwerty="87"
                                    data-valueqwerty="w"
                                    style={this.state.setPress["w"]}
                                >
                                    K
                </div>
                                <div
                                    class="stenoKey square code69"
                                    id="stenoKey-2"
                                    data-priority="5"
                                    data-keyqwerty="69"
                                    data-valueqwerty="e"
                                    style={this.state.setPress["e"]}
                                >
                                    R
                </div>
                                <div
                                    class="stenoKey square code82"
                                    id="stenoKey-3"
                                    data-priority="7"
                                    data-keyqwerty="82"
                                    data-valueqwerty="r"
                                    style={this.state.setPress["r"]}
                                >
                                    N
                </div>
                                <div
                                    class="stenoKey square code84"
                                    id="stenoKey-4"
                                    data-priority="8"
                                    data-keyqwerty="84"
                                    data-valueqwerty="t"
                                    style={this.state.setPress["t"]}
                                >
                                    H
                </div>
                                <div
                                    class="stenoKey square code85"
                                    id="stenoKey-5"
                                    data-priority="10"
                                    data-keyqwerty="85"
                                    data-valueqwerty="u"
                                    style={this.state.setPress["u"]}
                                >
                                    *
                </div>
                                <div
                                    class="stenoKey square code73"
                                    id="stenoKey-6"
                                    data-priority="16"
                                    data-keyqwerty="73"
                                    data-valueqwerty="i"
                                    style={this.state.setPress["i"]}
                                >
                                    W
                </div>
                                <div
                                    class="stenoKey square code79"
                                    id="stenoKey-7"
                                    data-priority="18"
                                    data-keyqwerty="79"
                                    data-valueqwerty="o"
                                    style={this.state.setPress["o"]}
                                >
                                    J
                </div>
                                <div
                                    class="stenoKey square code80"
                                    id="stenoKey-8"
                                    data-priority="19"
                                    data-keyqwerty="80"
                                    data-valueqwerty="p"
                                    style={this.state.setPress["p"]}
                                >
                                    N
                </div>
                                <div
                                    class="stenoKey square code219"
                                    id="stenoKey-9"
                                    data-priority="21"
                                    data-keyqwerty="219"
                                    data-valueqwerty="["
                                    style={this.state.setPress["["]}
                                >
                                    T
                </div>
                            </div>
                            <div class="stenoLowerBank">
                                <div
                                    class="stenoKey rounded code65"
                                    id="stenoKey-10"
                                    data-priority="2"
                                    data-keyqwerty="65"
                                    data-valueqwerty="a"
                                    style={this.state.setPress["a"]}
                                >
                                    T
                </div>
                                <div
                                    class="stenoKey rounded code83"
                                    id="stenoKey-11"
                                    data-priority="4"
                                    data-keyqwerty="83"
                                    data-valueqwerty="s"
                                    style={this.state.setPress["s"]}
                                >
                                    P
                </div>
                                <div
                                    class="stenoKey rounded code68"
                                    id="stenoKey-12"
                                    data-priority="6"
                                    data-keyqwerty="68"
                                    data-valueqwerty="d"
                                    style={this.state.setPress["d"]}
                                >
                                    H
                </div>
                                <div
                                    class="stenoKey rounded code70"
                                    id="stenoKey-13"
                                    data-priority="7"
                                    data-keyqwerty="70"
                                    data-valueqwerty="f"
                                    style={this.state.setPress["f"]}
                                >
                                    N
                </div>
                                <div
                                    class="stenoKey rounded code71"
                                    id="stenoKey-14"
                                    data-priority="9"
                                    data-keyqwerty="71"
                                    data-valueqwerty="g"
                                    style={this.state.setPress["g"]}
                                >
                                    S
                </div>
                                <div
                                    class="stenoKey rounded code74"
                                    id="stenoKey-15"
                                    data-priority="11"
                                    data-keyqwerty="74"
                                    data-valueqwerty="j"
                                    style={this.state.setPress["j"]}
                                >
                                    I
                </div>
                                <div
                                    class="stenoKey rounded code75"
                                    id="stenoKey-16"
                                    data-priority="17"
                                    data-keyqwerty="75"
                                    data-valueqwerty="k"
                                    style={this.state.setPress["k"]}
                                >
                                    Y
                </div>
                                <div
                                    class="stenoKey rounded code76"
                                    id="stenoKey-17"
                                    data-priority="18"
                                    data-keyqwerty="76"
                                    data-valueqwerty="l"
                                    style={this.state.setPress["l"]}
                                >
                                    J
                </div>
                                <div
                                    class="stenoKey rounded code186"
                                    id="stenoKey-18"
                                    data-priority="20"
                                    data-keyqwerty="186"
                                    data-valueqwerty=";"
                                    style={this.state.setPress[";"]}
                                >
                                    G
                </div>
                                <div
                                    class="stenoKey rounded code222"
                                    id="stenoKey-19"
                                    data-priority="22"
                                    data-keyqwerty="222"
                                    data-valueqwerty="'"
                                    style={this.state.setPress["'"]}
                                >
                                    K
                </div>
                            </div>
                            <div class="stenoVowelKeys">
                                <div
                                    class="stenoKey rounded code67"
                                    id="stenoKey-20"
                                    data-priority="12"
                                    data-keyqwerty="67"
                                    data-valueqwerty="c"
                                    style={this.state.setPress["c"]}
                                >
                                    U
                </div>
                                <div
                                    class="stenoKey rounded code86"
                                    id="stenoKey-21"
                                    data-priority="13"
                                    data-keyqwerty="86"
                                    data-valueqwerty="v"
                                    style={this.state.setPress["v"]}
                                >
                                    O
                </div>
                                <div
                                    class="stenoKey rounded code78"
                                    id="stenoKey-22"
                                    data-priority="14"
                                    data-keyqwerty="78"
                                    data-valueqwerty="n"
                                    style={this.state.setPress["n"]}
                                >
                                    E
                </div>
                                <div
                                    class="stenoKey rounded code77"
                                    id="stenoKey-23"
                                    data-priority="15"
                                    data-keyqwerty="77"
                                    data-valueqwerty="m"
                                    style={this.state.setPress["m"]}
                                >
                                    A
                </div>
                            </div>
                        </div>
                    </CCol>
                </CRow>
            </div>
        );
    }
}

export default Keyboard;
