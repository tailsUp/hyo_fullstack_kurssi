import { useState, useEffect } from 'react';

import diagnoseService from "../../services/diagnose";

interface Props2 {
    codes: string[] | undefined;
}

const DiagnoseCodes = ( { codes }: Props2 ) => {

    const [allDiag, addDiagnoses] = useState<string[]>([]);

    useEffect(() => {
        const fetchDiagnosis = async () => {
          if(codes !== undefined && codes.length > 0) {
            addDiagnoses([]);
                codes.forEach(async (CODE) => {
                    await diagnoseService.getWithCODE(CODE).then(_d => {
                        if(_d !== undefined) {
                            addDiagnoses(prevDiag => ([...prevDiag, `${_d.code} ${_d.name}`]));
                        }
                    });
                });
          }
        };
        void fetchDiagnosis();
      }, [codes]);

    if(allDiag === undefined) {
        return (<div><br/>User doesnt have any diagnoses in database</div>);
    }

    return (
        <div>
            <ul>
                {allDiag.map((c) => (
                    <div key={c}>
                        <li>{c}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default DiagnoseCodes;