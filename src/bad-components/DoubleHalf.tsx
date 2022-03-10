import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface doubleHalfProps {
    dhValue: number;
    setDhValue: (x: number) => void;
}

function Doubler({ dhValue, setDhValue }: doubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: doubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
