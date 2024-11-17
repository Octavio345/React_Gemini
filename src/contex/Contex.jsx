import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Contex = createContext();

const ContexProvider = (props) => {

    const [input,setIpunt] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useStates([]);
    const [showResult,setShowResult] = useState(false);
    const[loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");


    const onSent = async (prompt) => {
       await runChat(prompt)
    }

  


    const contexValue = {

    }

    return (
        <Contex.Provider value={contexValue}>
            {props.children}
        </Contex.Provider>
    )
} 

export default ContexProvider