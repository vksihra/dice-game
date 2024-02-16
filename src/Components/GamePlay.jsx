import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [ShowRules, SetShowRules] = useState(false);

    const generateRandomNumber =(min,max) => {
        return Math.floor(Math.random() * (max-min)+min);
    }

    const roledice = () => {
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);
        
        

        if(selectedNumber == randomNumber){
            setScore((prev) => prev+randomNumber);
        }
        else{
            setScore((prev) => prev -2);
        }
        
        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    }

    return (
    <MainContainer>
        <div className="top_section">
        <TotalScore score={score}></TotalScore>
        <NumberSelector
        error = {error} 
        setError = {setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
        </div>
        <RoleDice currentDice={currentDice}
        roledice = {roledice}
        ></RoleDice>
        <div className="btns">
            <OutlineButton onClick={resetScore}>
                Reset
            </OutlineButton>

            <Button
            onClick={() => SetShowRules((prev) => !prev)}
            >
                {ShowRules ? "Hide" : "Show"} Rules
            </Button>
        </div>
        {ShowRules && <Rules></Rules>}
    </MainContainer>

    );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;