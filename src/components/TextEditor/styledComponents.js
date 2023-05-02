import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  font-family: Roboto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
`

export const EditorContainer = styled.div`
  height: 70vh;
  display: flex;
  width: 70%;
  background-color: #1b1c22;
`
export const EditorLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`
export const EditorRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 20px;
  border: 0.4px solid #334155;
  background-color: #25262c;
  border-radius: 10px;
`
export const Head = styled.h1`
  font-size: 27px;
  margin-top: 40px;
  font-weight: 500;
  margin-bottom: 80px;
  color: #f1f5f9;
`
export const EditIcons = styled.ul`
  display: flex;
  border-bottom: 0.4px solid #334155;
  padding: 10px;
  padding-top: 0;
  list-style: none;
  padding-left: 4;
  margin-left: 0;
`
export const TextCon = styled.div`
  height: 100%;
  width: 100%;
`

export const EditTextarea = styled.textarea`
  font-size: 15px;
  width: 100%;
  background-color: #25262c;
  border-width: 0px;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  outline: none;
  padding: 20px;
  line-height: 2;
  padding-top: 6px;
  color: #f1f5f9;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'normal')};
`
export const EditorImg = styled.img`
  width: 80%;
`

export const CustomButton = styled.button`
  height: 30px;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isClicked ? '#faff00' : '#f1f5f9')};
  font-size: 23px;
`
export const Item = styled.li`
  padding: 0;
  margin: 0;
`
