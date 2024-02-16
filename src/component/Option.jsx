
const Option = ({ option, i, optionClick, selectedIndex, correctAns }) => {
  return (
    <p className={i=== correctAns ? "correct" :
        selectedIndex === i && selectedIndex !== correctAns ? "incorrect" : ""}
        onClick = {() => optionClick(i)}>{option} </p >
  )
}
export default Option
