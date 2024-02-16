import styled from "styled-components";
const RoleDice = ({currentDice,roledice}) => {
    
    
    return (
        <DiceContainer>
            <div className="dice"
            onClick={roledice}
            >
                <img src={`/images/dice/dice_${currentDice}.png`} alt = "dice 1"></img>
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`;