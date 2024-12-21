import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

interface AddCardModalProps {
  isOpened: boolean;
  onClose: () => void;
}

const Layer = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1010;
`;

const LayerBackground = styled.div`
  background-color: rgba(34, 34, 34, 0.5);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

const LayerContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 448px;
  height: 560px;
`;

const AddCardHeader = styled.div`
  align-items: center;
  display: flex;
  height: 44px;
  justify-content: center;
  padding: 0 14px;
  position: relative;
`;

const TitleText = styled.div`
  color: rgba(34, 34, 34, 0.8);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.27px;
`;

const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
  position: absolute;
  right: 14px;
  height: 24px;
  width: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: calc(100vh - 110px);
  overflow-y: scroll;
  padding: 16px;
`;

const ContainerHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin: 0;
`;

const FormLabel = styled.p`
  font-size: 14px;
  letter-spacing: -0.21px;
  padding-bottom: 10px;
  padding-top: 20px;
`;

const LabelContainer = styled.div<{ hasError: boolean }>`
  display: flex;
  position: relative;
  border: 1px solid ${({ hasError }) => (hasError ? "#ef6253" : "#ebebeb")};
  border-radius: 10px;
  height: 48px;
  padding: 15px 12px;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  max-width: 250px;
  min-width: 180px;
`;

const InputNumber = styled.input<{ isHidden?: boolean }>`
  font-feature-settings: "tnum";
  caret-color: #222;
  display: flex;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.21px;
  width: 34px;
  text-align: left; /* 입력 텍스트를 왼쪽 정렬 */
  border: 0;
  outline: none;
  padding-left: 4px; /* 좌측 여백 추가 */
  color: rgba(34, 34, 34, 0.5); /* 숫자색 연하게 */
  ${({ isHidden }) =>
    isHidden &&
    "color: transparent;  text-shadow: 0 0 0 rgba(34, 34, 34, 0.5); /* 연한 숫자 효과 */"}
  ::placeholder {
    color: #bbb;
  }
`;

const Dash = styled.span`
  color: #909090;
  font-size: 14px;
  letter-spacing: -0.21px;
`;

const ClearIcon = styled(AiOutlineClose)`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 12px;
  cursor: pointer;
`;

const FormFeedback = styled.p<{ isError: boolean }>`
  color: ${({ isError }) => (isError ? "#ef6253" : "rgba(34, 34, 34, 0.5)")};
  font-size: 13px;
  letter-spacing: -0.07px;
  padding-bottom: 16px;
  padding-top: 8px;
`;

const KeypadContainer = styled.div`
  position: fixed; /* 화면 고정 */
  bottom: 0; /* 화면 하단에 위치 */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #000;
  border-radius: 8px;

  z-index: 1020;
`;

const KeyRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const KeyButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  color: #fff;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const PasswordInput = styled.input<{ hasError: boolean }>`
  font-feature-settings: "tnum";
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  height: 48px;
  letter-spacing: -0.21px;
  padding: 15px 12px;
  width: 100%;
  border: 1px solid ${({ hasError }) => (hasError ? "#ef6253" : "#ebebeb")};
  border-radius: 10px;
  caret-color: #222;
  ::placeholder {
    color: rgba(34, 34, 34, 0.5);
  }
  position: relative;

  &::after {
    content: "••";
    position: absolute;
    top: 0;
    right: 12px;
    font-size: 14px;
    color: rgba(34, 34, 34, 0.5);
  }
