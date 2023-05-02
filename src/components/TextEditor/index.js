import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  EditorContainer,
  EditorLeft,
  Head,
  Item,
  TextCon,
  EditorImg,
  EditorRight,
  EditorSection,
  CustomButton,
  EditIcons,
  EditTextarea,
} from './styledComponents'

class TextEditor extends Component {
  state = {inputText: '', isBold: false, isItalic: false, isUnderlined: false}

  onText = event => {
    this.setState({inputText: event.target.value})
  }

  toggleBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))
  }

  render() {
    const {inputText, isBold, isItalic, isUnderlined} = this.state

    return (
      <MainContainer>
        <EditorContainer>
          <EditorLeft>
            <Head>Text Editor</Head>
            <EditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </EditorLeft>
          <EditorRight>
            <EditorSection>
              <EditIcons>
                <Item>
                  <CustomButton
                    isClicked={isBold}
                    onClick={this.toggleBold}
                    data-testid="bold"
                  >
                    <VscBold />
                  </CustomButton>
                </Item>
                <Item>
                  <CustomButton
                    isClicked={isItalic}
                    onClick={this.toggleItalic}
                    data-testid="italic"
                  >
                    <GoItalic />
                  </CustomButton>
                </Item>
                <Item>
                  <CustomButton
                    isClicked={isUnderlined}
                    onClick={this.toggleUnderline}
                    data-testid="underline"
                  >
                    <AiOutlineUnderline />
                  </CustomButton>
                </Item>
              </EditIcons>
              <TextCon>
                <EditTextarea
                  isBold={isBold}
                  isItalic={isItalic}
                  onChange={this.onText}
                  isUnderlined={isUnderlined}
                  value={inputText}
                />
              </TextCon>
            </EditorSection>
          </EditorRight>
        </EditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
