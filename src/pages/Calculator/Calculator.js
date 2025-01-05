import React, { useState } from 'react';
import Header from "../HomePage/Header";
import "./Calculator.css";
import rbImage from '../HomePage/assets/rb_2149261788.png';

const Calculator = () => {
    const [inputs, setInputs] = useState({
        ans1: '',
        ans2: '',
        ans3: '',
        final: '',
        midterm1: '',
        midterm2: ''
    });

    const [finalGrade, setFinalGrade] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.className]: e.target.value });
        setError('');
    };

    function getFinalGrade(midterm1, midterm2, finalProject, hw1, hw2, hw3) {
        const rank = { M: 4, AM: 3, P: 2, B: 1, I: 0 };
        let betterMid = midterm1;
        let worseMid  = midterm2;
        if (rank[midterm2] > rank[midterm1]) {
            betterMid = midterm2;
            worseMid  = midterm1;
        }

        const midFinalSlots = [
            betterMid, betterMid,
            worseMid,
            finalProject, finalProject
        ];

        const allSlots = [
            betterMid, betterMid,
            worseMid,
            finalProject, finalProject,
            hw1, hw2, hw3
        ];

        const countAll = { M: 0, AM: 0, P: 0, B: 0, I: 0 };
        allSlots.forEach(s => {
            if (countAll.hasOwnProperty(s)) {
                countAll[s] += 1;
            }
        });

        const countMidFinal = { M: 0, AM: 0, P: 0, B: 0, I: 0 };
        midFinalSlots.forEach(s => {
            if (countMidFinal.hasOwnProperty(s)) {
                countMidFinal[s] += 1;
            }
        });

        const totalPB = countAll.P + countAll.B;
        const totalMidFinal = midFinalSlots.length;

        if (countAll.I >= 2) {
            return 'F';
        }

        if (
            (countAll.M + countAll.AM === 8) &&
            (countAll.M >= 5)
        ) {
            return 'A';
        }

        const noPBIinMidFinal = (
            countMidFinal.P === 0 &&
            countMidFinal.B === 0 &&
            countMidFinal.I === 0
        );
        if (
            noPBIinMidFinal &&
            (countMidFinal.M + countMidFinal.AM === totalMidFinal) &&
            (countMidFinal.M >= 2)
        ) {
            return 'A-';
        }

        if (
            countAll.B === 0 &&
            countAll.I === 0 &&
            countAll.P <= 2
        ) {
            return 'B+';
        }

        const xAMorM = countMidFinal.AM + countMidFinal.M;
        if (
            countMidFinal.B === 0 &&
            countMidFinal.I === 0 &&
            xAMorM >= 2 &&
            (countMidFinal.P === totalMidFinal - xAMorM)
        ) {
            return 'B-';
        }

        if (totalPB <= 2) {
            if (countAll.M >= totalPB) {
                const totalAMorM = countAll.AM + countAll.M;
                if (totalAMorM >= (8 - totalPB)) {
                    return 'B';
                }
            }
        }

        const exactlyOneIsB =
            (midterm1 === 'B' && rank[midterm2] > rank['B']) ||
            (midterm2 === 'B' && rank[midterm1] > rank['B']);

        if (exactlyOneIsB) {
            return 'C+';
        }

        const allElseIsPAMM = allSlots.every(s => s === 'P' || s === 'AM' || s === 'M' || s === 'B' || s === 'I');
        if (allElseIsPAMM) {
            const case1 = (countAll.B <= 2 && countAll.I === 0 && countAll.AM >= countAll.B);
            const case2 = (countAll.B === 1 && countAll.I === 1 && countAll.AM >= 1 && countAll.M >= 1);
            if (case1 || case2) {
                return 'C';
            }
        }

        return 'D';
    }

    const handleCalculate = () => {
        const { midterm1, midterm2, final, ans1, ans2, ans3 } = inputs;

        if (!midterm1 || !midterm2 || !final || !ans1 || !ans2 || !ans3) {
            setError('Please fill in all fields before predicting the grade.');
            return;
        }

        const grade = getFinalGrade(midterm1, midterm2, final, ans1, ans2, ans3);
        setFinalGrade(grade);
    };

    return (
        <div>
            <div className={'container'}>
                <div className="content1">
                    <div>
                        <div className="inputs">
                            <input
                                className="ans1"
                                type="text"
                                placeholder="Assignment 1"
                                value={inputs.ans1}
                                onChange={handleChange}
                            />
                            <input
                                className="ans2"
                                type="text"
                                placeholder="Assignment 2"
                                value={inputs.ans2}
                                onChange={handleChange}
                            />
                            <input
                                className="ans3"
                                type="text"
                                placeholder="Assignment 3"
                                value={inputs.ans3}
                                onChange={handleChange}
                            />
                            <input
                                className="final"
                                type="text"
                                placeholder="Final Project"
                                value={inputs.final}
                                onChange={handleChange}
                            />
                            <input
                                className="midterm1"
                                type="text"
                                placeholder="Midterm 1"
                                value={inputs.midterm1}
                                onChange={handleChange}
                            />
                            <input
                                className="midterm2"
                                type="text"
                                placeholder="Midterm 2"
                                value={inputs.midterm2}
                                onChange={handleChange}
                            />
                        </div>
                        <button onClick={handleCalculate}>Predict</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {finalGrade && <h3>Final Grade: {finalGrade}</h3>}
                    </div>
                    <img src={rbImage} alt="" className={'turkey'} />
                </div>
            </div>
        </div>
    );
};

export default Calculator;