`;

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpened, onClose }) => {
  const [inputs, setInputs] = useState(["", "", "0000", "0000"]);
  const [passwordInput, setPasswordInput] = useState(""); // 비밀번호 입력 상태 추가
  const [hasError, setHasError] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [passwordError, setPasswordError] = useState(false); // 비밀번호 에러 상태
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [keypadNumbers, setKeypadNumbers] = useState<number[]>([]);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [keypadVisible, setKeypadVisible] = useState(false); // 키패드 표시 여부

  useEffect(() => {
    console.log("Current focusedIndex:", focusedIndex);
  }, [focusedIndex]);

  const generateRandomNumbers = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );
    setKeypadNumbers(numbers);
  };

  const handleInputFocus = (index: number) => {
    setFocusedIndex(index); // 포커스된 인덱스 설정
    if (index >= 2) {
      setKeypadVisible(true); // 3번째나 4번째 인풋에서 키패드 표시
    } else {
      setKeypadVisible(false);
    }
  };

  const handleKeypadClick = (number: number) => {
    if (focusedIndex === null || focusedIndex < 2) return;

    const updatedInputs = [...inputs];
    if (
      updatedInputs[focusedIndex] === "0000" ||
      updatedInputs[focusedIndex] === ""
    ) {
      updatedInputs[focusedIndex] = ""; // 초기화
    }
    updatedInputs[focusedIndex] += number; // 숫자 추가
    updatedInputs[focusedIndex] = updatedInputs[focusedIndex].slice(0, 4); // 최대 길이 제한
    setInputs(updatedInputs);

    if (updatedInputs[focusedIndex].length === 4) {
      if (focusedIndex < inputs.length - 1) {
        const nextIndex = focusedIndex + 1;
        setFocusedIndex(nextIndex);
        inputRefs.current[nextIndex]?.focus(); // 다음 필드로 포커스 이동
      } else {
        setFocusedIndex(null);
        setKeypadVisible(false); // 마지막 필드에서 키패드 숨김
      }
    }
  };
  useEffect(() => {
    if (keypadVisible) {
      generateRandomNumbers(); // 키패드 표시 시 무작위 숫자 생성
    }
  }, [keypadVisible]);

  const handleClearClick = () => {
    if (focusedIndex === null) return;
    const updatedInputs = [...inputs];
    updatedInputs[focusedIndex] = updatedInputs[focusedIndex].slice(0, -1);
    setInputs(updatedInputs);
  };

  const handleShuffleClick = () => {
    generateRandomNumbers();
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value.slice(0, 4);
    setInputs(updatedInputs);

    if (value.length === 4) {
      if (index < inputs.length - 1) {
        inputRefs.current[index + 1]?.focus(); // 다음 필드로 이동
      } else {
        setFocusedIndex(null); // 마지막 필드면 포커스 해제
      }
    }
  };
  useEffect(() => {
    const handleGlobalFocus = (event: FocusEvent) => {
      const activeElement = document.activeElement as HTMLElement;

      // 키패드 버튼이나 컨테이너 클릭인지 확인
      const isKeypadClick =
        activeElement &&
        (activeElement.classList.contains("keypad-button") ||
          activeElement.closest(".keypad-container"));

      // 현재 포커스된 인풋 필드의 인덱스를 확인
      const focusedInputIndex = inputRefs.current.findIndex(
        (ref) => ref === activeElement
      );

      if (focusedInputIndex >= 2 || isKeypadClick) {
        setFocusedIndex(focusedInputIndex >= 2 ? focusedInputIndex : null);
        setKeypadVisible(true);
      } else {
        setFocusedIndex(null);
        setKeypadVisible(false);
      }
    };

    window.addEventListener("focusin", handleGlobalFocus);
    window.addEventListener("focusout", handleGlobalFocus);

    return () => {
      window.removeEventListener("focusin", handleGlobalFocus);
      window.removeEventListener("focusout", handleGlobalFocus);
    };
  }, []);

  const handlePasswordChange = (value: string) => {
    setPasswordInput(value.slice(0, 2));
    setPasswordError(false);
  };

  const clearInputs = () => {
    setInputs(["", "", "0000", "0000"]); // 초기값으로 되돌림
    setPasswordInput("");
    setHasError(false);
    setPasswordError(false);
  };

  if (!isOpened) return null;

  return (
    <Layer>
      <LayerBackground onClick={onClose} />
      <LayerContainer>
        <AddCardHeader>
          <TitleText>카드 등록</TitleText>
          <CloseIcon onClick={onClose} />
        </AddCardHeader>
        <Container>
          <ContainerHeader>
            카드 정보를 입력하고 <br /> 간편하게 결제하세요.
          </ContainerHeader>

          {showPasswordField && (
            <FormGroup>
              <FormLabel>비밀번호</FormLabel>
              <PasswordContainer>
                <PasswordInput
                  hasError={passwordError}
                  placeholder="비밀번호"
                  value={passwordInput}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
              </PasswordContainer>
              <FormFeedback isError={passwordInput.length !== 2}>
                {passwordInput.length !== 2
                  ? "올바른 비밀번호를 입력해주세요."
                  : "비밀번호 앞 2자리"}
              </FormFeedback>
            </FormGroup>
          )}

          {/* 카드 번호 입력 필드 */}
          <FormGroup>
            <FormLabel>카드 번호</FormLabel>
            <LabelContainer hasError={hasError}>
              <InputWrapper>
                {inputs.map((input, index) => (
                  <React.Fragment key={index}>
                    <InputNumber
                      placeholder="0000"
                      maxLength={4}
                      value={
                        index >= 2 && input === "0000" // 초기값은 그대로 표시
                          ? "0000"
                          : index >= 2 // 입력값이 있으면 ••••
                          ? "•".repeat(input.length)
                          : input // 1, 2번째는 실제 값 표시
                      }
                      onFocus={() => handleInputFocus(index)}
                      onChange={(e) => {
                        if (index < 2) {
                          handleInputChange(index, e.target.value); // 1, 2번째 인덱스만 키보드 입력 허용
                        }
                      }}
                      onKeyDown={(e) => {
                        if (index >= 2) {
                          e.preventDefault(); // 키보드 입력 차단
                          alert("이 필드는 키패드로만 입력 가능합니다.");
                        }
                      }}
                      isHidden={index >= 2}
                      ref={(el) => (inputRefs.current[index] = el!)}
                    />
                    {index < inputs.length - 1 && <Dash>-</Dash>}
                  </React.Fragment>
                ))}
              </InputWrapper>
              {inputs.some((input) => input !== "") && (
                <ClearIcon onClick={clearInputs} />
              )}
            </LabelContainer>
            <FormFeedback isError={hasError}>
              {hasError
                ? "올바른 카드번호를 입력해주세요."
                : "본인 명의의 카드만 등록 가능합니다"}
            </FormFeedback>
          </FormGroup>
        </Container>
        {keypadVisible && (
          <KeypadContainer className="keypad-container">
            {Array.from({ length: 3 }).map((_, rowIndex) => (
              <KeyRow key={rowIndex}>
                {keypadNumbers
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((num) => (
                    <KeyButton
                      key={num}
                      className="keypad-button" // 버튼 클래스 추가
                      onMouseDown={(e) => e.preventDefault()} // 기본 동작 차단
                      onClick={() => handleKeypadClick(num)}
                    >
                      {num}
                    </KeyButton>
                  ))}
              </KeyRow>
            ))}
            <KeyRow>
              <KeyButton
                className="keypad-button"
                onMouseDown={(e) => e.preventDefault()} // 기본 동작 차단
                onClick={handleShuffleClick}
              >
                재배열
              </KeyButton>
              {keypadNumbers
                .slice(9) // 남은 1개의 숫자
                .map((num) => (
                  <KeyButton
                    key={num}
                    className="keypad-button" // 버튼 클래스 추가
                    onMouseDown={(e) => e.preventDefault()} // 기본 동작 차단
                    onClick={() => handleKeypadClick(num)}
                  >
                    {num}
                  </KeyButton>
                ))}{" "}
              <KeyButton
                className="keypad-button"
                onMouseDown={(e) => e.preventDefault()} // 기본 동작 차단
                onClick={handleClearClick}
              >
                지우기
              </KeyButton>
            </KeyRow>
          </KeypadContainer>
        )}
      </LayerContainer>
    </Layer>
  );
};

export default AddCardModal;
