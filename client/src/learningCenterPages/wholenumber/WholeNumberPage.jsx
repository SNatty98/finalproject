import { useState } from "react";
import "./wholenumberpage.css";

function WholeNumberPage() {
  const [click, setClick] = useState(false);

  function handleShow() {
    setClick(true);
  }

  function handleHide() {
    setClick(false);
  }

  return (
    <div className="wholeNumberPage">
      <div className="WNPspace">
        <h1 className="WNPtitle">Whole Numbers</h1>
        <p className="WNPinfo">
          Numbers can be written in words. Both positive and negative numbers
          can be added, subtracted, multiplied and divided using rules. These
          rules must be applied in a specific order.
        </p>
      </div>
      <div className="WNPlearning">
        <h2 className="WNPlearningHeader">Writing numbers as whole words</h2>
        <p className="WNPinfo">
          Each digit in a number has a place value. It shows the position of a
          digit in a number. The first few place values are shown in the table.
        </p>
        <div className="WNPplacevalue">
          <p className="placevalue">Millions</p>
          <p className="placevalue">Hundred Thousands</p>
          <p className="placevalue">Tens of Thousands</p>
          <p className="placevalue">Thousands</p>
          <p className="placevalue">Hundreds</p>
          <p className="placevalue">Thousands</p>
          <p className="placevalue">Digits</p>
        </div>
        <p className="WNPinfo">
          Words can be shown as numbers when using a place value table:
        </p>
        <p className="WNPinfo1">
          In this example, we can see the number 1,352,099 is displayed
        </p>
        <div className="WNPplacevalue">
          <p className="placevalue">Millions</p>
          <p className="placevalue">Hundred Thousands</p>
          <p className="placevalue">Tens of Thousands</p>
          <p className="placevalue">Thousands</p>
          <p className="placevalue">Hundreds</p>
          <p className="placevalue">Thousands</p>
          <p className="placevalue">Digits</p>
          <p className="placevalue1">1</p>
          <p className="placevalue2">3</p>
          <p className="placevalue3">5</p>
          <p className="placevalue4">2</p>
          <p className="placevalue5">0</p>
          <p className="placevalue6">9</p>
          <p className="placevalue7">9</p>
        </div>
        <h2 className="WNPlearningHeader">Question</h2>
        <p className="WNPinfo1">How do we write 132,600 in words?</p>
        {!click && <button className="WNPbtn" onClick={handleShow}>
          Show Answer
        </button>}
        {click &&  <button className="WNPbtn" onClick={handleHide}>
          Hide Answer
        </button>}
        {click && <p className="WNPinfo1">One hundred and thirty two thousand, six hundred</p>}
        {click && <p className="WNPinfo1">Another way of understanding this is by breaking the number down:</p>}
        {click && <p className="WNPinfo1">100,000 + 30,000 + 2,000 + 600</p>}
        <button><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default WholeNumberPage;
