import { useState } from "react";
import "./wholenumberpage.css";
import firstImg from "../images/437.png";
import secondImg from "../images/437+.png";
import thirdImg from "../images/437++.png";

import imgFirst from "../images/971.png";
import imgSecond from "../images/971+.png";
import imgThird from "../images/971++.png";

function WholeNumberPage() {
  const [click, setClick] = useState(false);
  const [page, setPage] = useState(0);
  const [section, setSection] = useState(0);
  const [section1, setSection1] = useState(0);

  function handleShow() {
    setClick(true);
  }

  function handleHide() {
    setClick(false);
  }

  function nextPage() {
    setPage(1);
  }

  function nextPage1() {
    setPage(2);
  }

  function prevPage() {
    setPage(0);
  }

  function nextSection() {
    setSection(1);
  }

  function nextSections() {
    setSection(2);
  }

  function previousSection() {
    setSection(0);
  }

  function previousSections() {
    setSection(1);
  }

  function nextSection1() {
    setSection1(1);
  }

  function nextSection2() {
    setSection1(2);
  }

  function previousSection1() {
    setSection1(0);
  }

  function previousSection2() {
    setSection1(1);
  }

  return (
    <>
      {page === 0 && (
        <>
          <div className="wholeNumberPage">
            <div className="WNPspace">
              <h1 className="WNPtitle">Whole Numbers</h1>
              <p className="WNPinfo">
                Numbers can be written in words. Both positive and negative
                numbers can be added, subtracted, multiplied and divided using
                rules. These rules must be applied in a specific order.
              </p>
            </div>
            <div className="WNPlearning">
              <h2 className="WNPlearningHeader">
                Writing numbers as whole words
              </h2>
              <p className="WNPinfo">
                Each digit in a number has a place value. It shows the position
                of a digit in a number. The first few place values are shown in
                the table.
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
              {!click && (
                <button className="WNPbtn" onClick={handleShow}>
                  Show Answer
                </button>
              )}
              {click && (
                <button className="WNPbtn" onClick={handleHide}>
                  Hide Answer
                </button>
              )}
              {click && (
                <p className="WNPinfo1">
                  One hundred and thirty two thousand, six hundred
                </p>
              )}
              {click && (
                <p className="WNPinfo1">
                  Another way of understanding this is by breaking the number
                  down:
                </p>
              )}
              {click && (
                <p className="WNPinfo2">100,000 + 30,000 + 2,000 + 600</p>
              )}
              <div>
                <button className="nextPage" onClick={nextPage}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      )}  

      {page === 1 && (
        <>
          <div className="wholeNumberPage1">
            <div className="WNPspace">
              <h1 className="WNPtitle">Whole Numbers</h1>
              <p className="WNPinfo">
                Numbers can be written in words. Both positive and negative
                numbers can be added, subtracted, multiplied and divided using
                rules. These rules must be applied in a specific order.
              </p>
            </div>
            <div className="WNPlearning1">
              <h2 className="WNPlearningHeader">
                Adding and Subtracting Numbers
              </h2>
              <p className="WNPinfo1">Column Addition</p>
              <p className="WNPinfo2">
                The column method allows us to do addition very easily, and
                visually; as demonstrated below
              </p>
              <p className="WNPinfo2">What is 437 + 332?</p>

              {section === 0 && (
                <>
                  <div className="resizePos">
                    <button className="leftBtnOrange">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <img className="resize" src={firstImg} alt="" />
                    <button className="rightBtn" onClick={nextSection}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="infoSection">
                    <p className="columnInfo">
                      In the units column, we start with the addition of 7 + 2 =
                      9.
                    </p>
                  </div>
                </>
              )}

              {section === 1 && (
                <>
                  <div className="resizePos">
                    <button className="leftBtn" onClick={previousSection}>
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <img className="resize" src={secondImg} alt="" />
                    <button className="rightBtn" onClick={nextSections}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="infoSection">
                    <p className="columnInfo">
                      In the tens column, we then have the addition of 3 + 3 =
                      6.
                    </p>
                  </div>
                </>
              )}

              {section === 2 && (
                <>
                  <div className="resizePos">
                    <button className="leftBtn" onClick={previousSections}>
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <img className="resize" src={thirdImg} alt="" />
                  </div>
                  <div className="infoSection">
                    <p className="columnInfo">
                      In the hundreds column, we then have the addition of 4 + 3
                      = 7.
                    </p>
                    <p className="columnInfo">
                      Leaving us with the correct answer of 769!
                    </p>
                  </div>
                </>
              )}

              {section1 === 0 && (
                <>
                  <p className="WNPinfo2">Now Lets try 846 + 125</p>
                  <div className="resizePos">
                    <button className="leftBtnOrange">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <img className="resize" src={imgFirst} alt="" />
                    <button className="rightBtn" onClick={nextSection1}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="infoSection1">
                    <p className="columnInfo">
                      In the units column, we start with the addition of 6 + 5 =
                      11.
                    </p>
                    <p className="columnInfo">
                      In this situation, you keep the 1 digit, and move the 10
                      across to the next column.
                    </p>
                  </div>
                </>
              )}

              <div>
                {section1 === 1 && (
                  <>
                    <p className="WNPinfo2">Now Lets try 846 + 125</p>
                    <div className="resizePos">
                      <button className="leftBtn" onClick={previousSection1}>
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                      <img className="resize" src={imgSecond} alt="" />
                      <button className="rightBtn" onClick={nextSection2}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="infoSection1">
                      <p className="columnInfo">
                        In the tens column, we start with the addition of 4 + 2
                        = 6.
                      </p>
                      <p className="columnInfo">
                        You are then required to add the additional 10 carried
                        from the previous column. Equalling 7.
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div>
                {section1 === 2 && (
                  <>
                    <p className="WNPinfo2">Now Lets try 846 + 125</p>
                    <div className="resizePos">
                      <button className="leftBtn" onClick={previousSection2}>
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                      <img className="resize" src={imgThird} alt="" />
                    </div>
                    <div className="infoSection">
                      <p className="columnInfo">
                        In the hundreds column, we finish with the addition of 8
                        + 1 = 9.
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="arrowForm">
                <button className="prevPage" onClick={prevPage}>
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button className="nextPage1" onClick={nextPage1}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {page === 2 && (
        <div className="wholeNumberPage1">
          <div className="WNPspace">
            <h1 className="WNPtitle">Whole Numbers</h1>
            <p className="WNPinfo">
              Numbers can be written in words. Both positive and negative
              numbers can be added, subtracted, multiplied and divided using
              rules. These rules must be applied in a specific order.
            </p>
          </div>
          <div className="questionSection">
            <input name="radiobtn" type="radio" ></input>
            <input name="radiobtn" type="radio" ></input>
            <input name="radiobtn" type="radio" ></input>
          </div>
        </div>
      )}
    </>
  );
}

export default WholeNumberPage;
